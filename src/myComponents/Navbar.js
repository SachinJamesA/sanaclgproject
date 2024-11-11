import React, { useState } from 'react';
import { FaBars } from "react-icons/fa6";
import { IoCloseCircle } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export default function Navbar() {
    const [active, setActive] = useState('navbar')
    const showBar = ()=>{
        setActive('navbar activeNavbar')
    }
    const closeBar = ()=>{
        setActive('navbar')
    }

  return (
    <div className='navbar-section relative xl:bg-gray-500'>
        <div className="header flex items-center justify-between p-3 lg:relative lg:bottom-1 ">
            <div className="logodiv">
                <Link to="/">
                    <img className='w-16 h-12' src="../assets/logo.png" alt="" />
                </Link>
            </div>
            
        <div className={`${active} bg-slate-600 w-full p-4 text-center absolute top-0 left-[-500%] z-[3000] lg:left-0 lg:bg-transparent justify-center lg:
        flex lg:items-center lg:justify-end `}>
            <div className="navList lg:flex lg:items-center">
                <li className='navItem list-none lg:mr-4 lg:relative lg:top-1'>
                    <Link to="/" className="navLink text-xl font-medium hover:text-[#4668DF] hover:cursor-pointer">Home</Link>
                </li>

                <li className='navItem list-none mt-2 lg:mr-4'>
                    <Link to="/about" className="navLink text-xl font-medium hover:text-[#4668DF]  hover:cursor-pointer">About</Link>
                </li>

                <li className='navItem list-none mt-2 lg:mr-4'>
                    <Link to="/academicprograms" className="navLink text-xl font-medium hover:text-[#4668DF]  hover:cursor-pointer">Academic Programs</Link>
                </li>
                <li className='navItem list-none mt-2 lg:mr-4'>
                    <Link to="/campus" className="navLink text-xl font-medium hover:text-[#4668DF] hover:cursor-pointer">Campus</Link>
                </li>
                <li className='navItem list-none mt-2 lg:mr-4'>
                    <Link to="/hostel" className="navLink text-xl font-medium hover:text-[#4668DF]  hover:cursor-pointer">Hostel</Link>
                </li>
                <li className='navItem list-none mt-2 lg:mr-12'>
                    <Link to="/" className="navLink text-xl font-medium hover:text-[#4668DF]  hover:cursor-pointer">Achievements</Link>
                </li>
                <div className="btn flex justify-center mt-3">
                    <button className='text-base font-bold bg-yellow-400 py-2 px-7 rounded-lg flex items-center hover:text-gray-700 hover:bg-yellow-500'><FaPhoneAlt className='mr-3' />Contact</button>
                </div>
                <div className='absolute top-3 right-3 text-3xl cursor-pointer lg:hidden' onClick={closeBar}><IoCloseCircle /></div>
            </div>
        </div>
        <div className="hamburger text-3xl lg:hidden">
            <button className="bars" onClick={showBar}><FaBars /></button>
        </div>
      </div>
    </div>
    
  )
}
