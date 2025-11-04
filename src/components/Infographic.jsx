import React, { useMemo } from 'react'
import { Element } from 'react-scroll'
import AdvImage from './AdvImage'

function Infographic() {
  const screenWidth = useMemo(() => window.innerWidth, []);
  const cardWidth = useMemo(() => parseInt(screenWidth < 1000 ? screenWidth : screenWidth / 2), [screenWidth]);
  return (
    <Element name='infographic' className='flex flex-col lg:flex-row h-full w-full p-2 sm:p-3 gap-2 lg:p-4'>
        <div className="p-0 lg:p-2 w-full lg:w-1/2 h-full">
            <AdvImage name={'infographic-1'} />
        </div>
        <div className="p-0 lg:p-2 w-full lg:w-1/2 h-full">
            <AdvImage name={'infographic-2'} />
        </div>
    </Element>
  )
}

export default Infographic