import React from 'react'
import { PiHandbagSimpleFill } from "react-icons/pi";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Navbar() {
  const cartItems = useSelector((store) => store.ttb.items);

  return (
    <div className='w-full flex items-center  justify-between  py-2 px-11 absolute 
    bg-gradient-to-b from-cyan-700/95 to-white/45'>
        <h1 className="font-extrabold font-serif mt-4 text-3xl"> Snap_Shop </h1>
        <Link to={"/cart"}>
      <div className="flex  items-center gap-1">
            <PiHandbagSimpleFill className='text-black mt-4 cursor-pointer text-4xl' />
            <p className="text-sm text-white font-bold">{cartItems.length}</p>

        </div>
        </Link>
    </div>
  )
}

export default Navbar