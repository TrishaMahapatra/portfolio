import React, { useState } from 'react'
import Infographic from './Infographic';
import Carousel from './Carousel';
import GeneralPost from './GeneralPost';
import { Link } from 'react-scroll';
import DigitalPoster from './DigitalPoster';
import Banners from './Banner';
import Blogs from './Blogs';
import Scripting from './Scriting';
import Gif from './Gif';

function Tabs() {
  const [active, setActive] = useState('Infographic Design');
  return (
    <div className='h-[calc(100%-72px)] lg:h-[calc(100%-110px)]'>
      <div className='hidden lg:flex justify-around mt-5 border-b-purple-800 border-b-2 px-2'>
        {
          items.map(item => (
            <div className={`${active == item ? 'bg-purple-800 text-white' : 'text-purple-800'} rounded-tl-lg rounded-tr-lg grow flex justify-center py-3 cursor-pointer`} onClick={() => setActive(item)}>
              {item}
            </div>
          ))
        }
      </div>
      <div className='w-full overflow-x-scroll mt-3 lg:hidden'>
        <div className='flex px-1 gap-2'>
          {
            items.map(item => (
              <div onClick={() => setActive(item)} className={`${active == item ? 'text-white bg-purple-800' : 'bg-purple-200 text-purple-800'} rounded-full py-2 px-4 text-nowrap`}>
                {item}
              </div>
            ))
          }
        </div>
      </div>
      {/* <div className='h-full w-full overflow-x-scroll scrollbar-hide'> */}
        <div className='h-full w-full' id='tabBody'>
          {
            active == "Infographic Design" &&
            <Infographic />
          }
          {
            active == 'Carousel Design' &&
            <Carousel />
          }
          {
            active == 'Gif' &&
            <Gif />
          }
          {
            active == 'General Post' &&
            <GeneralPost />
          }
          {
            active == 'Digital Poster' &&
            <DigitalPoster />
          }
          {
            active == 'Banners' &&
            <Banners />
          }
          {
            active == 'blogs' &&
            <Blogs />
          }
          {
            active == 'Scripting' &&
            <Scripting />
          }
        </div>
      {/* </div> */}
    </div>
  )
}

const items = [
  'Infographic Design',
  'Carousel Design',
  "Gif",
  'General Post',
  'Digital Poster',
  // 'Banners',
  'blogs',
  'Scripting'
]

export default Tabs