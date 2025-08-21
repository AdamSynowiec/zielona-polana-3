import React from 'react';
import image1 from '../../assets/images/aboutUs.png';
import logo from '../../assets/logo/logo-x.png';

const AboutUs = () => {
  return (
    <section id="o_inwestycji">
      <div className="relative overflow-hidden">
        <div className="grid grid-cols-12 w-full h-full absolute -z-10">
          <div className="col-span-12 md:col-span-9 bg-[#55694B]"></div>
          <div className="col-span-12 md:col-span-3 bg-white"></div>
        </div>
        <div className="md:bg-transparent bg-[#55694B] container max-w-[1596px] mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-6 flex flex-col items-start justify-center text-center md:text-left space-y-8">
              <img src={logo} alt="" className="w-full md:max-w-[300px]" />
              <p className='font-poppins text-white font-extralight max-w-[630px] text-lg md:text-xl '>
                <b>Ekskluzywna inwestycja</b> w sercu Woli Justowskiej przy ul. Pylnej, oferująca 6 komfortowych segmentów w zabudowie bliźniaczej. Apartamenty o powierzchni 105-112 m² z prywatnymi ogrodami od 55 do 401 m².<br/><br/>
                Nowoczesna architektura z drewnianymi elementami elewacji harmonijnie łączy się z otaczającą przyrodą. <b>Bliskość Lasku Wolskiego</b> i terenów rekreacyjnych w połączeniu z szybkim dostępem do centrum Krakowa.<br/><br/>
                <b>Zielona Polana 3</b> — kolejny etap cenionej inwestycji dla wymagających klientów.
                              </p>
            </div>
            <div className="md:col-span-6 relative flex flex-col items-center md:items-start justify-center">
              <img src={image1} alt="" className='w-full max-w-[777px] h-auto' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
