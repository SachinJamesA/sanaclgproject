import React from 'react'

export default function AcademicPrograms() {
  return (
    <div className='aboutMain'>
      <div className="main-img relative z-50">
            <img className='w-[100%]' src="../assets/about1.png" alt="" />
        </div>
        <div className="empty w-[83%] h-8 bg-[#FCEEA7] m-auto rounded-2xl relative bottom-6">
        </div>
        <div className="box-1 w-[90%] m-auto mb-4 lg:flex">
        <div className="left">
            <h3 className='font-semibold text-[2rem] mb-8'>Courses Offered</h3>
            <div className="boxes lg:grid lg:grid-cols-2 lg:gap-4 xl:grid-cols-4">
              <div className="box1 mb-6">
                <div className="text-1 flex items-center">
                <img className='mr-8 mb-4' src="../assets/Aacademic1.png" alt="" />
                <h3 className='font-semibold text-[2rem] mb-4'>Science</h3>
                </div>
                <div className="text-2 w-[100%]">
                  <div className="text-2-b1 mb-3">
                    <h4 className='font-extrabold text-[18px] text-[#4668DF] mb-2'>Combination I</h4>
                    <p className='text-base'>PCMB: PHYSICS, CHEMISTRY, MATHEMATICS, BIOLOGY</p>
                  </div>
                  <div className="text-2-b2">
                  <h4 className='font-extrabold text-[18px] text-[#4668DF] mb-2'>Combination II</h4>
                    <h3 className='text-base flex-wrap'>PCMB: PHYSICS, CHEMISTRY, MATHEMATICS, BIOLOGY</h3>
                  </div>
                </div>
              </div>

              <div className="box2 mb-6">
              <div className="text-1 flex items-center">
                <img className='mr-8 mb-4' src="../assets/Aacademic1.png" alt="" />
                <h3 className='font-semibold text-[2rem] mb-4'>Computer Science</h3>
                </div>
                <div className="text-2 w-[100%]">
                  <div className="text-2-b1 mb-3">
                    <h4 className='font-extrabold text-[18px] text-[#4668DF] mb-2'>Combination I</h4>
                    <h3 className='text-base'>PCMC: PHYSICS, CHEMISTRY, MATHEMATICS, COMPUTER SCIENCE</h3>
                  </div>
                </div>
              </div>

              <div className="box3 mb-6">
              <div className="text-1 flex items-center">
                <img className='mr-8 mb-4' src="../assets/Aacademic2.png" alt="" />
                <h3 className='font-semibold text-[2rem] mb-4'>Commerce</h3>
                </div>
                <div className="text-2 w-[100%]">
                  <div className="text-2-b1 mb-3">
                    <h4 className='font-extrabold text-[18px] text-[#4668DF] mb-2'>Combination I</h4>
                    <h3 className='text-base'>CBASE: Business Studies, Economics, Accountancy, Statistics</h3>
                  </div>
                </div>
              </div>

              <div className="box4 mb-6">
              <div className="text-1 flex items-center">
                <img className='mr-8 mb-4' src="../assets/Aacademic3.png" alt="" />
                <h3 className='font-semibold text-[2rem] mb-4'>Arts</h3>
              </div>
                <div className="text-2 w-[100%]">
                  <div className="text-2-b1 mb-3">
                    <h4 className='font-extrabold text-[18px] text-[#4668DF] mb-2'>Combination I</h4>
                    <h3 className='text-base'>HEPS: History, Economics, Political Science and Sociology along with the Languages.</h3>
                  </div>
                </div>
              </div>
            </div>
        </div>
        </div>

        <div className="box-2 w-[90%] m-auto mb-4">
        <div className="box-2-left lg:flex">
        <div className="left-1 lg:w-[50%] mb-8">
            <div className="text-1 flex items-center">
              <img className='mr-4 mb-4' src="../assets/Aacademic4.png" alt="" />
              <h3 className='font-semibold text-[1.75rem] mb-8'>Career Guidance Program</h3>
            </div>
            <p className='text-[18px] font-medium leading-[32px]'>Every year, a Career Guidance programme is conducted for the II PU students to update their knowledge about the various avenues in the field of Science and Technology. Subject experts from various fields are invited as resource persons for this programme.</p>
        </div>
        <div className="left-3-right flex justify-center mt-24 h-52 lg:w-[50%]">
            <div className="right-images">
                <img className='w-48' src="../assets/iblue.png" alt="" />
                <img className='w-52 relative bottom-52 right-8 ' src="../assets/i2.png" alt="" />
                <img className='relative w-24 bottom-[27rem] left-36' src="../assets/idot.png" alt="" />
                <img className='w-48 relative right-20 bottom-[25rem]' src="../assets/i80.png" alt="" />
                <img className='relative right-44 bottom-[31rem] left-28 w-[11rem]' src="../assets/i100.png" alt="" />
            </div>
        </div>
        </div>
        <div className="left-2 lg:w-[50%] mb-8">
            <div className="text-1 flex items-center">
              <img className='mr-4 mb-4' src="../assets/Aacademic5.png" alt="" />
              <h3 className='font-semibold text-[1.75rem] mb-8'>Value Added Courses</h3>
            </div>
            <p className='text-[18px] font-medium leading-[32px]'>Sana Shaheen PUCollege functions with the belief that merely academic input is not sufficient for a student to succeed in life. Considering the challenges of the corporate world, the college has taken steps to train the students in the value added courses. This would help every student to develop a multi-faceted personality to become a cut above the rest.</p>
        </div>
       
        <div className="left-3 w-[90%] m-auto">
            <div className="box2-left">
            <div className="box2-nav lg:flex lg:items-baseline">
                <ul className='flex justify-center my-4 lg:justify-start lg:mt-0'>
                    <a href="/">
                        <li className='font-bold text-xl lg:text-2xl lg:mr-4 hover:text-[#4668DF] text-[#828590]'>Examination</li>
                    </a>
                    <a href="/">
                        <li className='mx-4 font-bold text-xl lg:text-2xl lg:mr-8 text-[#828590] hover:text-[#4668DF]'>Attendance</li>
                    </a>
                    <a href="/">
                        <li className='font-bold text-xl lg:text-2xl lg:mr-4 text-[#828590] hover:text-[#4668DF]'>Discipline</li>
                    </a>
                </ul>
            </div>
            <p className='font-medium text-[18px] leading-3-[35px] mb-3'>Periodic examinations are conducted to assess students’ assimilation of the subject and to enhance their performance. The number of examinations is as follows:</p>
            <p className='text-[18px] font-normal leading-[32px]'>&#183; 4 monthly tests of 25 marks each.</p>
              <p className='text-[18px] font-normal leading-[32px] '>&#183; 1 Terminal Examination, 2 Preparatory Examinations for II PU and PU Board Examinations for both I & II PU students.</p>
              <p className='text-[18px] font-normal leading-[32px]'>&#183; The academic work is supervised by the Correspondent, the Principal and a team of Class Guides.</p>
        </div>
        </div>
        
        </div>
        <div className="left-4 w-[90%] m-auto">
            <div className="box2-left lg:w-[100%]">
              <h3 className='font-semibold text-[2rem] mb-8'>Message From Principal</h3>
              <div className="right flex justify-center h-56 mt-28 lg:w-[50%] lg:mx-auto ">
              <div className="right-images">
                  <img className='w-48' src="../assets/iblue.png" alt="" />
                  <img className='w-52 relative bottom-52 right-8 ' src="../assets/Aacademic8.png" alt="" />
                  <img className='relative w-52 bottom-[27rem] left-12 z-[-1]' src="../assets/Aacademic7.png" alt="" />
              </div>
            </div>
            <div className="left-4-box-1 mb-8">
              <p className='font-normal text-[18px] leading-3-[35px] mb-6'>Education is not an act of acquiring knowledge but learning a skill to lead life and forming one’s personality. This is an ennobling process of growth. I can boldly say that we have excelled in every initiative that we undertook and we have stood together in facing the challenges in realizing quality education. We focus on discovering, developing and drawing out the hidden talents and the magic lying dormant inside all of its students.</p>
              <p className='font-normal text-[18px] leading-3-[35px] mb-6'>From academics to co-curricular activities, perseverance and a never-say-die spirit are entrenched in the heart of every student not only making them good students but brilliant human beings.
              In today’s dynamic world, a 360 degree development and grooming is of supreme importance and through our campus we are creating an environment for future leaders, entrepreneurs and professional who possess skills and aptitudes in an array of functional disciplines.</p>
              <p className='font-normal text-[18px] leading-3-[35px] mb-3'>Our students graduate with the skills, mind sets and qualities that will best equip them for success Come on let's give our best and make this institution a modern temple of learning through our diligence, devotion and dedication</p>
            </div>
            <div className="left-4-box-2">
              <h3 className='font-semibold text-[2rem]'>FAQ</h3>
              <div className="first flex justify-between items-center">
              <p className='font-normal text-[18px]'>Admission of foreign nationals is subject to:</p>
              <p className='font-normal text-[4rem]'>+</p>
              </div>
              <div className="second flex justify-between items-center">
              <p className='font-normal text-[18px]'>Counselling</p>
              <p className='font-normal text-[4rem]'>+</p>
              </div>
            </div>
        </div>
        </div>
      </div>
  )
}
