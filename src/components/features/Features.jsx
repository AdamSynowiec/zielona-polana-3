import React from 'react';
import image2 from '../../assets/images/krj_M1_POZIOM_1_B_1920.png';
import fan from '../../assets/icons/fan.svg';
import clima from '../../assets/icons/clima.svg';
import heating from '../../assets/icons/heating.svg';
import smarthome from '../../assets/icons/smarthome.svg';

const features = [
  { title: 'Wentylacja', span: "Mechaniczna nawiewno-wywiewna z rekuperatorem", img: fan },
  { title: 'Klimatyzacja', span: "Wewnętrzna instalacja w salonie i sypialniach", img: clima },
  { title: 'Ogrzewanie', span: "Ogrzewanie podłogowe w całym apartamencie,", img: heating },
  { title: 'Inteligenty dom', span: "Instalacja BMS", img: smarthome },
];

const Features = () => {
  return (
    <div className="relative md:min-h-screen py-12 md:py-24"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)), url(${image2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}>
      <div className="container max-w-[1596px] mx-auto px-4 sm:px-6 lg:px-8 md:min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-12 md:min-h-screen gap-9">
          <div className="md:col-span-6 md:py-24 flex flex-col justify-center text-center md:text-left">
            <h2 className="font-poppins text-white text-4xl sm:text-5xl md:text-6xl lg:text-[85px] font-extralight max-w-[537px]">
              Wyjątkowe Apartamenty
            </h2>
          </div>
          <div className="md:col-span-6 flex items-center">
            <div className="bg-[#FAF2E9]/[0.05] w-full md:aspect-square grid grid-cols-2 grid-rows-2">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`hover:bg-[#FAF2E9]/[0.15] transition-all flex flex-col items-center justify-center text-center border-[#FAF2E9]/[0.3] ${index % 2 === 0 ? 'border-r' : ''} ${index < 2 ? 'border-b' : ''}`}
                >
                  <h3 className='text-white/[.8] text-lg sm:text-xl md:text-2xl font-poppins font-base drop-shadow-md'>
                    {feature.title}
                  </h3>
                  <img src={feature.img} alt={feature.title} className='my-6 w-12 sm:w-16 md:w-20' />
                  <span className='font-poppins text-[#FAF2E9] text-sm sm:text-base md:text-lg font-extralight drop-shadow-md px-4'>
                    {feature.span}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
