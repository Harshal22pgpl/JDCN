"use client"
import React from 'react'
import Footer from '@/app/components/Footer/Footer';
import Counter from "@/app/components/Counter";

export default function CentralResearch() {
  return (
    <div>
      <div>
        <div className='h-8 bg-cyan-500 p-1 flex'>
          <div className='flex ml-24 mt-1'>
            <div className='flex '>
              <img className='h-4 mt-0' src="clock.png" alt="" />
              <p className='text-white text-xs ml-4'>Monday - Friday 09:00 hr to 18:00 hr</p>
            </div>
            <div className='flex ml-4'>
              <img className='h-5 mt-0' src="call (2).png" alt="" />
              <p className='text-white text-xs ml-3'>0661-246-2390 / 2391 / 2392</p>
            </div>
            <div className='flex ml-4'>
              <img className='h-4 mt-0' src="email.png" alt="" />
              <p className='text-white text-xs ml-3'>lnct@gmail.com</p>
            </div>
          </div>
          <div className='h-5 '>
            <a className='bg-red-600 text-white text-[14px] py-[3px] px-[10px] rounded-[4px] ml-56' href="">Login for External users</a>
          </div>
        </div>
        <div className='flex mt-2'>
          <div className='ml-96 flex'>
            <div>
              <img className='h-14 mr-2' src="logo1.jpeg" alt="" />
            </div>
            <div>
              <p className='font-bold text-sm'>लक्ष्मी नारायण कॉलेज ऑफ टेक्नोलॉजी</p>
              <p className='font-bold text-sm'>Lakshmi Narain College Of Technology</p>
              <p className='font-bold text-cyan-500'>Central Research Facility</p>
            </div>
          </div>
         
        </div>
      </div>
      <div >
        <img className='h-72 w-full' src="banner2.jpg" alt="" />
      </div>
      <div>
        <div className='mb-[50px] ml-44'>
          <h2 className='text-[30px] text-fuchsia-900 font-bold p-10 pb-0 ml-40'><span className='text-purple-600'>CENTRAL</span> RESEARCH FACILITY</h2>
          <div>
            <p className='text-[14px] ml-20 text-gray-700'>Providing central facility of advanced techniques for research in various areas of science and technology</p>
            <div className='border-b-4 border-fuchsia-900 w-28 ml-[370px] mt-3'></div>
          </div>
        </div>
        <div className='grid grid-cols-2 gap-4'>
          <div > <img className='h-72 ml-28' src="clg.jpg" alt="" /> </div>
          <div className='mr-20 text-justify'>
            <p className='text-[14px] d text-gray-700'>
              NIT, Rourkela (NITR) – is a premiere institute of higher learning under the Ministry of Human Resource and Development (MHRD), GOI and is recognized as Institute of National Importance. Government of India has elevated the Regional Engineering College, Rourkela to a deemed university under the name of National Institute of Technology, Rourkela. NITR strives for creating an environment where hundreds of faculties and their thousands of students are in a teaching learning process and carry out research on subjects for wealth and well being of society.
              <br />
              <br />

              NITR has created a massive infrastructure for R & D in most branches of engineering and science utilizing various funding sources. At NITR, no matter which agency has provided the funds, the equipment and software are available for use by the entire research community. In order to maximize the utilization of all the high end equipments and their better management, these equipments are brought under one umbrella
              <span className='text-purple-500'>“Central Research Facility”</span>.</p>

          </div>
        </div>
      </div>
      <section>
        <div className=" mt-32 h-72 mx-auto  bg-cyan-500    sm:p-4  md:p-4 lg:p-5 p-4  border-black grid md:grid-cols-1 lg:grid-cols-4   sm:grid-cols-1 gap-5  justify-center items-center   dark:bg-dpurple  mb-12">
          <div className=" ">
            <Counter
              initialValue={0}
              targetValue={20}
              speed={200}
              text="Seed"
              textColor="text-purple-600"
              title="Departments"
              color="bg-[#bd5638]"
            />
          </div>
          <div className=" ">
            <Counter
              initialValue={0}
              targetValue={30}
              speed={200}
              text="Seed"
              textColor="text-green-700"
              title="HIGHEND INSTRUMENTS"
              color="bg-[#5a3224]"
            />
          </div>
          <div className="">
            <Counter
              initialValue={0}
              targetValue={200}
              speed={30}
              text="Seed"
              textColor="text-red-600"
              title="OTHER INSTRUMENTS"
              color="bg-[#223250]"
            />
          </div>

          <div className="">
            <Counter
              initialValue={5}
              targetValue={2675}
              speed={1}
              text="Seed"
              textColor="text-red-600"
              title="EXTERNAL BOOKINGSThird "
              color="bg-[#22472d]"
            />
          </div>
        </div>
      </section>
      <div>
        <div className='mb-[50px] ml-52'>
          <h2 className='text-[30px] text-fuchsia-900 font-bold p-10 pb-3 ml-40'><span className='text-purple-600'>OUR</span>  R & D RESOURSES</h2>
          <div>
            <p className='text-[14px] ml-52 text-gray-700'>
              In service of Education, Research and Industry.</p>
            <div className='border-b-4 border-fuchsia-900 w-28 ml-[300px] mt-5'></div>
          </div>
        </div>
        <div className='grid grid-cols-3 ml-10'>
          <div className=''>
            <img className='w-80' src="ar-1.jpg" alt="" />
            <div className='ml-16 justify-center mt-4'>
              <h2 className='uppercase text-purple-900 font-bold'>tittle of the machine</h2>
              <p>description of the machine</p>
            </div>
          </div>
          <div className=''>
            <img className='w-80' src="ar-1.jpg" alt="" />
            <div className='ml-16 justify-center mt-4'>
              <h2 className='uppercase text-purple-900 font-bold'>tittle of the machine</h2>
              <p>description of the machine</p>
            </div>
          </div>
          <div className=''>
            <img className='w-80' src="ar-1.jpg" alt="" />
            <div className='ml-16 justify-center mt-4'>
              <h2 className='uppercase text-fuchsia-900 font-bold'>tittle of the machine</h2>
              <p>description of the machine</p>
            </div>
          </div>

        </div>
      </div>
      <div className='h-96 mt-32 bg-cyan-500'>
        <div className='mb-[50px] ml-52'>
          <h2 className='text-[30px] text-fuchsia-900 font-bold p-10 pb-3 ml-40'><span className='text-purple-600'>WHAT</span>  PEOPLE SAY</h2>
          <div className='border-b-4 border-fuchsia-900 w-28 ml-[300px] mt-5'>
          </div>
        </div>
        <div className='bg-fuchsia-900 w-[750px] rounded-2xl h-40 ml-52 shadow-2xl shadow-black'>
          <h2 className='uppercase font-semibold text-white text-xl ml-[300px] pt-10'>BILL KELLY</h2>
          <div className='flex'>
            <img className='w-4 h-4 ml-16 mr-1' src="quote-left.png" alt="" />
          <p className='text-white ml mt-3 text-[14px]'>Good manners are just a way of showing other people that we have respect for them.</p>
          <img className='w-4 h-4 ' src="quote-right.png" alt="" />
          </div>
        </div>
      </div>
      <div>
        <div className='mb-[50px] ml-52'>
          <h2 className='text-[30px] text-fuchsia-900 font-bold p-10 pb-3 ml-40'>
            <span className='text-purple-600'>EVENTS &</span>  ACTIVITIES</h2>
          <div className='border-b-4 border-fuchsia-900 w-28 ml-[300px] mt-5'>
          </div>
          <div className='grid grid-cols-2 mt-10 gap-4 -ml-32 mr-16'>
            <div className='flex border border-gray-400 p-3'>
              <div className='w-[100%]'><img className='w-full m-2 ' src="welcome.jpeg" alt="" /></div>
              <div className='ml-5'><h2 className='capitalize  hover:text-purple-600 text-fuchsia-900 font-bold text-[14px] mb-3'>Vigyan Jyoti Programme of DST Govt. of India</h2>
                <div className='flex'><img className='w-4 h-4' src="calendar.png" alt="" /> <span className='text-[14px] font-semibold text-gray-900'>December 12, 2022</span>
                </div>
                <p className='text-[13px] mt-4 text-gray-700'>Under Vigyan Jyoti programme (Empowering girls in STEM) of DST Govt. of India, 51 girls and 6 staffs of Jawahar Navodaya Vidyalaya (JNV Sundergarh) visited the central facilities of NIT Rourkela.</p>
              </div>
            </div>
            <div className='flex border border-gray-400 p-3'>
              <div className='w-[100%]'><img className='w-full m-2 ' src="welcome.jpeg" alt="" /></div>
              <div className='ml-5'><h2 className='capitalize  hover:text-purple-600 text-fuchsia-900 font-bold text-[14px] mb-3'>Vigyan Jyoti Programme of DST Govt. of India</h2>
                <div className='flex'><img className='w-4 h-4' src="calendar.png" alt="" /> <span className='text-[14px] font-semibold text-gray-900'>December 12, 2022</span>
                </div>
                <p className='text-[13px] mt-4  text-gray-700'>Under Vigyan Jyoti programme (Empowering girls in STEM) of DST Govt. of India, 51 girls and 6 staffs of Jawahar Navodaya Vidyalaya (JNV Sundergarh) visited the central facilities of NIT Rourkela.</p>
              </div>
            </div>
            <div className='flex border border-gray-400 h-80 p-3'>
              <div className=''>
                <img className='w-full m-2 ' src="welcome.jpeg" alt="" /></div>
              <div className='ml-5 w-'>
                <h2 className='capitalize hover:text-purple-600 text-fuchsia-900 font-bold text-[14px] mb-3'>I-STEM Tech Management Conclave 2023</h2>
                <div className='flex'>
                  <img className='w-4 h-4' src="calendar.png" alt="" />
                  <span className='text-[14px] font-semibold text-gray-900'>January 19 - 20, 2023</span>
                </div>
                <p className='text-[13px] mt-4 text-gray-700'>
                  I-STEM, CENSE at IISc Bangalore organised the two days I-STEM Tech Management Conclave 2023 where the representatives from various institutions were invited to present about the available R&D infrastructure linked with I-STEM and its operation and management. Dr. Smrutisikha Bal, Institute Representative (ISTEM, NITR) presented details of up-to-date data on all equipment/R&D facilities in CRF, NITR.</p>
              </div>
            </div>
            <div className='flex border border-gray-400 h-48 p-3'>
              <div className='w-[90%]'>
                <img className='w-full m-2 ' src="welcome.jpeg" alt="" /></div>
               <div className='ml-5 w-'>
                <h2 className='capitalize  hover:text-purple-600 text-fuchsia-900 font-bold text-[14px] mb-3'>Training program for WDXRF</h2>
                <div className='flex'>
                  <img className='w-4 h-4' src="calendar.png" alt="" />
                  <span className='text-[14px] font-semibold text-gray-900'>February 4 - 10, 2022</span>
                </div>
                <p className='text-[13px] mt-4 text-gray-700 '>
                  Training programs for the highend equipment for technical personnel in CRF Labs TI-010 &TI-003 for Wavelength Dispersive X-Ray Fluorescence Spectroscopy (WDXRF).</p>
              </div>
            </div>
            <div className='flex border border-gray-400 h-48 p-3'>
              <div className='w-[90%]'>
                <img className='w-full m-2 ' src="welcome.jpeg" alt="" /></div>
              <div className='ml-5 w-'>
                <h2 className='capitalize  hover:text-purple-600 text-fuchsia-900 font-bold text-[14px] mb-3'>Training programs for HRMS</h2>
                <div className='flex'>
                  <img className='w-4 h-4' src="calendar.png" alt="" />
                  <span className='text-[14px] font-semibold text-gray-900'>February 10 - 11, 2022</span>
                </div>
                <p className='text-[13px] mt-4 text-gray-700 '>
                   Training programs for the highend equipment for technical personnel in CRF Labs TI-010 &TI-003 for High Resolution Mass Spectrometer (HRMS).</p>
              </div>
            </div>
            <div className='flex border border-gray-400 h-48 p-3'>
              <div className='w-[90%]'>
                <img className='w-full m-2 ' src="welcome.jpeg" alt="" /></div>
              <div className='ml-5 w-'>
                <h2 className='capitalize  hover:text-purple-600 text-fuchsia-900 font-bold text-[14px] mb-3'>Training programs for LSCM</h2>
                <div className='flex'>
                  <img className='w-4 h-4' src="calendar.png" alt="" />
                  <span className='text-[14px] font-semibold text-gray-900'> February 10 - 12, 2022</span>
                </div>
                <p className='text-[13px] mt-4 text-gray-700 '>
                  Training programs for the highend equipment for technical personnel in CRF Labs TI-010 &TI-003 for Laser Scanning Confocal Microscope (LSCM).</p>
              </div>
            </div> 
          </div>
        </div>
      </div>
       <div className='flex w-[300px] mt-32 gap-1'>
        <img className='w-80 h-48' src="banner2.jpg" alt="" />
        <img className='w-80 h-48' src="banner1.jpg" alt="" />
        <img className='w-80 h-48' src="banner2.jpg" alt="" />
        <img className='w-80 h-48' src="banner1.jpg" alt="" />
     
       </div>
       <div className='mt-32'></div>
       
    </div>
  )
}
