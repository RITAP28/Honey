import React from 'react'

function slidingNavbar({setShowNavbar}) {
  return (
    <div className='fixed w-full h-full top-0 left-0 bg-zinc-600 flex justify-end'>
        <div className="flex w-full h-full relative flex-col z-10 bg-zinc-600 translate-x-full animate-slidingNavbar">
            Sliding Navbar is here
        </div>
    </div>
  )
}

export default slidingNavbar