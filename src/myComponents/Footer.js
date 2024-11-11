import React from 'react'
import { FaGreaterThan } from "react-icons/fa6";
import { GrSend } from "react-icons/gr";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className='bg-[#002147] text-white p-6 lg:py-4 lg:flex lg:justify-between lg:px-8 mt-3'>
        <ul className="footb-1 mb-3">
            <h1 className='text-xl'>Quick Links</h1>
            <div className="foot-links flex justify-between mt-3 lg:block xl:flex">
                <div className="footb-1-left lg:mr-16 xl:mr-[20rem]">
                    <a href="/">
                        <li className='flex items-center mb-2'><FaGreaterThan className='text-yellow-400 text-xs mr-1'/>Home</li>
                    </a>
                    <a href="/">
                        <li className='flex items-center mb-2'><FaGreaterThan className='text-yellow-400 text-xs mr-1'/>PUC</li>
                    </a>
                    <a href="/">
                        <li className='flex items-center mb-2'><FaGreaterThan className='text-yellow-400 text-xs mr-1'/>Gallery</li>
                    </a>
                </div>
                <div className="footb-1-right">
                    <a href="/">
                        <li className='flex items-center mb-2'><FaGreaterThan className='text-yellow-400 text-xs mr-1'/>About Us</li>
                    </a>
                    <a href="/">
                        <li className='flex items-center mb-2'><FaGreaterThan className='text-yellow-400 text-xs mr-1'/>Admission Enquiry</li>
                    </a>
                    <a href="/">
                        <li className='flex items-center'><FaGreaterThan className='text-yellow-400 text-xs mr-1'/>Contact Us</li>
                    </a>
                </div>
            </div>
        </ul>
        <ul className="footb-2">
            <h1 className='text-xl'>Contact Information</h1>
            <div className="foot-links2 mt-3">
                <a href="/">
                    <li className='flex items-center mb-2 text-base'><span><GrSend className='text-yellow-400 text-xl mr-3'/></span>Shantinikethan, PB Rd,Shantinikethan Layout, Bairidevarkoppa, Hubballi, Karnataka 580025</li>
                </a>
                <a href="/">
                    <li className='flex items-center mb-2 text-base'><FaPhoneAlt className='text-yellow-400 text-xl mr-3'/>+91 9606299909 (or) +91 96066399909</li>
                </a>
                <a href="/">
                    <li className='flex items-center text-base'><MdOutlineEmail className='text-yellow-400 text-xl mr-3'/>shaheenhubballi@gmail.com</li>
                </a>
            </div>
        </ul>
    </footer>
  )
}
