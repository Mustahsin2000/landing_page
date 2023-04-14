import React from 'react'
import { useState } from 'react'
import { close, logo, menu } from '../assets'
import { navLinks } from '../constants'
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className=' flex py-6 justify-between items-center navbar w-[1135px] mx-auto '>
      <div className='flex items-center'>
        <img src={logo} alt="orbido"
          className='w-[55px] h-[41px] top-[-111px] left-[4787px]'
        />
        <h4 className='text-white font-semibold text-lg w-[70px] h-[23px] top-[35px] left-[171.41px] font-poppins'>OR<span className='text-[#DE9A04]'>BIDO</span></h4>
      </div>
      <ul className='list-none sm:flex hidden justify-end items-center flex-1 '>
        {
          navLinks.map((nav, index) => (
            <li key={nav.id} className={`font-poppins font-normal cursor-pointer
          text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-[56px]'} text-dimWhite 
          `}>
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))
        }
      </ul>

      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img src={toggle ? close : menu} alt="menu"
          onClick={() => setToggle((prev) => !prev)}
        />
        <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-blue-500 absolute
       top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar
       `}>
          <ul className='list-none flex flex-col justify-end items-center flex-1'>
            {
              navLinks.map((nav, index) => (
                <li key={nav.id} className={`font-poppins font-normal cursor-pointer
          text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'} text-dimWhite w-[48px] h-[21px]
          `}>
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar