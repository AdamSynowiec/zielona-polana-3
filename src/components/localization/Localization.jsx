import React from 'react';
import image1 from '../../assets/images/01.png';

const Localization = () => {
  return (
    <section id="lokalizacja">
      <div className="relative overflow-hidden">
        <div className="grid grid-cols-12 w-full h-full absolute -z-10">
          <div className="col-span-12 md:col-span-9 bg-[#55694B]"></div>
          <div className="col-span-12 md:col-span-3 bg-white"></div>
        </div>
        <div className="md:bg-transparent bg-[#55694B] container max-w-[1596px] mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-6 flex flex-col items-start justify-center text-center md:text-left space-y-8">
              <h2 className="font-poppins text-white text-3xl sm:text-4xl md:text-5xl lg:text-[65px] font-extralight max-w-[537px] mb-6">Lokalizacja</h2>
              <p className='font-poppins text-white font-extralight max-w-[630px] text-lg md:text-xl '>
                Prestiżowa lokalizacja przy ul. Pylnej w sercu Woli Justowskiej oferuje doskonałą równowagę między dynamicznym miejskim stylem życia a spokojem otaczającej natury.<br/><br/>
                ✓ <b>15 minut</b> do centrum Krakowa<br/>
                ✓ Zaledwie <b>5 minut spacerem</b> do Lasku Wolskiego<br/>
                ✓ Bezpośredni dostęp do malowniczych ścieżek wzdłuż Rudawy
                <br/><br/>
                W najbliższej okolicy znajdują się sklepy, restauracje oraz renomowane placówki edukacyjne i medyczne. 
                <br/>
                <b>Doskonała komunikacja</b> - 8 minut pieszo do przystanku MPK, szybki dojazd do lotniska Balice (20 min) oraz łatwy dostęp do obwodnicy miasta.<br/><br/>
                Zielona Polana 3 - miejsce dla tych, którzy pragną ciszy i spokoju bez rezygnacji z miejskich udogodnień.
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

export default Localization;
