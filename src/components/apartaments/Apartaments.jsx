import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Config } from '../../Config';
import { Link } from 'react-router-dom';

const API_URL = "https://zielona-polana-3.pl/acp/api/content/items/zp3apartaments?sort[_created]=1";
const API_KEY = Config.auth.API_KEY;

const Apartaments = () => {
  const [apartamentsData, setApartamentsData] = useState([]);
  const [selectedApartment, setSelectedApartment] = useState(null);

  useEffect(() => {
    document.body.style.overflow = selectedApartment ? "hidden" : "auto";
    return () => { document.body.style.overflow = "auto"; };
  }, [selectedApartment]);

  const calcPriceM2 = (price, area) => {
    const numericPrice = Number(price?.toString().replace(/\s/g, ''));
    const numericArea = Number(area?.toString().replace(',', '.'));
    if (!numericPrice || !numericArea) return 0;

    const pricePerM2 = numericPrice / numericArea;
    const rounded = Math.floor(pricePerM2 * 100) / 100;
    return rounded.toLocaleString('pl-PL', { maximumFractionDigits: 2 });
  };

  const getLatestPrice = (priceArray, fallback) => {
    if (!priceArray || priceArray.length === 0) return fallback || null;
    return priceArray[priceArray.length - 1].h_price;
  };

  useEffect(() => {
    fetch(API_URL, {
      method: "GET",
      headers: { "api-key": API_KEY },
    })
      .then(response => response.json())
      .then(data => {
        const apartments = data.map(item => {
          const latestPrice = getLatestPrice(item?.history_price, item?.zp3_price);

          return {
            order: item?.order ?? 9999, // fallback if order missing
            id: item?.zp3_buildingNumber || "-",
            is_garage: item?.is_garage ? item.is_garage : false,
            rooms: item?.zp3_rooms || "-",
            area: item?.zp3_apartmentArea || "-",
            garden: item?.zp3_garden || "-",
            pricem2: calcPriceM2(latestPrice, item?.zp3_apartmentArea),
            price: latestPrice || "-",
            status: item?.zp3_status || "-",
            images:
              item?.zp3_apartmentPlan?.map(
                img =>
                  `${Config.base.url}${Config.cms.rootDir}${Config.cms.mediaDir}${img.path}`
              ) || [],
          };
        });

        // ✅ Sort by order before setting state
        apartments.sort((a, b) => a.order - b.order);

        setApartamentsData(apartments);
      })
      .catch(error => console.error("Error fetching apartments:", error));
  }, []);


  return (
    <section id="apartamenty">
      <div className="relative">
        <div className="bg-white">
          <div className="container max-w-[1596px] mx-auto px-6 ">
            <h2 className='font-poppins text-[#55694B] text-4xl md:text-5xl lg:text-[65px] font-extralight py-24'>APARTAMENTY</h2>
          </div>
        </div>
        <div className="bg-[#55694B] pb-24">
          <div className="grid grid-cols-12">
            <div className="col-span-12">
              <div className="container max-w-[1596px] mx-auto px-6 ">
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white">
                    <thead>
                      <tr className="bg-[#55694B] text-white font-poppins h-[95px]">
                        <th className="py-2 px-4 text-[18px] text-center border-b border-[#55694B]">Nr Budynku</th>
                        <th className="py-2 px-4 text-[18px] text-center border-b border-[#55694B]">Liczba pokoi</th>
                        <th className="py-2 px-4 text-[18px] text-center border-b border-[#55694B]">Powierzchnia</th>
                        <th className="py-2 px-4 text-[18px] text-center border-b border-[#55694B]">Ogród</th>
                        <th className="py-2 px-4 text-[18px] text-center border-b border-[#55694B]">Cena za m<sup>2</sup></th>
                        <th className="py-2 px-4 text-[18px] text-center border-b border-[#55694B]">Cena</th>
                        <th className="py-2 px-4 text-[18px] text-center border-b border-[#55694B]">Status</th>
                        <th className="py-2 px-4 text-[18px] text-center border-b border-[#55694B]">Szczegóły</th>
                      </tr>
                    </thead>
                    <tbody>
                      {apartamentsData?.map((apt, index) => {
                        const isDisabled = apt.status === 'Sprzedany';
                        return (
                          <tr key={index} className={`${isDisabled ? 'text-gray-300' : 'text-gray-700'}`}>
                            {console.log('apt',apt)}
                            <td className="py-2 px-4 text-center border-b border-[#55694B] h-[100px]">{apt.id}</td>
                            <td className="py-2 px-4 text-center border-b border-[#55694B] h-[100px]">{apt.is_garage ? "-" : apt.rooms}</td>
                            <td className="py-2 px-4 text-center border-b border-[#55694B] h-[100px]">{apt.area} m²</td>
                            <td className="py-2 px-4 text-center border-b border-[#55694B] h-[100px]">{apt.is_garage ? "-" : apt.garden + " m²"}</td>
                            <td className="py-2 px-4 text-center border-b border-[#55694B] h-[100px]">{apt.is_garage ? "-" : apt.pricem2 + " zł"}</td>
                            <td className="py-2 px-4 text-center border-b border-[#55694B] h-[100px]">{apt.price} zł</td>
                            <td className={`py-2 px-4 text-center border-b border-[#55694B] ${apt.status === 'Wolny' ? 'text-green-500' : apt.status === 'Rezerwacja' ? 'text-orange-500' : 'text-red-500'}`}>{apt.status}</td>
                            <td className="py-2 px-4 text-center border-b border-[#55694B]">
                              {!isDisabled && (
                                <span className="hover:underline cursor-pointer text-[#696969]" onClick={() => setSelectedApartment(apt)}>Zobacz</span>
                              )}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="container max-w-[1596px] mx-auto px-6 col-span-12">
              <div className="flex flex-row gap-4 text-center mx-auto justify-end mt-[64px]">
                <Link to={"/historia-cen"} className='font-poppins font-extralight text-[16px] text-white underline hover:no-underline'>Historia cen</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {selectedApartment && (
        <motion.div className="z-50 fixed inset-0 bg-white flex justify-center items-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <motion.div className="flex flex-col items-center justify-center bg-white p-6 w-full h-full max-h-[90vh] overflow-auto" initial={{ scale: 0.8 }} animate={{ scale: 1 }} exit={{ scale: 0.8 }}>
            <div className="flex flex-col overflow-y-auto gap-4 max-w-[90%] max-h-[80vh]">
              {selectedApartment.images?.map((img, index) => (
                <img key={index} src={img} alt={`Rzut ${selectedApartment.id} - ${index + 1}`} className="max-h-full w-auto" />
              ))}
            </div>
            <button className="absolute top-[4%] right-[2%]" onClick={() => setSelectedApartment(null)}>
              <svg className="w-8 h-8 text-gray-800" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M6 18 17.94 6M18 18 6.06 6" />
              </svg>
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Apartaments;
