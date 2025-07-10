import React, { useState } from "react";
import { assets } from "../assets/assets";
import { Link,NavLink } from "react-router-dom";

const Navbar = () => {

    const [count,setcount]=useState(0)
    const [visible,setVisible]=useState(false)
  return (
    <div className="flex justify-around w-full px-6 py-3 ">
      {/* Logo */}

      <div>
        <Link to='/home'><img className="w-30 h-10" src={assets.logo}></img></Link>
      </div>
      <div className="hidden sm:flex justify-between items-center gap-5 ">
        <NavLink className="flex flex-col justify-center items-center" to="/home">
          <p>Home</p>
          <hr className="w-2/4 bg-black h-0.5 rounded-b-md hidden"></hr>
        </NavLink>

        <NavLink className="flex flex-col justify-center items-center"to="/collection">
          <p>Collection </p>
          <hr className="w-2/4 bg-black h-0.5 rounded-b-md hidden"></hr>
        </NavLink>

        <NavLink className="flex flex-col justify-center items-center" to="/about">
          <p> About</p>
          <hr className="w-2/4 bg-black h-0.5 rounded-b-md hidden"></hr>
        </NavLink>

        <NavLink className="flex flex-col justify-center items-center" to="/contact">
          <p>Contact</p>
          <hr className="w-2/4 bg-black h-0.5 rounded-b-md hidden"></hr>
        </NavLink>
      </div>


      <div className="flex justify-between gap-6 items-center">
        <img className="w-[20px] h-[20px]" src={assets.search}></img>
        <Link to="/login" className="group flex flex-col relative">
          <img className="w-[20px] h-[20px]" src={assets.profile}></img>
          <div className="absolute ">
          <div className=" group-hover:block  drop-down-menu bg-gray-200 rounded-2xl h-[80px] w-[100px] right-[8px] my-[30px] items-center text-center justify-center">
            <p className="border-b-1 border-gray-50 text-gray-500 hover:text-black">My Profile</p>
            <p  className=" border-b-1 border-gray-50 text-gray-500 hover:text-black">Orders</p>
            <p className=" text-gray-500 hover:text-black">Logout</p>
          </div>
          </div>
        </Link>
        <Link to="/cart" className="flex items-center justify-center relative">
          <img className="w-[20px] h-[20px]" src={assets.cart}></img>
          <p className="bg-black rounded-full text-center text-sm w-3 h-3 text-white absolute left-[12px] bottom-[-5px] text-[8px]">{count}</p>
        </Link>
      </div>
       <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-gray-100 transition-all duration-[0.5s] ease-in-out ${visible?'w-[350px]':'w-0'}`}>
        <div className='flex flex-col text-gray-600'>  
        <div onClick={()=>setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
            <img className='h-4 rotate-180' src={assets.dropdown_icon} alt=""></img>
            <p>Back</p>
        </div>
        <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border-b' to='/'>Home</NavLink>
        <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border-b' to='/collection'>COLLECTION</NavLink>
        <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border-b' to='/about'>ABOUT</NavLink>
        <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border-b' to='/contact'>CONTACT</NavLink>
    </div>


</div>
    </div>
  );
};

export default Navbar;
