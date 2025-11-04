import React from 'react'
import Tabs from '../components/Tabs'
import { Element } from 'react-scroll'

function WorkSample() {
  return (
    <Element name='work-sample' className='bg-fuchsia-100 w-full h-[calc(100%-60px)] py-3 sm:py-4 lg:py-5'>
        <h1 className='text-center font-alice text-4xl sm:text-5xl lg:text-6xl'>Work Sample</h1>
        <Tabs />
    </Element>
  )
}

export default WorkSample