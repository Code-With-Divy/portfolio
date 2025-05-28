"use client"
import {motion} from 'motion/react'
import About from '../components/About';
import '../styles/fonts.css'
export default function Home() {
  return (
  <>
  <main>
    <section>
    <div className="text-[6vmax] leading-none text-gray-100 font-bold m-[2vmax] sansita-regular">
    <div className="text-[4vmax]">
I love,
  </div>
    <div>
  </div>
Turning <motion.span 
animate={{
  
}}
className="bg-gradient-to-r from-[#a912ce] via-[#f72baf] via-[#900cac] to-[#ac0c8f] text-transparent bg-clip-text">Ideas to</motion.span> awesome <span className="bg-gradient-to-r to-[#a912ce] via-[#f72baf] via-[#900cac] from-[#ac0c8f] text-transparent bg-clip-text">web </span><span className="bg-gradient-to-r from-white via-[#a912ce] via-[#f72baf] via-[#900cac] to-[#ac0c8f] text-transparent bg-clip-text">Experiences.</span>
  </div>
  </section>
    </main>
  </>
  );
  }