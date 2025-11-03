import React from 'react'
import { Element } from 'react-scroll'

function Home() {
  return (
    <Element name="home" className='bg-[#393a3f] h-full flex flex-row'>
        <div className='h-full w-3/7 flex justify-center items-center shrink-0'>
            <div className='w-80 h-80 relative'>
                <div className='w-[340px] h-[340px] bg-amber-400 absolute rounded-full' />
                <div className='w-80 h-80 absolute ring-4 ring-white rounded-full overflow-hidden top-0'>
                    <img src="/avatar.jpeg" alt="" className='w-full h-full object-fill' />
                </div>
            </div>
        </div>
        <div className='h-full grow flex flex-col gap-5 justify-center px-20'>
            <h2 className='text-amber-400 text-5xl font-black text-left tracking-widest'>Hello , I am Trisha !</h2>
            <p className='font-alice text-2xl text-white'>I’m a Digital Content Creator passionate about crafting compelling content and visually appealing designs. I specialize in content writing, scriptwriting, infographics, carousels, and social media graphics that make brands stand out. With a creative eye for design and a strong flair for writing, I create content that’s both stunning and impactful.</p>
        </div>
    </Element>
  )
}

export default Home