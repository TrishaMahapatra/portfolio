import React from 'react'
import { Element } from 'react-scroll'

function Gif() {
  return (
    <Element name='gif' className='h-full w-screen p-2 lg:p-4 grid grid-cols-2 grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 gap-2 lg:gap-4'>
      {
        data.map((gif, index) => 
          <div className='w-full h-full'>
            <img src={`/portfolio/gifs/${gif}`} alt="" srcset="" className='w-full h-full object-contain' />
          </div>
        )
      }
    </Element>
  )
}

const data = [
  'gif-1.gif',
  'gif-2.gif',
  'gif-3.gif',
  'gif-4.gif',
]

export default Gif