"use client"
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

import Footer from '../Footer/Footer';
export default function TIIR() {
    const [collegeNameIndex, setCollegeNameIndex] = useState(0);

    const collegeNames = [
        " LNCT ",
        "एसकेसी एलएनसीटी ",
    ];
    return (
        <div>

        


            <div className=" w-full h-80 bg-cover capitalize flex justify-center items-center "
                style={{ backgroundImage: `url('about-banner.jpg')` }}>
               
                <h2 className="font-bold text-4xl uppercase  text-white" >
                    TECHNOLOGY INNOVATION AND INDUSTRY RELATIONS
                </h2>
                

            </div>
            <div className='grid grid-cols-3 gap-[70px] '>
                <div className='col-span-2 text-justify ml-24 mt-20 '>
                    <h4 className='text-red-900 text-[20px] font-bold'> Technology Innovation and Industry Relations (TIIR)</h4>
                    <p className='text-[12px]'> NIT Rourkela, with its intellectual capital, the human resource, the library, the laboratories and equipment, and its tradition of scholarship, is an ocean of knowledge that is waiting to be tapped by the engineers and entrepreneurs in industry for creation of wealth and welfare of humanity. The interface between the institute and the industry, the interface between the ocean of knowledge and the continents of application is the Centre for Technology Innovation and Industry Relations, TIIR for short, the Sanskrit word for the shore of a large body of water. TIIR is aimed at providing a forum to promote and facilitate activities in a manner that will not only take NIT research to Industry and Society, but also will bring the knowledge and experience of the Industry to enrich the academic programmes of the Institute.
                    </p>
                    <h4 className='text-red-900 text-[20px] font-bold'>TIIR: A New Paradigm</h4>
                    <p className='text-[12px]'>An institution of higher learning in the field of technology is distinguished from similarly placed institutions in liberal studies – science, commerce, arts and social sciences, as well as from engineering colleges that impart essential skills in engineering profession and shop flow management. NITs, like IITs and other technical universities, are seats of learning and innovation, some of which must be directed towards development of products and processes that contribute directly to creation of wealth and wellbeing of the society. This objective is best achieved by close collaboration with industry, government departments and comparable organizations including hospitals, municipalities and philanthropic institutions.

                        While many universities in the world, particularly those in North America, Europe and Pacific–RIM countries are strongly linked to industry, those in India have largely remained insulated from it. This situation has led not only to extreme poverty and backwardness of our people but also to loss of entire generations of valuable human resource. This trend needs to be reversed; and the time to do it is NOW.

                        NIT, Rourkela is all set to contribute a small part to nation building by bringing its faculty and students closer to industry. It aims at creating an environment where hundreds of professors and thousands of students will be carrying out research on subjects directly relevant to and funded by industry. The establishment of the Centre for Technology Innovation and Industry Relations (TIIR) is an effort in that direction
                    </p>
                    <h4 className='text-red-900 text-[20px] font-bold'>Functions and Scopes of TIIR</h4>
                    <ul className='m-5 mb-20 text-[14px]'>
                        <li><span>&#10003;</span>Provide facilities for translation of scientific ideas to real products or services.</li>
                        <li><span>&#10003;</span> The facilities will include laboratories, pilot plants, workshops and small production centres or factories. They will be made available to –
                            <br /> <li className='ml-20 text-[14px]'> <span>&#8594;</span> Faculty, staff and students of the institute with ideas on marketable products or processes, who would like to eventually set up their own business,</li>
                            <br /> <li className='ml-20 text-[14px]'> <span>&#8594;</span> Faculty and students of the institute collaborating with external financiers, entrepreneurs and technocrats in setting up business, </li>
                            <br /><li className='ml-20 text-[14px]'> <span>&#8594;</span> External business enterprises (with or without an internal stake holder) interested in using the intellectual resources of NITR. </li></li>
                        <li> <span>&#10003;</span>   Showcase the intellectual capital, R&D infrastructure, flexible curricula, student projects, library and ICT facilities, sports and student activities of NIT Rourkela before industries, Government and Society.</li>
                        <li> <span>&#10003;</span>  nvite major industrial houses and small technical entrepreneurs to set up their R&D and product development centres in TIIR and take proactive measures to convince potential participants on the merits of joining TIIR.</li>
                        <li> <span>&#10003;</span> Coordinate with industry organizations such as CII, FICCI, Assocham and others in creating awareness among industry leaders on the merits of setting up R&D centres and incubation facilities in TIIR and thus exploit the intellectual powerhouse of NIT.</li>
                        <li> <span>&#10003;</span>  Invite and lobby with Government departments such as Defence, Space, Atomic Energy, Steel & Mines, Agriculture, Environment and Forests etc. for setting up full-fledged R&D centres in NIT campus.</li>
                        <li> <span>&#10003;</span> Liaison with Government Departments and the institute administration to ensure that these facilities function in a problem free manner.</li>
                        <li> <span>&#10003;</span> Manage facilities and provide day to day operational support to on-campus businesses located inside TIIR building or outside.</li>
                        <li> <span>&#10003;</span> Facilitate and administer faculty and student travel to industry for spending time between a week and a year for adding industrial relevance to their research.</li>
                        <li> <span>&#10003;</span> Handle all IPR issues – file and pursue patent applications, negotiate IPR sale and purchase, and receive and distribute royalties etc.</li>
                        <li> <span>&#10003;</span> Coordinate Training & Placement of NITR students, a job being presently managed by T&P Centre. The T&P Centre will form a part of the new TIIR Centre.</li>
                        <li> <span>&#10003;</span> Support student projects – B.Tech., M.Sc., M.Tech., M.Tech. (R) and Ph.D. that are linked to industry or are business oriented.</li>
                    </ul>
                </div>
                <div className=' mt-32 h-[350px] w-[270px]'>
                    <ul className='border border-gray-400 p-[15px] '>
                        <h5 className=' text-[20px] mb-3'>RELATED LINKS</h5>
                        <li className=' py-[10px] text-red-800 text-[12px] '> <a href="">About</a></li> <hr />
                        <li className=' py-[10px] text-[12px] hover:text-red-800 '><a href="">Industry Relations</a></li>       <hr />
                        <li className=' py-[10px] text-[12px] hover:text-red-800 '> <a href="">Facilities of TIIR</a></li> <hr />
                        <li className=' py-[10px] text-[12px] hover:text-red-800 '><a href="">Units of TIIR</a> </li> <hr />
                        <li className=' py-[10px] text-[12px] hover:text-red-800 '> <a href="">Policy of Incubation at TIIR</a> <hr /> </li>

                    </ul>
                </div>
            </div>
            <Footer />
        </div>

    )
}
