import React from 'react'
import { Link } from 'react-router-dom'
import image3 from '../../assets/images/PYLNA_III_int___003.png'
const Cta = () => {
    return (
        <div className="py-16">
            <div className="container max-w-[1596px] mx-auto px-6">
                <div className="p-10 bg-[#55694b] min-h-[300px] rounded-[50px] flex flex-col lg:flex-row justify-between gap-32 px-[32px] lg:px-[70px] relative overflow-hidden">

                    {/* Lewa kolumna - Standard Wykończenia */}
                    <div className="lg:w-1/2 relative z-10 flex flex-col gap-4 text-center">
                        <h2 className="font-poppins text-white text-2xl sm:text-5xl md:text-6xl lg:text-[60px] font-extralight">
                            STANDARD WYKOŃCZENIA
                        </h2>
                        <span className="text-md md:text-xl font-light leading-relaxed text-white max-w-[715px] block">
                            Inwestycja realizowana z wysokiej klasy materiałów — trwałość, precyzja wykonania i nowoczesne technologie.
                        </span>
                        <div>
                            <Link to="http://zielona-polana-3.pl/upload/Standard%20wyko%C5%84czenia.pdf" target="_blank">
                                <button className="text-white uppercase font-poppins py-4 px-6 border hover:bg-white hover:text-[#C2A992] transition-all w-full md:w-auto">
                                    Dowiedz się więcej
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Prawa kolumna - Prospekt */}
                    <div className="lg:w-1/2 relative z-10 flex flex-col gap-4 text-center">
                        <h2 className="font-poppins text-white text-2xl sm:text-5xl md:text-6xl lg:text-[60px] font-extralight">
                            PROSPEKT INWESTYCYJNY
                        </h2>
                        <span className="text-md md:text-xl font-light leading-relaxed text-white max-w-[715px] block">
                            Inwestycja realizowana z wysokiej klasy materiałów — trwałość, precyzja wykonania i nowoczesne technologie.
                        </span>
                        <div>
                            <Link to="http://zielona-polana-3.pl/upload/Prospekt%20inwestycyjny.pdf" target="_blank">
                                <button className="text-white uppercase font-poppins py-4 px-6 border hover:bg-white hover:text-[#C2A992] transition-all w-full md:w-auto">
                                    Dowiedz się więcej
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Dekoracyjne tło */}
                    <div
                        className="absolute right-0 top-0 bottom-0 w-1/2 z-0 opacity-[0.1] pointer-events-none"
                        style={{
                            backgroundImage: `
            linear-gradient(to right, rgb(255, 255, 255) 10%, transparent 50%),
            url('${image3}')
          `,
                            backgroundSize: 'cover',
                            backgroundPosition: 'left, right',
                            backgroundRepeat: 'no-repeat, no-repeat',
                            mixBlendMode: 'multiply',
                        }}
                    ></div>
                </div>
            </div>
        </div>

    )
}

export default Cta