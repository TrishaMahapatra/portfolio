import React, { useEffect } from 'react'
import { Link, scrollSpy } from 'react-scroll';

function Header() {

  useEffect(() => {
    setTimeout(() => {
      scrollSpy.update();
    }, 100);
  }, []);

  return (
    <header className='h-15 w-full bg-white shadow-2xl px-10 flex justify-between items-center fixed top-0 z-40'>
        <Link to='home' smooth className='flex items-center font-apricot text-lg font-bold cursor-pointer'>
            Trisha Mahapatra
        </Link>
        <div className='h-full'>
            <ul className='flex h-full'>
              <Link 
                className='px-5 h-full flex justify-center items-center font-alice cursor-pointer transition-transform duration-300 ease-in-out hover:scale-125 hover:bg-amber-400 hover:z-10'
                smooth
                to="home"
                spy
                offset={-60}
                duration={500}
                activeClass="scale-125 bg-amber-400 cursor-default"
              >
                Home
              </Link>
              <Link 
                className='px-5 h-full flex justify-center items-center font-alice cursor-pointer transition-transform duration-300 ease-in-out hover:scale-125 hover:bg-amber-400 hover:z-10'
                smooth
                to="about"
                spy
                offset={-60}
                duration={500}
                activeClass="scale-125 bg-amber-400 cursor-default"
              >
                About Me
              </Link>
              <Link 
                className='px-5 h-full flex justify-center items-center font-alice cursor-pointer transition-transform duration-300 ease-in-out hover:scale-125 hover:bg-amber-400 hover:z-10'
                smooth
                to="services"
                spy
                offset={-60}
                duration={500}
                activeClass="scale-125 bg-amber-400 cursor-default"
              >
                Services
              </Link>
              <Link
                className='px-5 h-full flex justify-center items-center font-alice cursor-pointer transition-transform duration-300 ease-in-out hover:scale-125 hover:bg-amber-400 hover:z-10'
                smooth
                to="work-sample"
                spy
                offset={-60}
                duration={500}
                activeClass="scale-125 bg-amber-400 cursor-default"
              >
                Work Sample
              </Link>
              <Link 
                className='px-5 h-full flex justify-center items-center font-alice cursor-pointer transition-transform duration-300 ease-in-out hover:scale-125 hover:bg-amber-400 hover:z-10'
                smooth
                to="contact"
                spy
                offset={-60}
                duration={500}
                activeClass="scale-125 bg-amber-400 cursor-default"
              >
                Contact Me
              </Link>
            </ul>
        </div>
    </header>
  )
}

export default Header