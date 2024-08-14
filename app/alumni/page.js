"use client";
import React from "react";
import Counter from "@/app/components/Counter";
import Image from "next/image";
import AlumniCard from "@/app/components/AlumniCard";
import AlumniNewsCard from "@/app/components/AlumniNewsCard";
const MyComponent = () => {
  const cardData = [
    {
      title: "Need help with Claim?",
      content:
        "Go to this step by step guideline process on how to certify for your weekly benefits.",
      buttonText: "See our guideline",
      buttonLink: "#",
      imageSource: "/mission-icon.png",
    },
    {
      title: "Another Title",
      content: "Some content here.",
      buttonText: "Click here",
      buttonLink: "#",
      imageSource: "/mission-icon.png",
    },
    {
      title: "Another Title",
      content: "Some content here.",
      buttonText: "Click here",
      buttonLink: "#",
      imageSource: "/mission-icon.png",
    },
    {
      title: "Another Title",
      content: "Some content here.",
      buttonText: "Click here",
      buttonLink: "#",
      imageSource: "/mission-icon.png",
    },
    {
      title: "Another Title",
      content: "Some content here.",
      buttonText: "Click here",
      buttonLink: "#",
      imageSource: "/mission-icon.png",
    },
    {
      title: "Another Title",
      content: "Some content here.",
      buttonText: "Click here",
      buttonLink: "#",
      imageSource: "/mission-icon.png",
    },
    // Add more card data objects as needed
  ];

  const newsCard = [
    {
      title: "Need help with Claim?",
      content:
        "Go to this step by step guideline process on how to certify for your weekly benefits.",
      lastUpdated: "23/33/33",
      buttonLink: "#",
      imageUrl: "/News.jpg",
    },
    {
      title: "Another Title",
      content: "Some content here.",
      lastUpdated: "23/33/33",
      buttonLink: "#",
      imageUrl: "/News.jpg",
    },
    {
      title: "Another Title",
      content: "Some content here.",
      lastUpdated: "23/33/33",
      buttonLink: "#",
      imageUrl: "/News.jpg",
    },
    {
      title: "Another Title",
      content: "Some content here.",
      lastUpdated: "23/33/33",
      buttonLink: "#",
      imageUrl: "/News.jpg",
    },

    // Add more card data objects as needed
  ];
  return (
    <>
      <div className=" w-full h-80 bg-cover capitalize flex justify-center items-center "
                style={{ backgroundImage: `url('about-banner.jpg')` }}>

                <h2 className="font-bold text-4xl uppercase  text-center text-white" >
                ALUMNI RELATIONS
                </h2>
                </div>
      <div className="flex p-20  mx-auto">
        <div className="w-[25%] mx-auto ">
          {/* Left 30% width */}
          <ul className="bg-gray-200 p-4 rounded-lg">
            {/* Elementor widget list */}
            <li className="mb-5 hover:bg-purple-400 p-4 rounded-md">AIC</li>
            <li className="mb-5 hover:bg-purple-400 p-4 rounded-md">
              Message From Head
            </li>
            <li className="mb-5 hover:bg-purple-400 p-4 rounded-md">
              Alumni Affairs
            </li>
            <li className="mb-5 hover:bg-purple-400 p-4 rounded-md">Services</li>
            <li className="mb-5 hover:bg-purple-400 p-4 rounded-md">News</li>
            <li className="mb-5 hover:bg-purple-400 p-4 rounded-md">
              Success Stories
            </li>
            <li className="mb-5 hover:bg-purple-400 p-4 rounded-md">Reunions</li>
            <li className=" hover:bg-purple-400 p-4 rounded-md">Contact Us</li>
          </ul>
        </div>
        <div className="w-[70%] p-4">
          {/* Left 70% width */}
          <h1 className="text-4xl font-bold mb-4">About Alumni Cell LNCT</h1>
          {/* Heading */}
          <div className="text-lg mt-4">
            {/* Sentence */}
            <p className="mb-8">
              {" "}
              LNCT Group is proud to have its alumnus, as a group of 50,000+
              engineers, technologists, scientists, managers, and entrepreneurs
              and more. Established in 1994, Lakshmi Narain College of
              Technology has cultivated a vibrant and enduring relationship with
              its alumni community over the years. LNCT understands that the
              journey of education extends far beyond graduation, and thus, it
              is committed to nurturing lifelong connections with its former
              students.
            </p>{" "}
            <br></br>
            <p className="mb-4">
              The institute wholeheartedly acknowledges and takes immense pride
              in the pivotal role played by its esteemed alumni in our notable
              achievements. As we chart a path forward, our institution’s growth
              strategy is dedicated to internationalization, fostering
              interdisciplinary research, and nurturing valuable industrial
              relationships. Our aim is to transform untapped potential into
              tangible, meaningful advantages for individuals, society, and our
              nation.
            </p>
            <br></br>
            About the Alumni Cell : The Alumni Cell Office at LNCT consists of a
            dedicated team headed by Prof. Sherin Felix. In addition, a team of
            enthusiastic student volunteers assists the office with various
            activities and events. Please feel free to get in touch with us.
            Your engagement is highly valued.
          </div>
        </div>
      </div>

      <section className=" w-11/12 mx-auto">
        <div className=" w-8/9 rounded-t-md  sm:p-4  md:p-4 lg:p-5 p-4  border-black grid md:grid-cols-1 lg:grid-cols-4   sm:grid-cols-1  justify-center items-center   dark:bg-dpurple   bg-purple-400">
          <div className="  ">
            <Counter
              initialValue={0}
              targetValue={2000}
              speed={0.001}
              text="Highest Package"
              textColor="text-purple-600"
              title="First Counter"
              color=""
            />
          </div>
          <div className=" ">
            <Counter
              initialValue={20}
              targetValue={100}
              speed={100}
              text="Dream Company Offers"
              textColor="text-green-700"
              title="Second Counter"
              color=""
            />
          </div>
          <div className="">
            <Counter
              initialValue={5}
              targetValue={15}
              speed={200}
              text="Placements Batch 22-23"
              textColor=""
              title="Third Counter"
              color=""
            />
          </div>

          <div className="">
            <Counter
              initialValue={5}
              targetValue={15}
              speed={200}
              text="LNCTians Serving MNC"
              textColor="text-red-600"
              title="Third Counter"
              color=""
            />
          </div>
        </div>
        <div className=" rounded-b-md   sm:p-4  md:p-4 lg:p-5 p-4  border-black grid md:grid-cols-1 lg:grid-cols-4   sm:grid-cols-1  justify-center items-center   dark:bg-dpurple  mb-12 bg-purple-400">
          <div className=" ">
            <Counter
              initialValue={0}
              targetValue={2000}
              speed={0.001}
              text="NIRF All India Rank"
              textColor="text-purple-600"
              title="First Counter"
              color=""
            />
          </div>
          <div className=" ">
            <Counter
              initialValue={20}
              targetValue={100}
              speed={100}
              text="Companies Visited 2022"
              textColor="text-green-700"
              title="Second Counter"
              color=""
            />
          </div>
          <div className="">
            <Counter
              initialValue={5}
              targetValue={15}
              speed={200}
              text="Offers For Core Branch"
              textColor="text-red-600"
              title="Third Counter"
              color=""
            />
          </div>

          <div className="">
            <Counter
              initialValue={5}
              targetValue={15}
              speed={200}
              text="Ph.D Faculties"
              textColor="text-red-600"
              title="Third Counter"
              color=""
            />
          </div>
        </div>

      </section>
      <h1 className=" font-semibold text-4xl text-center ">ENGAGEMENTS</h1>
      <p className="text-grey text-md text-center p-4 w-1/2 pb-8 mx-auto">
        LNCT GROUP SECRETARY DR. ANUPAM CHOUKSEY WINS THE PRETIGEOUS DANIK
        BHASKAR EMINANCE AWARDS 2022-23
      </p>
      <section className="flex flex-wrap gap-8 m-auto justify-center  p-10 ">
        {cardData.map((card, index) => (
          <AlumniCard
            key={index} // Ensure each card has a unique key
            title={card.title}
            content={card.content}
            buttonText={card.buttonText}
            buttonLink={card.buttonLink}
            imageSource={card.imageSource}
          />
        ))}
      </section>
      <section className="w-11/12 mx-auto">
        <h1 className=" font-semibold text-4xl text-center ">News & Events</h1>
        <div className="flex justify-center m-8  ">
          <div className=" w-[70%] mx-auto flex flex-col gap-5 p-2">
            <h1 className="text-2xl ">News & Events</h1>
            {newsCard.map((news, index) => (
              <AlumniNewsCard
                key={index} // Ensure each card has a unique key
                title={news.title}
                content={news.content}
                lastUpdated={news.lastUpdated}
                imageUrl={news.imageUrl}
              />

            ))}
          </div>

          <div className="w-[30%]">
            <h1 className="text-2xl  p-4">NewsLetter</h1>
            <Image src="/News.jpg" width={300} height={200} />
            <Image src="/News.jpg" width={300} height={200} />
            <Image src="/News.jpg" width={300} height={200} />
          </div>
        </div>
      </section>
      {/* <section className="">
        <div class="flex sm:w-full md:w-1/3 mb-8 md:mb-0 p-5 shadow-md rounded-xl mr-3 ml-3">
          <div class="w-full text-left">
            <span class="flex item-center">
              <img
                src="https://www.svgrepo.com/show/497628/user-square.svg"
                class="rounded-md mr-3 h-14 w-14"
              />
              <div>
                <p class="text-sm text-gray-600">Leon Bachmann </p>
                <p class="text-sm text-gray-400">Profession</p>
              </div>
            </span>
          </div>
        </div>
      </section> */}
    
      <section
        className=" w-full "
        style={{
          backgroundImage: "url('/svg/linessvg.svg')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <h1 className="  font-semibold text-5xl pt-10 text-white text-center ">
          Connect With US
        </h1>
        <p className="text-white text-center p-10 ">
          Address : Room No 16(A), LNCT Group of Collges +91 7556185388
            alumni@lnct.ac.in
        </p>
        <div className="flex relative text-white w-9/12 mx-auto">
        <p className="text-white text-center p-10 ">
        Mr. BHAVESH BHANUSALI
(President, Alumni cell)
Phone no : – 7000943185 Email id: Bhaveshbhanusalip884@gmail.com
        </p> 
        <p className="text-white text-center p-10 ">
        Mr. BHAVESH BHANUSALI
(President, Alumni cell)
Phone no : – 7000943185 Email id: Bhaveshbhanusalip884@gmail.com
        </p> 
        <p className="text-white text-center p-10 ">
        Mr. BHAVESH BHANUSALI
(President, Alumni cell)
Phone no : – 7000943185 Email id: Bhaveshbhanusalip884@gmail.com
        </p> 
        </div>
        <div className="flex justify-center gap-2 pt-10  items-center pb-2">
        <div className=" text-white  rounded-xl p-3 bg-pink-500  px-10 hover:bg-white hover:text-black ">
               Join us
        </div>
        <div className=" bg-white rounded-xl p-3 px-10 hover:bg-pink-500 hover:text-white">
              Call Back
        </div>
        </div>
      </section>
    </>
  );
};

export default MyComponent;