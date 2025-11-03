import React from 'react'
import { Element } from 'react-scroll'

function Infographic() {
  return (
    <Element name='infographic' className='flex flex-col lg:flex-row h-full w-screen p-2 lg:p-4'>
        <div className="p-0 lg:p-2 w-full lg:w-1/2 h-full">
            <img src="/portfolio/infographic-1.jpg" alt="" srcset="" className='h-full w-full object-contain' />
        </div>
        <div className="p-0 lg:p-2 w-full lg:w-1/2 h-full">
            <img src="/portfolio/infographic-2.jpg" alt="" srcset="" className='h-full w-full object-contain' />
        </div>
    </Element>
  )
}

export default Infographic