import React from 'react'
import { Element } from 'react-scroll'
import AdvImage from './AdvImage'

function Scripting() {
  return (
    <Element name='scripting' className='h-full w-full p-4'>
      <h2 className='text-2xl font-alice text-violet-800'>Script on eCommerce  concept for BlueHorse Software</h2>
      <h3 className='text-xl font-alice text-violet-800'>YT Shorts: Ep 1 to 25 [ bluehorseSW ] <a href="https://www.youtube.com/@bluehorseSW/shorts" target='_blank' className='text-amber-500 underline'>Link</a></h3>
      <div className='w-full overflow-x-scroll scrollbar-hide'>
        <div className='flex justify-around mt-4 gap-4'>
          <AdvImage name="scripting-1" className='rounded-xl' />
          <AdvImage name="scripting-2" className='rounded-xl' />
          <AdvImage name="scripting-3" className='rounded-xl' />
          <AdvImage name="scripting-4" className='rounded-xl' />
          <AdvImage name="scripting-5" className='rounded-xl' />
        </div>
      </div>
    </Element>
  )
}

export default Scripting