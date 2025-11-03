import React from 'react'
import { Element } from 'react-scroll'

function Infographic() {
  return (
    <Element name='infographic' className='flex h-full w-screen p-4'>
        <div className="p-2 w-1/2 h-full">
            <img src="/infographic-1.jpg" alt="" srcset="" className='h-full w-full object-contain' />
        </div>
        <div className="p-2 w-1/2 h-full">
            <img src="/infographic-2.jpg" alt="" srcset="" className='h-full w-full object-contain' />
        </div>
    </Element>
  )
}

export default Infographic