import React from 'react'

export default function Campus() {
  return (
    <div className='main'>
        <div className="box-1 w-[90%] m-auto lg:flex mt-4 lg:flex-col">
          <div className="left lg:w-[50%] mb-8">
              <h3 className='font-semibold text-[2rem] mb-4 '>Campus</h3>
              <h4 className='font-semibold text-[2rem] text-[#263879]'>Workshop / Seminar</h4>
              <p className='text-[18px] font-normal leading-[32px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text </p>
          </div>
          <div className="right-imgs flex flex-col items-center justify-center lg:w-[50%] lg:m-auto lg:flex-row">
              <img className='mb-4 h-[11rem] w-64' src="../assets/img1.png" alt="" />
              <img className='mb-4 h-[11rem] w-64  lg:mx-4' src="../assets/img4.png" alt="" />
              <img className='mb-4 h-[11rem] w-64' src="../assets/img3.png" alt="" />
          </div>
        </div>

        <div className="box-2 w-[90%] m-auto lg:flex mt-4 lg:flex-col">
          <div className="left lg:w-[50%] mb-8">
              <h4 className='font-semibold text-[2rem] text-[#263879]'>laboratories</h4>
              <p className='text-[18px] font-normal leading-[32px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text </p>
          </div>
          <div className="right-imgs flex flex-col items-center justify-center lg:w-[65%] lg:m-auto lg:flex-row">
              <img className='mb-4 h-[11rem] w-72  lg:mx-4' src="../assets/img4.png" alt="" />
              <img className='mb-4 h-[11rem] w-72' src="../assets/img5.png" alt="" />
          </div>
        </div>

        <div className="box-3 w-[90%] m-auto lg:flex mt-4 lg:flex-col mb-16">
          <div className="left lg:w-[50%] mb-8">
              <h4 className='font-semibold text-[2rem] text-[#263879]'>library</h4>
              <p className='text-[18px] font-normal leading-[32px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text </p>
          </div>
          <img className='mb-4 h-[16rem] w-[100%] object-cover' src="../assets/img3.png" alt="" />
        </div>  

        <div className="box-4 flex justify-center">
          <img className='w-48' src="../assets/logo2.png" alt="" />
        </div>

    </div>
  )
}