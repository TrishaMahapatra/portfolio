import React from 'react'
import { Element } from 'react-scroll'

function GeneralPost() {
  return (
    <Element name='general-post' className='flex h-full w-screen p-4'>
        <div className="p-2 w-1/2 h-full">
            <img src="/general post-1.jpg" alt="" srcset="" className='h-full w-full object-contain' />
        </div>
        <div className="p-2 w-1/2 h-full">
            <img src="/general post-2.jpg" alt="" srcset="" className='h-full w-full object-contain' />
        </div>
    </Element>
  )
}

export default GeneralPost