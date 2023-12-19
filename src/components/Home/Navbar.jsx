import React, { useState } from 'react';
import { IoMenuOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import slidingNavbar from './slidingNavbar';


function Navbar() {
  const [navbarIcon, setNavbarIcon] = useState(true);
  const [showNavbar, setShowNavbar] = useState(false);
  return (
    <div className='absolute w-full h-[15vh] flex flex-row bg-[#f5f5dc]'>
      <div className="basis-1/2">
        <img src="./src/assets/oceanLogo.webp" className='relative w-[60%] h-full left-5 object-contain' alt="" />
      </div>
      <div className="basis-1/2">
        {navbarIcon ? (<IoMenuOutline className='relative w-[50%] h-[50%] block ml-auto top-7 cursor-pointer' onClick={() => {
          setNavbarIcon(false);
          setShowNavbar(true);
        }}  />) : (<IoMdClose className='relative w-[50%] h-[50%] block ml-auto top-7 cursor-pointer' onClick={() => {
          setNavbarIcon(true);
          setShowNavbar(false);
        }} />)}
        {showNavbar && <slidingNavbar />}
      </div>
    </div>
  )
}

export default Navbar