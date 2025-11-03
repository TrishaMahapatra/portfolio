import React from 'react'
import { Element } from 'react-scroll'

function GeneralPost() {
  return (
    <Element name='general-post' className='h-full w-screen p-2 lg:p-4 grid grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 gap-2'>
      <div className=''>
        <img src="/portfolio/general post-1.jpg" alt="" srcset="" className='object-contain h-full w-full' />
      </div>
      <div className=''>
        <img src="/portfolio/general post-2.jpg" alt="" srcset="" className='object-contain h-full w-full' />
      </div>
    </Element>
  )
}

export default GeneralPost