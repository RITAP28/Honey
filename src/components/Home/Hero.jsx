import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaRegCopyright } from "react-icons/fa"
import Products from '../products/Products';
import { Link } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';

function Hero() {
  return (
    <>
    <Routes>
      <Route path='/products' element={<Products />} />
    </Routes>

    <div className='absolute w-full h-[195rem] top-[15vh] bg-[#f5f5dc]'>
        <div className="absolute w-full h-[3rem] top-20">
          <p className='flex justify-center pt-3 text-3xl font-mono font-bold'>
            We deliver the
          </p>
        </div>
        <div className="relative w-full h-[4.5rem] top-[8rem] flex">
          <p className='basis-1/2 flex justify-end font-mono text-7xl'>Best</p>
          <p className="basis-1/2 font-mono text-5xl pt-5">Honey.</p>
        </div>
        <div className="relative w-full h-[5rem] top-[8rem]">
          <p className='flex justify-center text-6xl font-mono pt-2 font-extrabold'>SERIOUSLY!</p>
        </div>
        <div className="relative w-full h-[14rem] top-[15rem]">
          <p className='font-mono text-lg font-bold flex justify-center'>Choose from a wide range of categories</p>
          <div className="grid grid-cols-2 gap-2 pt-8 font-mono font-bold">
            <div className='w-full h-[4rem] bg-red-400 rounded-md hover:cursor-pointer hover:bg-red-500'>
              <p className='flex justify-center pt-4'>Category-01</p>
            </div>
            <div className='w-full h-[4rem] bg-red-400 rounded-md hover:cursor-pointer hover:bg-red-500'><p className='flex justify-center pt-4'>Category-02</p></div>
            <div className='w-full h-[4rem] bg-red-400 rounded-md hover:cursor-pointer hover:bg-red-500'><p className='flex justify-center pt-4'>Category-03</p></div>
            <div className='w-full h-[4rem] bg-red-400 rounded-md hover:cursor-pointer hover:bg-red-500'><p className='flex justify-center pt-4'>Category-04</p></div>
          </div>
        </div>
        {/* products section */}
        <div className="relative w-full h-[33rem] top-[17rem]">
          <p className="font-mono text-2xl font-bold flex justify-center pt-4">
            Products
          </p>
          <div className="relative w-[90%] h-[22rem] top-4 m-auto">
            <div className="relative w-[full] h-full bg-white">
              <img src="./src/assets/tbh.webp" className='w-full h-[80%] object-contain pt-2' alt="" />
              <p className='font-mono font-semibold flex justify-center pt-2 text-xl'>tbh-snack#1</p>
              <p className="font-mono font-semibold flex justify-center text-lg">$20.99</p>
            </div>
          </div>
          <div className="relative w-full h-[3rem] top-[3rem] flex justify-center">
            <Link to='/products'>
            <button className="px-4 bg-sky-600 hover:bg-sky-700 text-white font-mono font-bold rounded-lg">Show More</button>
            </Link>
            
          </div>
        </div>
        {/* about mini section */}
        <div className="relative w-full h-[77rem] top-[17rem]">
          <p className='flex justify-center font-mono text-2xl font-extrabold pt-8'>Why should you buy from us?</p>
          <div className="relative w-full h-[71rem] top-[2rem] flex flex-col">
            <div className="w-full h-[21rem] flex flex-col">
              <div className="w-[12rem] h-[12rem] mx-auto rounded-full overflow-hidden">
                <img src="./src/assets/honey4.jpg" className='w-full h-full object-cover' alt="" />
              </div>
              <p className='font-mono font-bold text-lg flex justify-center pt-4'>Premium Quality-No Compromise</p>
              <p className='w-[60%] font-mono text-sm mx-auto uppercase pt-1'>
              Offering pure, locally sourced 
              </p>
              <p className='w-[50%] font-mono text-sm mx-auto uppercase'>
               honey with a commitment
              </p><p className='w-[40%] font-mono text-sm mx-auto uppercase'>
              to sustainability
              </p><p className='w-[55%] font-mono text-sm mx-auto uppercase'>
              and high-quality standards.
              </p>
            </div>
            <div className="w-full h-[21rem] mt-8">
            <div className="w-[12rem] h-[12rem] mx-auto rounded-full overflow-hidden">
                <img src="./src/assets/honey4.jpg" className='w-full h-full object-cover' alt="" />
              </div>
              <p className='font-mono font-bold text-lg flex justify-center pt-4'>Diverse and Unique Selection</p>
              <p className='w-[40%] font-mono text-sm mx-auto uppercase pt-1'>
              Providing a range of
              </p>
              <p className='w-[60%] font-mono text-sm mx-auto uppercase'>
               honey products with exclusive
              </p><p className='w-[50%] font-mono text-sm mx-auto uppercase'>
              varieties and outstanding
              </p><p className='w-[35%] font-mono text-sm mx-auto uppercase'>
              health benefits.
              </p>
            </div>
            <div className="w-full h-[21rem] mt-8">
            <div className="w-[12rem] h-[12rem] mx-auto rounded-full overflow-hidden">
                <img src="./src/assets/honey4.jpg" className='w-full h-full object-cover' alt="" />
              </div>
              <p className='w-[70%] mx-auto font-mono font-bold text-lg flex justify-center pt-4'>Ensuring YOUR Happiness is</p>
              <p className='w-[40%] mx-auto font-mono font-bold text-lg flex justify-center'>OUR Happiness</p>
              <p className='w-[56%] font-mono text-sm mx-auto uppercase pt-1'>
              ensuring customer satisfaction
              </p>
              <p className='w-[55%] font-mono text-sm mx-auto uppercase'>
               through transparent practices
              </p><p className='w-[40%] font-mono text-sm mx-auto uppercase'>
              and excellent service.
              </p>
            </div>
          </div>
        </div>
        {/* email section */}
        <div className="relative w-full h-[20rem] top-[17rem]">
          <p className='font-mono uppercase text-2xl flex justify-center font-bold'>Delicious Emails</p>
          <p className='w-[80%] mx-auto font-mono pt-4 '>Be the First to know everything about</p>
          <p className='w-[50%] mx-auto font-mono'>us by <span className='font-bold uppercase'>signing</span> up below</p>
          {/* form section */}
          <form className='mt-12 w-[90%] mx-auto h-[7rem]'>
            <input type="text" placeholder='Email' id='email' className="w-full shadow-md border rounded py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pl-[1rem] py-auto font-mono" />
            <div className="w-full h-[4rem] flex justify-center">
            <button className="bg-sky-500 hover:bg-sky-700 text-white font-mono font-bold px-4 rounded-lg focus:outline-none focus:shadow-outline mt-4 ">I'm in</button>
            </div>
          </form>
          <p className='font-mono text-xs w-[80%] mx-auto text-zinc-400'>By signing up, you are providing the consent to be</p>
          <p className='font-mono text-xs w-[39%] mx-auto text-zinc-400'>emailed regularly by us.</p>
        </div>
        {/* footer section */}
        <div className="relative w-full h-[25rem] bg-[#f9de11] top-[17rem]">
          <div className="w-full h-[10rem]">
            <img src="./src/assets/oceanLogo.webp" className='w-[12rem] h-[7rem] object-contain pt-4 pl-4' alt="" />
          </div>
          <div className="w-full h-[13rem] flex">
              <div className="basis-1/2 ">
                <ul className='pl-4 font-mono font-bold text-xl'>
                  <li className='hover:cursor-pointer hover:underline'>Shop</li>
                  <li className='hover:cursor-pointer hover:underline'>Reviews</li>
                  <li className='hover:cursor-pointer hover:underline'>Our Team</li>
                  <li className='hover:cursor-pointer hover:underline'>Contact us</li>
                </ul>
              </div>
              <div className="basis-1/2">
                <ul className="pt-2 flex justify-end">
                  <li className='px-1'>
                  <FaInstagram className='w-[2rem] h-[2rem] object-contain hover:cursor-pointer' />
                  </li>
                  <li className='px-1'>
                  <FaLinkedinIn className='w-[2rem] h-[2rem] object-contain hover:cursor-pointer' />
                  </li>
                  <li className='px-1 pr-6'>
                  <FaXTwitter className='w-[2rem] h-[2rem] object-contain hover:cursor-pointer' />
                  </li>
                </ul>
              </div>
          </div>
          <p className='w-full text-xs text-gray-500 font-mono flex justify-center'><FaRegCopyright /> 2023 ocean beverages | All rights reserved</p>
        </div>
    </div>
    
    </>
    
  )
}

export default Hero