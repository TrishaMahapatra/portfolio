import React from 'react'
import AdvImage from './AdvImage'

function DigitalPoster() {
  return (
    <div className='h-full w-full p-2 lg:p-4 grid grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 gap-2'>
        <div className="">
            <AdvImage name={'digital poster-1'} />
        </div>
        <div className="">
            <AdvImage name={'digital poster-2'} />
        </div>
    </div>
  )
}

export default DigitalPoster