import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";

export default function Hostel() {
  return (
    <div className='main'>
        <div className="box-1 w-[90%] m-auto lg:flex mt-4 lg:flex-col">
          <div className="left lg:w-[70%] mb-8">
              <h3 className='font-semibold text-[2rem] mb-4 '>Hostel</h3>
              <p className='text-[18px] font-normal leading-[32px]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
          </div>
          <div className="right-imgs flex flex-col lg:m-auto lg:flex-row">
            <div className="right-img mr-8 flex items-center justify-center">
              <img className='mb-4 h-[11rem] w-[23rem] object-cover' src="../assets/img1.png" alt="" />
            </div>
            <div className="right-imgs-text">
                <h3 className='font-semibold text-[2rem] text-[#263879]'>Separate Hostel facilities for Boys & Girls</h3>
                <p className='text-[18px] font-normal leading-[32px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text </p>
            </div>
          </div>
        </div>

        <div className="box-2 w-[90%] m-auto lg:flex mt-4 lg:flex-row">
          <div className="left lg:w-[50%] mb-8">
              <h3 className='font-semibold text-[2rem] mb-4 text-[#263879]'>World Class Hostel Facilities</h3>
              <p className='text-[18px] font-normal leading-[32px]'>&#183; Safe, Spacious, Well Ventilated & Hygienic Rooms</p>
              <p className='text-[18px] font-normal leading-[32px]'>&#183; Peaceful Study Atmosphere</p>
              <p className='text-[18px] font-normal leading-[32px]'>&#183; Nutritions & Balanced Diet  </p>
              <p className='text-[18px] font-normal leading-[32px]'>&#183; Integrated Indoor Sports Facility</p>
              <p className='text-[18px] font-normal leading-[32px]'>&#183; Medical Facilities Around 24 X 7</p>
              <div className="btn flex  mt-12">
                    <button className='text-base font-bold bg-yellow-400 py-2 px-7 rounded-lg flex items-center hover:text-gray-700 hover:bg-yellow-500'><FaPhoneAlt className='mr-3' />Contact</button>
                </div>
          </div>
          <div className="right-imgs flex flex-col lg:m-auto lg:flex-row">
                <div className="right-img mr-8 flex items-center justify-center">
                <img className='mb-4 h-[11rem] w-[23rem] object-cover' src="../assets/img1.png" alt="" />
                </div>
          </div>
        </div>
        
        <div className="box-3 w-[90%] m-auto relative mt-8 mb-8">
            <div className="b3-images flex items-center justify-center flex-col lg:flex-row">
            <img className='mb-4 h-[11rem] w-64' src="../assets/img1.png" alt="" />
            <img className='mb-4 h-[11rem] w-64  lg:mx-4' src="../assets/img4.png" alt="" />
            <img className='mb-4 h-[11rem] w-64' src="../assets/img3.png" alt="" />
            </div>
        </div>

        <div className="box-4 flex justify-center">
          <img className='w-48' src="../assets/logo2.png" alt="" />
        </div>

    </div>
  )
}
