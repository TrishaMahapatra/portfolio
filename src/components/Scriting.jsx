import React from 'react'
import { Element } from 'react-scroll'

function Scripting() {
  return (
    <Element name='scripting' className='h-full w-screen p-4'>
      <h2 className='text-2xl font-alice text-violet-800'>Script on eCommerce  concept for BlueHorse Software</h2>
      <h3 className='text-xl font-alice text-violet-800'>YT Shorts: Ep 1 to 25 [ bluehorseSW ] <a href="https://www.youtube.com/@bluehorseSW/shorts" target='_blank' className='text-amber-500 underline'>Link</a></h3>
      <div className='w-full overflow-x-scroll'>
        <div className='flex justify-around mt-4 gap-4'>
          <img src="/portfolio/scripting/scripting-1.png" alt="" srcset="" className='rounded-xl' />
          <img src="/portfolio/scripting/scripting-2.png" alt="" srcset="" className='rounded-xl' />
          <img src="/portfolio/scripting/scripting-3.png" alt="" srcset="" className='rounded-xl' />
          <img src="/portfolio/scripting/scripting-4.png" alt="" srcset="" className='rounded-xl' />
          <img src="/portfolio/scripting/scripting-5.png" alt="" srcset="" className='rounded-xl' />
        </div>
      </div>
    </Element>
  )
}

export default Scripting