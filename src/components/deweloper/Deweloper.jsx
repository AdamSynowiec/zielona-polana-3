import React from 'react'
import KGD from '../../assets/images/kgd.png'
import { Link } from 'react-router-dom'

const Deweloper = () => {
  return (
    <section id="o_deweloperze">
      <div className="relative overflow-hidden">
        <div className="grid grid-cols-12 w-full h-full absolute -z-10">
          <div className="col-span-12 md:col-span-9 bg-[#55694B]"></div>
          <div className="col-span-12 md:col-span-3 bg-white"></div>
        </div>
        <div className="md:bg-transparent bg-[#55694B] container max-w-[1596px] mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-6 flex flex-col items-start justify-center text-center md:text-left">
              <h2 className='font-poppins text-white text-3xl sm:text-4xl md:text-5xl lg:text-[65px] font-extralight max-w-[537px] mb-6'>
                O deweloperze
              </h2>
              <p className='font-poppins text-white font-extralight max-w-[715px] text-lg md:text-xl'>
                TEC PYLNA Sp. z o. o.. stanowi część Krakowskiej Grupy Deweloperskiej (KGD) - wiodącego konsorcjum specjalizującego się w realizacji inwestycji premium
                w najbardziej prestiżowych lokalizacjach Krakowa, ze szczególnym uwzględnieniem Woli Justowskiej.
                <br />
                <br />
                Portfolio KGD to szereg zrealizowanych z sukcesem projektów, które wyróżniają się najwyższą jakością wykonania
                i bezkompromisowym podejściem do detali. Każda nasza inwestycja to starannie przemyślana koncepcja, łącząca kameralny charakter z ponadczasową elegancją.
                Obecnie, bazując na naszym doświadczeniu, planujemy rozwój działalności w kolejnych dzielnicach Krakowa.
              </p>
              <div className="flex flex-col w-full">
                <Link to={'https://kgd-group.pl/'} target='_blank'>
                  <button className='text-white uppercase font-poppins py-4 px-4 border mt-8 hover:bg-white hover:text-[#55694B] transition-all w-full md:w-auto'>Dowiedz się więcej</button>
                </Link>
              </div>
            </div>
            <div className="md:col-span-6 relative flex flex-col items-center md:items-start justify-center">
              <img src={KGD} alt="" className='w-full max-w-[777px] h-auto' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Deweloper