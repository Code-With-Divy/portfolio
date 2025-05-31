import React from 'react'

const About = () => {
return (
  <>
  <section id='about' className='sansita-regular mt-[10vw] sm:mt-[5vw] m-10 ml-8 h-[1000vh]'>
 <div> 
 {/*heading*/}
 <h1 className='text-[10vmin] font-bold mb-0 p-0 '>About</h1>
 <div className='mt-0 w-[13vmin] rounded-full h-[3vmin] bg-gradient-to-r from-violet-800 to-[#d10da1]'></div>
 {/*Content*/}
 <p>Hi, I'm Divy — a passionate Web Developer who loves turning ideas into interactive, scalable digital experiences. With a strong foundation in front-end technologies like HTML, CSS, JavaScript, and Tailwind CSS, I specialize in crafting clean, responsive, and user-focused interfaces.

But my skills don’t stop at the surface. I enjoy exploring the backend world, diving into frameworks, databases, and APIs to build fully functional web applications from end to end. Whether it’s creating modern UI/UX designs or writing optimized code, I aim to build products that are not only visually appealing but also efficient and impactful.

I’m constantly learning, staying up-to-date with the latest tech trends, and pushing the boundaries of what I can create. When I’m not coding, you’ll find me exploring new tools, contributing to open source, or solving programming challenges.

Let’s build something awesome together!
</p>
 </div>
  </section>
  </>
  );
}

export default About;