import React from 'react'
import { Element } from 'react-scroll'
import Slider from 'react-slick'

function Carousel() {
  return (
    <Element name='carousel' className='h-full w-screen p-2 lg:p-4 grid grid-cols-2 grid-rows-3 lg:grid-cols-3 lg:grid-rows-2 gap-2'>
      {
        data.map((carousel, index) =>
          <SimpleSlider key={index} carousel={data[index]} position={index} />
        )
      }
    </Element>
  )
}

function SimpleSlider({carousel, position}) {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <></>,
    prevArrow: <></>,
  };
  return (
    <div className='bg-violet-100 w-full h-full shadow'>
      <Slider {...settings} className='h-full w-full'>
        {
          Array(carousel.slideCount).fill(null).map((_, index) =>
            <img src={`/carousels/carousel-${position+1}/${index+1}.${carousel.imageType}`} alt="" srcset="" className='w-[calc((100vw-24px)/2)] h-[calc((100vh-251px)/3)] lg:w-[calc((100vw-32px)/3)] lg:h-[calc((100vh-251px)/2)] object-contain' />
          )
        }
      </Slider>
    </div>
  )
}

const data = [
  {
    slideCount: 10,
    imageType: "jpg"
  },
  {
    slideCount: 8,
    imageType: "jpg"
  },
  {
    slideCount: 10,
    imageType: "jpg"
  },
  {
    slideCount: 11,
    imageType: "jpg"
  },
  {
    slideCount: 10,
    imageType: "jpg"
  },
  {
    slideCount: 10,
    imageType: "jpg"
  },
]

export default Carousel