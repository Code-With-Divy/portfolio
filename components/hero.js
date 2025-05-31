import React from 'react';
import {motion} from 'motion/react';

const Hero = () => {
return (
<>
<header>
  {
  // text section
  }
    <section className='flex w-[100vw] flex-wrap gap-12'>
    <div className="text-[13vmin] leading-none text-gray-100 font-bold mt-[7vmax] ml-3.5 sansita-regular sm:w-[50vw] ml-[3.5vw]">
    <div className="text-[7vmin] text-gray-200">
I love,
  </div>
      <h1></h1>
    <div>
  </div>
  <div className='whitespace-nowrap'>
<span>Turning </span>
<motion.span
    animate={{

    }}
    className="bg-gradient-to-r from-[#a912ce] via-[#f72baf] via-[#900cac] to-[#ac0c8f] text-transparent bg-clip-text">Ideas to</motion.span> 
  </div>
  <div className='whitespace-nowrap'>
    <span>awesome</span>
    <span className="bg-gradient-to-r to-[#a912ce] via-[#f72baf] via-[#900cac] from-[#ac0c8f] text-transparent bg-clip-text"> web </span>
    </div>
    <span className="bg-gradient-to-r from-white via-[#a912ce] via-[#f72baf] via-[#900cac] to-[#ac0c8f] text-transparent bg-clip-text">Experiences.</span>
  </div>
    {/*Image section */}
<div className="relative sm:w-[30vmax] sm:h-[30vmax] mx-auto sm:mt-[9vw]">
  <div className="absolute inset-0 blur-3xl opacity-50 z-0 bg-[url('/bg/blur.svg')] bg-no-repeat bg-cover bg-center" />
  <img
    className="relative z-10 w-[80vw] h-[] "
    src="/icons/undraw_firmware_3fxd.svg"
  />
</div>
  </section>
    </header>
</>
)
}

export default Hero;