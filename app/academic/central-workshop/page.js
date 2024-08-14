import RelatedLink from '@/app/components/RelatedLink/RelatedLink'
import SliderMain from '@/app/components/SliderMain/SliderMain'
import Image from 'next/image';
import React from 'react'

export default function page() {
    const images = ["/baggi.jpg", "/mainImg.jpeg", "/baggi.jpg"];
  return (
    <div>
      <SliderMain images={images}/>
      <div className="w-full mx-auto flex relative mt-2  font-semibold text-lg">
          <div className="w-2/3 px-20 ">
            
          <div className=" w-full mx-auto  p-3">
            <h1 className="text-4xl font-bold py-2 border-b-4 border-red-500 inline-block ">
              About Us
            </h1>
            <div className="w-[430px] h-[440px]  relative my-8">
              <Image src="/a-o.png" alt="image" fill />
              <div className=" absolute w-[500px] h-[400px]  top-5 left-[230px] bg-purple-100 p-8">
                <h1 className="text-2xl font-bold">
                 Welcome to Central Workshop
                </h1>
                <p className=" py-3 text-sm">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Nobis cumque repellendus id dolore quidem quod, assumenda
                  voluptate, nisi sequi delectus, magnam cum veritatis molestiae
                  incidunt autem repudiandae? Voluptates, doloribus modi autem
                  odio magni eum neque obcaecati cupiditate excepturi placeat
                  porro a repellat quasi iure expedita impedit molestiae cumque.
                  Ratione dolore nobis numquam, atque ipsum totam quae explicabo
                  quam earum commodi illum. Nostrum iusto fugit, quae harum
                  temporibus omnis unde saepe at ab eos, praesentium id nam.
                  Amet numquam repellendus maiores pariatur error a magni
                  exercitationem, fugit facere animi, laudantium, aliquam ipsum
                  adipisci quibusdam sit necessitatibus hic deleniti! Tenetur,
                  libero culpa.
                </p>
              </div>
            </div>
          </div>

          <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Workshops Offered</h2>
          <p className="mb-6">Here, we showcase the variety of workshops available to students. From robotics and electronics to woodworking and metalworking, theres something for everyone. Each workshop is led by experienced instructors and provides participants with valuable skills and knowledge.</p>
          <div className="relative w-full h-96">
            <Image src="/ar-1.jpg" alt="Workshops Offered Image" layout="fill" objectFit="cover" className="rounded-lg" />
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Student Projects</h2>
          <p className="mb-6">In this section, we highlight the incredible projects that students have completed during our workshops. From innovative gadgets to artistic creations, these projects demonstrate the talent and creativity of our students. Browse through the gallery to see whats possible at our workshop!</p>
          <div className="relative w-full h-96">
            <Image src="/ar-2.jpg" alt="Student Projects Image" layout="fill" objectFit="cover" className="rounded-lg" />
          </div>
        </section>

            
          </div>
          <div className="w-1/3 h-[600px] sticky top-20 left-0 py-10 ">
            <RelatedLink/>
          </div>
        </div>
    </div>
  )
}
