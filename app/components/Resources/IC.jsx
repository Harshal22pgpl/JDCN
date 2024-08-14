"use client"
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

export default function IC() {
    const [collegeNameIndex, setCollegeNameIndex] = useState(0);

    const collegeNames = [
        " LNCT ",
        "एसकेसी एलएनसीटी ",
    ];
    return (
        <div>

            <div className=" w-full h-80 bg-cover capitalize flex justify-center items-center "
                style={{ backgroundImage: `url('about-banner.jpg')` }}>

                <h2 className="font-bold text-4xl uppercase  text-center text-white" >
                    INDUSTRIAL CONSULTANCY
                </h2>
                

            </div>
            <div className='grid grid-cols-3 gap-[70px]  mb-20'>
                <div className='col-span-2 text-justify ml-24 mt-20 '>
                    <h4 className='text-red-900 text-[20px] font-bold'> Consultancy and Testing Policy</h4>
                    <p className='text-[12px] p-5'>NIT Rourkela extends its human resource and equipment’s for service of the nation. Since long back it is extending its resources to the nearby industries and academic institution. Main aim of these is to promote industry-academia interaction. Depending upon the requirement, broadly two types of jobs are undertaken with standard nominal charges. All such work are undertaken with proper registration with SRICCE, NIT Rourkela.</p>
                    <h4 className='text-red-900 text-[20px] mt-8 font-bold'>Consultancy and Testing Policy</h4>
                    <p className='text-[12px] p-5'>Routine testing, certification and calibration work are undertaken depending upon the available instruments at our premises. For more details about the instrument and booking procedure, please visit our Central Research Facility website.
                        <br /> <a className='text-purple-500 underline' href="http://localhost:3000/Resource">Click here to go to Central Research Facility website.</a> </p>
                    <h4 className='text-red-900 text-[20px] font-bold'> Consultancy</h4>
                    <p className='text-[12px] p-5'>Industrial consultancy to solve some problem in the specified industry is undertaken by NIT Rourkela as project which may involve Human resource and laboratory resources. Concerned industry may directly contact a faculty member who may be fit to solve their problem and details of their research fields are available in the individual Department’s site. Such viable projects are registered with SRICCE before commencing of the work with a mutually agreeable charges formulated under NIT’s standard guidelines.</p>
                </div>
                <div className=' mt-20 h-[350px] w-[350px] font-bold'>
                    <ul className='border border-gray-400 p-[15px] '>
                        <h5 className=' text-[20px] mb-3'>RELATED LINKS</h5>
                        <li className=' py-[10px] hover:text-red-800 text-[12px] '> <a href="">
                            Central Research Facility</a></li> <hr />
                        <li className=' py-[10px] text-[12px] hover:text-red-800 '><a href="">Centre for Technology Innovation and Industry Relations
                        </a></li>       <hr />
                        <li className=' py-[10px] text-[12px] hover:text-red-800 '> <a href="">Industrial Consultancy
                        </a></li> <hr />
                        <li className=' py-[10px] text-[12px] hover:text-red-800 '><a href="">High Performance Computing</a> </li> <hr />
                        <li className=' py-[10px] text-[12px] text-red-800 '><a href="">Industrial Consultancy</a> </li> <hr />


                    </ul>
                </div>
            </div>
            
        </div>

    )
}
