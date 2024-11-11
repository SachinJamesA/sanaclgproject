import React, { useState } from 'react';
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";

export default function About() {

  const [currentIndex, setCurrentIndex] = useState({
    slider1: 0,
    slider2: 0,
  });

  const slides1 = [
    { 
      imageSrc: '../assets/about8.png',
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi sunt ' 
    },
    { 
      imageSrc: '../assets/about7.png', 
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi sunt reiciendis exercitationem dolore delectus' 
    },
    { 
      imageSrc: '../assets/about6.png', 
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi sunt reiciendis exercitationem dolore delectus perspiciatis corporis' 
    },
  ];

  const slides2 = [
    { 
      imageSrc: '../assets/about8.png', 
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi sunt reiciendis exercitationem dolore delectus perspiciatis corporis, quos voluptatem' 
    },
    { 
      imageSrc: '../assets/about7.png', 
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi sunt reiciendis exercitationem dolore delectus perspiciatis corporis, quos voluptatem rem ullam natus quis assumenda,' 
    },
    { 
      imageSrc: '../assets/about6.png', 
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi sunt reiciendis exercitationem dolore delectus perspiciatis corporis, quos voluptatem rem ullam natus quis assumenda, quas veniam ratione?' 
    },
  ];

  const prevSlide = (slider) => {
    setCurrentIndex((prevState) => ({
      ...prevState,
      [slider]: (prevState[slider] === 0 ? slides1.length - 1 : prevState[slider] - 1),
    }));
  };

  const nextSlide = (slider) => {
    setCurrentIndex((prevState) => ({
      ...prevState,
      [slider]: (prevState[slider] === slides1.length - 1 ? 0 : prevState[slider] + 1),
    }));
  };


  return (
    <>
    <div className='aboutMain'>
      <div className="main-img relative z-50">
          <img className='w-[100%]' src="../assets/about1.png" alt="" />
        </div>
        <div className="empty w-[83%] h-8 bg-[#FCEEA7] m-auto rounded-2xl relative bottom-6">
        </div>
        <div className="box-1 w-[90%] m-auto mb-4 lg:flex xl:h-[27rem]">
        <div className="left lg:w-[50%]">
            <h3 className='font-semibold text-[2rem] mb-8'>About our Institution</h3>
            <p className='text-[18px] font-medium leading-[32px]'>Sana Shaheen Independent PU College was registered in the year 2019 at Hubli. It became part of the sana educational charitable trust whose trustees comprised of members who are committed and competent visionary in the field of education</p>
            <p className='text-[18px] font-medium leading-[32px]'>Enrichment of student resource has been our priority and the teaching faculty is encouraged to update their technical and management skills. Improving quality is an ongoing process and we strive for excellence in all spheres.</p>
            <p className='text-[18px] font-medium leading-[32px]'>The campus is within a five kilometre radius of the Airport, Railway Station, Bus Stand, important places of worship, shopping malls, restaurants and other civic amenities. The institution is connected to all parts of the city through city bus and other transport facilities.</p>
        </div>
        <div className="right justify-center mt-24 lg:w-[50%]">
            <div className="right-images flex flex-col justify-center items-center">
                <img className='w-48' src="../assets/iblue.png" alt="" />
                <img className='w-52 relative bottom-52 right-8 ' src="../assets/about2.png" alt="" />
                <img className='relative w-24 bottom-[27rem] left-24' src="../assets/idot.png" alt="" />
                <div className="right-imgs-text relative bottom-64">
                <p className='text-center text-[#4668DF]'>Sana Shaheen College has always endeavoured to provide the best of resources, be it human or material, to our students and faculty.</p>
                </div>
            </div>
        </div>
        </div>

        <div className="box-2 w-[90%] m-auto mt-9  
        lg:text-left relative bottom-64 lg:bottom-0 lg:mt-0">
          <h1 className='font-semibold text-3xl text-left mb-11'>Chairman</h1>
            <div className="box2-left lg:w-[66%] ">
              <div className="b2-image m-auto mb-6 w-[60%] h-48 flex justify-center items-center relative flex-col ">
                  <img className='w-48 h-48 mb-2' src="../assets/about4.png" alt="" />
                  <span className='font-bold text-xl text-[#4668DF]'>M.M Malagi</span>
                  <span className='font-medium text-lg'>Hon . Chairman</span>
              </div>
            <p className='font-medium text-[18px] leading-3-[35px]'>A building they say is as strong as its foundation. Having been builders for over 30 years, this has been a concept we understand very well. We therefore decided to focus our attention on another foundation of society- Education. We welcome you to Sana for a very pleasant and enriching experience of an education process which will mould an individual into an achiever.</p>
        </div>
        </div>

        <div className="box-3 w-[90%] mx-auto mt-4 relative bottom-64 h-44rem  lg:bottom-0 lg:mt-4">
          <h1 className='font-semibold text-3xl text-left mb-16'>Managing Director</h1>
            <div className="b3-image m-auto mb-8 w-[60%] h-48 flex justify-center items-center flex-col ">
                <img className='w-48 h-48 mb-2' src="../assets/about5.png" alt="" />
                <span className='font-bold text-xl text-[#4668DF] text-center'>Ashraf Ali Bashir Ahmed</span>
                <span className='font-medium text-lg mb-8'>Managing Trustee</span>
            </div>
          <p className="p1 font-medium text-[18px] leading-3-[35px] mb-8">Creating sustainable environment for the students to learn and prosper, we want to create learning paths that align with students interests and growth in terms of knowledge, discipline and moral knowledge to achieve higher success and wisdom in future.</p>
          <p className="p2 font-medium text-[18px] leading-3-[35px] mb-8">We are committed to providing a world-class education and foster a culture of excellence, innovation, and inclusivity. We believe in the transformative power of education and are dedicated to helping our students reach their full potential. As we embark on this new academic year, I encourage everyone to get involved in the life of the college.</p>
          <p className="p3 font-medium text-[18px] leading-3-[35px]">We have a wide range of clubs, organizations, sports, and other activities that offer opportunities for personal and wholesome growth. I also encourage everyone to take advantage of the many resources and support services that are available to help students succeed. I am confident that, together, we can achieve great things and make a positive impact on our community and the world.</p>
        </div>

        <div className="box-4 w-[90%] mx-auto mt-4 relative bottom-64 h-44rem lg:bottom-0 lg:mt-4">
        <h1 className='font-semibold text-3xl text-left mb-12'>Council of excellence</h1>
        <div className="box-4-img flex justify-center items-center flex-col m-auto lg:flex-row">
          <div className="b3-image1 w-[60%] flex justify-center items-center flex-col ">
              <img className='w-48 h-48 mb-2' src="../assets/about9.png" alt="" />
              <span className='font-bold text-xl text-[#4668DF] text-center'>Dr. ABDUL QADEER</span>
              <span className='font-medium text-lg mb-8'>Executive Trustee</span>
          </div>
          <div className="b3-image2 w-[60%] flex justify-center items-center flex-col">
              <img className='w-48 h-48 mb-2 rounded-full' src="../assets/about5.png" alt="" />
              <span className='font-bold text-xl text-[#4668DF] text-center'>Ashraf Ali</span>
              <span className='font-medium text-lg mb-8'>Managing Trustee</span>
          </div>
          <div className="b3-image3 w-[60%] flex justify-center items-center flex-col">
              <img className='w-48 h-48 mb-2 rounded-full' src="../assets/about4.png" alt="" />
              <span className='font-bold text-xl text-[#4668DF] text-center'>M.M Malagi</span>
              <span className='font-medium text-lg mb-8'>Chairman</span>
          </div>
        </div>
          <div className="box-4-text mb-8 bg-gray-400 rounded-xl p-2">
            <h1 className='font-semibold text-3xl text-left mb-10'>Dear Students,</h1>
            <p className='font-medium text-[18px] leading-3-[35px]'>A building they say is as strong as its foundation. Having been builders for over 30 years, this has been a concept we understand very well. We therefore decided to focus our attention on another foundation of society- Education. We welcome you to Sana for a very pleasant and enriching experience of an education process which will mould an individual into an achiever.</p>
          </div>
        <div className="box-5">
          <h1 className='font-semibold text-3xl text-left mb-8'>Testimonials</h1>
          <div className="box-5-texts lg:flex lg:justify-between">

            <div className="box-5-text1 mb-7 flex bg-gray-400 rounded-xl p-2 lg:w-[45%] lg:mb-0 justify-between">
            <div className="prev flex items-center justify-center text-2xl hover:text-gray-600 cursor-pointer" onClick={() => prevSlide('slider1')}><GrPrevious /></div>
            <div className="flex justify-center items-center">
            <img className='w-20 object-contain' src={slides1[currentIndex.slider1].imageSrc} alt="" />
              <p className='mx-2'>{slides1[currentIndex.slider1].text}</p>
            </div>
              <div className="prev flex items-center justify-center text-2xl hover:text-gray-600 cursor-pointer" onClick={() => nextSlide('slider1')}><GrNext  /></div>
            </div>

            <div className="box-5-text2 flex bg-gray-400 rounded-xl p-2 lg:w-[45%] justify-between">
            <div className="prev flex items-center justify-center text-2xl hover:text-gray-600 cursor-pointer" onClick={() => prevSlide('slider2')}><GrPrevious /></div>
            <div className='flex justify-center items-center'>
            <img className='w-20 object-contain' src={slides2[currentIndex.slider2].imageSrc} alt="" />
              <p className='mx-2'>{slides2[currentIndex.slider2].text}</p>
            </div>
              <div className="prev flex items-center justify-center text-2xl hover:text-gray-600 cursor-pointer" onClick={() => nextSlide('slider2')}><GrNext /></div>
            </div>
          </div>
        </div>
        </div>
    </div>
    </>
  )
}
