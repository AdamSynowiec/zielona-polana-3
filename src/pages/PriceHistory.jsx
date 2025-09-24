import React, { useState, useEffect, useMemo } from "react";
import * as XLSX from "xlsx";
import { Config } from "../Config";

const API_URL =
    "https://zielona-polana-3.pl/acp/api/content/items/zp3apartaments?sort[_created]=1";
const API_KEY = Config.auth.API_KEY;

const DEVELOPER_INFO = {
    name: "TEC PYLNA",
    legalForm: "SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ",
    phone: "518451555",
    regon: "529085308",
    nip: "6772512766",
    krs: "0001114633",
    email: "biuro@zielona-polana-3.pl",
};

const PriceHistory = () => {
    const [apartmentsData, setApartmentsData] = useState([]);
    const [selectedApartment, setSelectedApartment] = useState(null);

    // Data raportu
    const manualFormat = useMemo(() => {
        const now = new Date();
        const day = now.getDate().toString().padStart(2, "0");
        const month = (now.getMonth() + 1).toString().padStart(2, "0");
        const year = now.getFullYear();
        return `${year}-${month}-${day}`;
    }, []);

    // Blokowanie scrolla przy wybranym apartamencie
    useEffect(() => {
        document.body.style.overflow = selectedApartment ? "hidden" : "auto";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [selectedApartment]);

    const calcPriceM2 = (price, area) => {
        const numericPrice = Number(price?.toString().replace(/\s/g, ""));
        const numericArea = Number(area?.toString().replace(",", "."));
        if (!numericPrice || !numericArea) return 0;
        const pricePerM2 = numericPrice / numericArea;
        const rounded = Math.floor(pricePerM2 * 100) / 100;
        return rounded.toLocaleString("pl-PL", { maximumFractionDigits: 2 });
    };

    const getLatestPrice = (priceArray, fallback) => {
        if (!Array.isArray(priceArray) || priceArray.length === 0) return fallback || "-";
        return priceArray[priceArray.length - 1].h_price;
    };

    // Pobranie danych
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(API_URL, {
                    headers: { "api-key": API_KEY },
                });
                const data = await response.json();

                const apartments = data.map((item) => {
                    const latestPrice = getLatestPrice(item?.history_price, item?.zp3_price);
                    return {
                        id: item?.zp3_buildingNumber || "-",
                        rooms: item?.zp3_rooms || "-",
                        isGarage: item?.is_garage || false,
                        area: item?.zp3_apartmentArea || "-",
                        garden: item?.zp3_garden || "-",
                        priceM2: calcPriceM2(latestPrice, item?.zp3_apartmentArea),
                        price: latestPrice || "-",
                        status: item?.zp3_status || "-",
                        history: item?.history_price || [],
                        images: (item?.zp3_apartmentPlan || []).map(
                            (img) =>
                                `${Config.base.url}${Config.cms.rootDir}${Config.cms.mediaDir}${img.path}`
                        ),
                    };
                });

                setApartmentsData(apartments);
            } catch (error) {
                console.error("Error fetching apartments:", error);
            }
        };

        fetchData();
    }, []);

    const exportToXLSX = () => {
        const headers = [
            "Nazwa Dewelopera",
            "Forma prawna dewelopera",
            "Numer telefonu",
            "Nr REGON",
            "Nr NIP",
            "Nr KRS",
            "Adres poczty elektronicznej",
            "Adres strony internetowej",
            "Nr Budynku",
            "Liczba pokoi",
            "Powierzchnia",
            "Ogród",
            "Cena za m²",
            "Cena (ostatnia)",
            "Status",
            "Data aktualizacji (ostatnia)",
            "Data wygenerowania raportu",
        ];

        const wsData = [
            headers,
            ...apartmentsData.map((apt) => {
                const lastHistory = apt.history[apt.history.length - 1] || {};
                return [
                    DEVELOPER_INFO.name,
                    DEVELOPER_INFO.legalForm,
                    DEVELOPER_INFO.phone,
                    DEVELOPER_INFO.regon,
                    DEVELOPER_INFO.nip,
                    DEVELOPER_INFO.krs,
                    DEVELOPER_INFO.email,
                    window.location.origin,
                    apt.id,
                    apt.isGarage ? "X" : apt.rooms,
                    apt.area,
                    apt.isGarage ? "X" : apt.garden,
                    apt.isGarage ? "X" : `${apt.priceM2} zł`,
                    lastHistory.h_price || apt.price,
                    apt.status,
                    lastHistory.h_date || "X",
                    manualFormat,
                ];
            }),
        ];

        const ws = XLSX.utils.aoa_to_sheet(wsData);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, DEVELOPER_INFO.name);

        const fileName = `${DEVELOPER_INFO.name} ${DEVELOPER_INFO.legalForm} ${manualFormat}.xlsx`;
        XLSX.writeFile(wb, fileName);
    };

    return (
        <div>
            <table className="w-full mb-[100px] text-xs">
                <tbody className="text-center">
                    <tr className="bg-slate-500 text-white">
                        {[
                            "Nazwa Dewelopera",
                            "Forma prawna dewelopera",
                            "Numer telefonu",
                            "Nr REGON",
                            "Nr NIP",
                            "Nr KRS",
                            "Adres poczty elektronicznej",
                            "Adres strony internetowej",
                            "Nr Budynku",
                            "Liczba pokoi",
                            "Powierzchnia",
                            "Ogród",
                            "Cena za m²",
                            "Cena (ostatnia)",
                            "Status",
                            "Data aktualizacji (ostatnia)",
                            "Data wygenerowania raportu",
                        ].map((header, idx) => (
                            <td key={idx} className="p-6">
                                {header}
                            </td>
                        ))}
                    </tr>
                </tbody>
                <tbody>
                    {apartmentsData.map((apt, idx) => {
                        const lastHistory = apt.history[apt.history.length - 1] || {};
                        return (
                            <tr key={idx} className="border-b border-slate-200">
                                <td className="p-6">{DEVELOPER_INFO.name}</td>
                                <td>{DEVELOPER_INFO.legalForm}</td>
                                <td>{DEVELOPER_INFO.phone}</td>
                                <td>{DEVELOPER_INFO.regon}</td>
                                <td>{DEVELOPER_INFO.nip}</td>
                                <td>{DEVELOPER_INFO.krs}</td>
                                <td>{DEVELOPER_INFO.email}</td>
                                <td>{window.location.origin}</td>
                                <td>{apt.id}</td>
                                <td>{apt.isGarage ? "X" : apt.rooms}</td>
                                <td>{apt.area}</td>
                                <td>{apt.isGarage ? "X" : apt.garden}</td>
                                <td>{apt.isGarage ? "X" : `${apt.priceM2} zł`}</td>
                                <td>{lastHistory.h_price || apt.price}</td>
                                <td>{apt.status}</td>
                                <td>{lastHistory.h_date || "X"}</td>
                                <td>{manualFormat}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>

            <button
                className="w-full bg-slate-500 fixed z-10 bottom-0 right-0 left-0 p-4 text-white"
                onClick={exportToXLSX}
            >
                Export do XLSX
            </button>
        </div>
    );
};

export default PriceHistory;
