import React from "react";

export default function page() {
  return (
    <div>
      <main className="bg-gray-100 text-gray-900">
        {/* Welcome Section */}
        <section className="bg-white py-20">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">
              Welcome to NSHMC
            </h1>
            <p className="text-xl mb-6">Your Health, Our Priority</p>
            <p className="mb-8">
              Our dedicated team of healthcare professionals is committed to
              providing you with the highest quality of care, utilizing the
              latest medical advancements and compassionate service.
            </p>
            
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-purple-800">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-white">Our Services</h2>
            <div className="flex flex-wrap justify-center space-x-6 space-y-6">
              <div className="w-full sm:w-1/2 lg:w-1/4 p-4 bg-white shadow-lg rounded-lg">
                <h3 className="text-2xl font-semibold mb-4">General Surgery</h3>
                <p>
                  Advanced surgical procedures using state-of-the-art
                  technology.
                </p>
              </div>
              <div className="w-full sm:w-1/2 lg:w-1/4 p-4 bg-white shadow-lg rounded-lg">
                <h3 className="text-2xl font-semibold mb-4">Cardiology</h3>
                <p>Comprehensive heart care from diagnosis to treatment.</p>
              </div>
              <div className="w-full sm:w-1/2 lg:w-1/4 p-4 bg-white shadow-lg rounded-lg">
                <h3 className="text-2xl font-semibold mb-4">Pediatrics</h3>
                <p>
                  Compassionate care for children from infancy through
                  adolescence.
                </p>
              </div>
              <div className="w-full sm:w-1/2 lg:w-1/4 p-4 bg-white shadow-lg rounded-lg">
                <h3 className="text-2xl font-semibold mb-4">
                  Emergency Services
                </h3>
                <p>24/7 emergency care for critical health conditions.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Doctors Section */}
        <section className="bg-gray-200 py-20">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Meet Our Doctors</h2>
            <div className="flex flex-wrap justify-center space-x-6 space-y-6">
              <div className="w-full sm:w-1/2 lg:w-1/4 p-4 bg-white shadow-lg rounded-lg">
                <img
                  src="/doctor1.jpg"
                  alt="Doctor 1"
                  className="w-full rounded-t-lg"
                />
                <h3 className="text-2xl font-semibold mb-2 mt-4">
                  Dr. John Doe
                </h3>
                <p>Cardiologist</p>
              </div>
              <div className="w-full sm:w-1/2 lg:w-1/4 p-4 bg-white shadow-lg rounded-lg">
                <img
                  src="/doctor2.jpg"
                  alt="Doctor 2"
                  className="w-full rounded-t-lg"
                />
                <h3 className="text-2xl font-semibold mb-2 mt-4">
                  Dr. Jane Smith
                </h3>
                <p>Pediatrician</p>
              </div>
              <div className="w-full sm:w-1/2 lg:w-1/4 p-4 bg-white shadow-lg rounded-lg">
                <img
                  src="/doctor3.jpg"
                  alt="Doctor 3"
                  className="w-full rounded-t-lg"
                />
                <h3 className="text-2xl font-semibold mb-2 mt-4">
                  Dr. Emily Johnson
                </h3>
                <p>General Surgeon</p>
              </div>
              <div className="w-full sm:w-1/2 lg:w-1/4 p-4 bg-white shadow-lg rounded-lg">
                <img
                  src="/doctor4.jpg"
                  alt="Doctor 4"
                  className="w-full rounded-t-lg"
                />
                <h3 className="text-2xl font-semibold mb-2 mt-4">
                  Dr. Michael Lee
                </h3>
                <p>Emergency Medicine</p>
              </div>
            </div>
          </div>
        </section>

        {/* Patient Testimonials Section */}
    

        {/* Contact Us Section */}
        <section className="bg-gray-200 py-20">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
            <p className="mb-4">
              For appointments, inquiries, or more information, please contact
              us.
            </p>
            <p className="mb-4">Phone: (123) 456-7890</p>
            <p className="mb-4">Email: contact@hospital.com</p>
            <p className="mb-4">
              Address: 123 Health St, Wellness City, HealthState, 12345
            </p>
           
          </div>
        </section>
      </main>
    </div>
  );
}
