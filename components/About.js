import React from 'react'

const About = () => {
return (
<>
<section id='about' className='sansita-regular mt-[10vw] sm:mt-[8vw] mt-10 mx-10 mx-[1.5vmax]'>
      <div>
        <h1 className='text-[10vmin] font-bold mb-0 p-0 mx-[1.5vmax]'>About</h1>
        <div className='mt-0 mx-[1.5vmax] mb-3.5 w-[13vmin] rounded-full h-[3vmin] bg-gradient-to-r from-violet-800 to-[#d10da1]'></div>

        <div className='mt-[4.3vw] mx-[1.5vmax] text-[2.5vmax] text-slate-300 pb-5'>
          <p>
  <span className='text-slate-100 font-extrabold'>Hi, I'm Divy</span> — a passionate Web Developer who loves turning ideas into interactive, scalable digital experiences. With a strong foundation in front-end technologies like <span className="text-slate-100 font-bold">HTML, CSS, JavaScript, and Tailwind CSS</span>, I specialize in crafting clean, responsive, and user-focused interfaces.
</p>

          <p>
But my skills don’t stop at the surface. I enjoy exploring the backend world, diving into frameworks, databases, and APIs to build fully functional web applications from end to end. And have great knowledge in the MERN stack and expertise in <span className="text-slate-100 font-bold">MongoDB, Express, React, and Next.js</span>. Whether it’s creating modern UI/UX designs or writing optimized code, I aim to build products that are not only visually appealing but also efficient and impactful.
</p>

<p>
I’m constantly learning, staying up-to-date with the latest tech trends, and pushing the boundaries of what I can create. When I’m not coding, you’ll find me exploring new tools, contributing to open source, or solving programming challenges.
</p>

          <p>
Let’s build something awesome together!
</p>
          <style jsx>
  {`
  p {
  margin-bottom: 3vmax;
  }
  `}
</style>
</div>
</div>
</section>
</>
);
}

export default About;