import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import { RxCross2 } from "react-icons/rx";

function Drawer({open, setOpen}) {
  return (
    <div className={`absolute h-screen w-screen top-0 start-0 bg-[rgba(0,0,0,.5)] transition-all ease-in-out duration-300 ${!open ? 'translate-x-full' : 'translate-x-0'}`} onClick={() => setOpen(false)}>
      <div className={`w-6/8 h-full bg-white absolute top-0 end-0 transition-all ease-in-out duration-500 ${!open ? 'translate-x-full' : 'translate-x-0'}`}>
          <RxCross2 className='mt-2 ms-2 text-2xl' onClick={() => setOpen(false)}/>
          <div className='font-apricot text-2xl py-6 p flex justify-center items-center'>Trisha Mahapatra</div>
          <div className='p-3 w-full'>
              <Link to='home' activeClass='bg-amber-400' spy smooth offset={-60} className='text-xl font-alice flex p-3 rounded hover:bg-amber-400' onClick={() => setOpen(false)}>Home</Link>
              <Link to='about' activeClass='bg-amber-400' spy smooth offset={-60} className='text-xl font-alice flex p-3 rounded hover:bg-amber-400' onClick={() => setOpen(false)}>About Me</Link>
              <Link to='services' activeClass='bg-amber-400' spy smooth offset={-60} className='text-xl font-alice flex p-3 rounded hover:bg-amber-400' onClick={() => setOpen(false)}>Services</Link>
              <Link to='work-sample' activeClass='bg-amber-400' spy smooth offset={-60} className='text-xl font-alice flex p-3 rounded hover:bg-amber-400' onClick={() => setOpen(false)}>Work Sample</Link>
              <Link to='contact' activeClass='bg-amber-400' spy smooth offset={-60} className='text-xl font-alice flex p-3 rounded hover:bg-amber-400' onClick={() => setOpen(false)}>Contact Me</Link>
          </div>
      </div>
    </div>
  )
}

export default Drawer