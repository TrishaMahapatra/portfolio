import React from 'react'
import { Element } from 'react-scroll'
import AdvImage from './AdvImage'

function Gif() {
  const screenWidth = useMemo(() => window.innerWidth, []);
  const cardWidth = useMemo(() => parseInt(screenWidth < 1000 ? screenWidth / 2 : screenWidth / 4), [screenWidth])
  return (
    <Element name='gif' className='h-full w-full p-2 lg:p-4 grid grid-cols-2 grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 gap-2 lg:gap-4'>
      {
        data.map((gif, index) => 
          <div className='w-full h-full'>
            <AdvImage name={gif} />
          </div>
        )
      }
    </Element>
  )
}

const data = [
  'gif-1',
  'gif-2',
  'gif-3',
  'gif-4',
]

export default Gif