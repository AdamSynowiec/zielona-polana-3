import React from 'react'
import Hero__bg from '../../assets/background/hero-bg.png'
import logo from '../../assets/logo/logo-x.png'
const Hero = () => {
  return (
    <div className="relative h-svh w-full" style={{
      backgroundImage: `url(${Hero__bg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }}>
      <div className="h-full bg-black/[0.3]">
        <div className="container max-w-[1596px] mx-auto px-6 h-full">
          <div className="h-full flex items-center flex-col justify-center text-center">

            <img src={logo} className="mb-10" alt="" />
            <h1 className='hidden'>Zielona polana</h1>
            <span className='text-white text-5xl font-poppins font-thin uppercase text-center'>Nowoczesne apartamenty w Krakowie</span>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero