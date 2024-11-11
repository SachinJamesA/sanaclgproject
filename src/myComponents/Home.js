import React from 'react'
import { FaGraduationCap } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";

export default function Home() {
  return (
    <div className='main'>
        <div className="main-img relative z-50">
            <img className='w-[100%]' src="../assets/i1.png" alt="" />
        </div>
        <div className="empty w-[83%] h-8 bg-[#FCEEA7] m-auto rounded-2xl relative bottom-6">
        </div>
        <div className="box-1 w-[90%] m-auto mb-4 lg:flex">
        <div className="left lg:w-[50%]">
            <h3 className='font-semibold text-[2rem] mb-8'>Welcome To Sana Shaheen Group of Institutions</h3>
            <p className='text-[18px] font-medium leading-[32px]'>Sana Shaheen Independent PU College in association with the renowned Shaheen Institutions, Bidar and approved by the Government of Karnataka had its beginning in the Academic Year 2021- 22. The curriculum is strengthened and supplemented with coaching for Competitive Exams "JEE MAINS/NEET/PCET/CET" for Science combination, "CA/CS Foundation" and "Tally" for Commerce Combination.</p>
            <button className='py-2 px-3 bg-[#FFE142] rounded-lg flex items-center mt-8 m-auto hover:bg-yellow-400'><FaGraduationCap className='text-2xl mr-2' />Explore Courses</button>
        </div>
        <div className="right flex justify-center mt-24 h-72 lg:w-[50%]">
            <div className="right-images">
                <img className='w-48' src="../assets/iblue.png" alt="" />
                <img className='w-52 relative bottom-52 right-8 ' src="../assets/i2.png" alt="" />
                <img className='relative w-24 bottom-[27rem] left-36' src="../assets/idot.png" alt="" />
                <img className='w-48 relative right-20 bottom-[25rem]' src="../assets/i80.png" alt="" />
                <img className='relative right-44 bottom-[31rem] left-28 w-[11rem]' src="../assets/i100.png" alt="" />
            </div>
            <div className="btn absolute">
            <button className='relative top-48 border-2 border-solid border-[#FFE142] p-2 flex items-center mt-12 hover:bg-[#FFE142]'><MdOutlineFileDownload className='mr-2 text-2xl'/>Download Brochure</button>
            </div>
        </div>
        </div>

        <div className="box-2 w-[90%] m-auto text-center mb-4  lg:text-left">
            <div className="box2-left lg:w-[66%]">
            <div className="box2-nav lg:flex lg:items-baseline">
            <img className='m-auto lg:m-0 lg:mr-8' src="../assets/flag.png" alt="" />
                <ul className='flex justify-center my-4 lg:justify-start lg:mt-0'>
                    <a href="/">
                        <li className='font-bold lg:text-2xl lg:mr-4 hover:text-[#4668DF]'>Our Mission</li>
                    </a>
                    <a href="/">
                        <li className='mx-4 font-bold lg:text-2xl lg:mr-8 hover:text-[#4668DF]'>Our Vision</li>
                    </a>
                    <a href="/">
                        <li className='font-bold lg:text-2xl lg:mr-4 hover:text-[#4668DF]'>Our Values</li>
                    </a>
                </ul>
            </div>
            <p className='font-medium text-[18px] leading-3-[35px]'>To provide affordable quality education, by equipping students with knowledge and skills in their chosen stream, inculcate values, identify hidden talents, provide opportunities to realize their full potential and thus shape them into future professionals, entrepre neurs and above all good human beings</p>
        </div>
        </div>

        <div className="box-3 box-2 w-[90%] m-auto relative">
            <h3 className='font-semibold text-[1.5rem] mb-2'>Sana Shaheen Hubli</h3>
            <div className="b3-images flex items-center justify-center flex-col lg:flex-row">
            <img className='mb-4 h-[11rem] w-64' src="../assets/img1.png" alt="" />
            <img className='mb-4 h-[11rem] w-64  lg:mx-4' src="../assets/img4.png" alt="" />
            <img className='mb-4 h-[11rem] w-64' src="../assets/img3.png" alt="" />
            </div>
        </div>
    </div>
  )
}
