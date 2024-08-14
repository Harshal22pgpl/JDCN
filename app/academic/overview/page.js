import CampusMap from "@/app/components/CampusMap/CampusMap";
import SliderMain from "@/app/components/SliderMain/SliderMain";
import Image from "next/image";
import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function page() {
  const images = ["/baggi.jpg", "/mainImg.jpeg", "/baggi.jpg"];
  return (
    <div className="w-full">
      <SliderMain images={images} />
      <div className=" w-11/12 mx-auto  p-3">
        <h1 className="text-4xl font-bold py-2 border-b-4 border-red-500 inline-block ">
          Overview
        </h1>
        <div className="w-[600px] h-[440px]  relative my-8">
          <Image src="/a-o.png" alt="image" fill />
          <div className=" absolute w-[580px] h-[400px]  top-5 left-[580px] bg-purple-100 p-2">
            <h1 className="text-3xl font-bold">
              Programs and Course Structure at  LNCT Indore
            </h1>
            <p className=" py-3">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis
              cumque repellendus id dolore quidem quod, assumenda voluptate,
              nisi sequi delectus, magnam cum veritatis molestiae incidunt autem
              repudiandae? Voluptates, doloribus modi autem odio magni eum neque
              obcaecati cupiditate excepturi placeat porro a repellat quasi iure
              expedita impedit molestiae cumque. Ratione dolore nobis numquam,
              atque ipsum totam quae explicabo quam earum commodi illum. Nostrum
              iusto fugit, quae harum temporibus omnis unde saepe at ab eos,
              praesentium id nam. Amet numquam repellendus maiores pariatur
              error a magni exercitationem, fugit facere animi, laudantium,
              aliquam ipsum adipisci quibusdam sit necessitatibus hic deleniti!
              Tenetur, libero culpa.
            </p>
          </div>
        </div>
      </div>

      <div className=" w-11/12 mx-auto  p-3">
        <h1 className="text-4xl font-bold py-2 border-b-4 border-red-500 inline-block ">
          Admission
        </h1>
        <div className="w-[600px] h-[540px]  relative my-8 ml-[540px] ">
          <Image src="/a-o.png" alt="image" fill />
          <div className=" absolute w-[690px] h-[340px]  top-24  right-[480px] bg-purple-600 p-8">
            <h1 className="text-3xl font-bold">Admission at LNCT Indore</h1>
            <p className=" py-2 text-gray-200 p-1">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis
              cumque repellendus id dolore quidem quod, assumenda voluptate,
              nisi sequi delectus, magnam cum veritatis molestiae incidunt autem
              repudiandae? Voluptates, doloribus modi autem odio magni eum neque
              obcaecati cupiditate excepturi placeat porro a repellat quasi iure
              expedita impedit molestiae cumque. Ratione dolore nobis numquam,
              atque ipsum totam quae explicabo cere animi, laudantium, aliquam
              ipsum adipisci quibusdam sit necessitatibus hic deleniti! Tenetur,
              libero culpa.
            </p>
            <button className="p-2 border-2 rounded-lg my-2 font-bold text-white border-gray-100 flex gap-2 items-center ">
              Explore <FaLongArrowAltRight />
            </button>
          </div>
        </div>
      </div>

      <div className=" w-11/12 mx-auto  p-3">
        <h1 className="text-4xl font-bold py-2 border-b-4 border-red-500 inline-block ">
          Faculty
        </h1>
        <div className="my-5">
          <CampusMap
            img1="/teach1.jpg"
            heading1="Overview"
            paragraph1="At LNCT Indore college, our faculty members are distinguished by their extensive experience and hold doctoral degrees in their respective fields, bringing a wealth of research expertise to the classroom. Utilizing innovative and interactive teaching techniques, they strive to create an engaging learning environment for our students. Our faculty members are deeply committed to student success, offering guidance and mentorship to help them reach their academic aspirations. They are easily approachable and readily available to address any doubts, fostering a collaborative atmosphere where students can enhance their understanding of the subject matter."
            img2="/teach2.jpg"
            heading2="Mentoring"
            paragraph2="At LNCT Indore, we prioritize providing exceptional guidance and mentorship to empower our students for success in both their academic pursuits and future careers. Recognizing the hurdles students may encounter along their educational path, we offer a robust mentoring program to address their needs.

          Our mentoring initiative pairs students with seasoned mentors drawn from our esteemed faculty. Through personalized one-on-one interactions, students receive invaluable guidance and encouragement tailored to their unique journey. Mentors assist students in recognizing their strengths and areas for improvement, collaboratively devising strategies to reach their academic and professional objectives."
          />
        </div>
      </div>
    </div>
  );
}
