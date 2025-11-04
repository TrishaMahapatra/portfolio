import React from 'react'
import { Element } from 'react-scroll'
import AdvImage from './AdvImage'

function GeneralPost() {
  return (
    <Element name='general-post' className='h-full w-full p-2 sm:p-3 lg:p-4 grid grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 gap-2'>
      <div className=''>
        <AdvImage name={'general post-1'} />
      </div>
      <div className=''>
        <AdvImage name={'general post-2'} />
      </div>
    </Element>
  )
}

export default GeneralPost