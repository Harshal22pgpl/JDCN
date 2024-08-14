"use client";

import React, { useState, useEffect } from "react";
import Button from "@/app/components/Button/Button";
import { addAdmissionQuery } from "@/app/lib/services/admission";
import Loader from "@/app/components/Loader/Loader";
import { validator } from "@/app/lib/helpers/validator";
import {
  ADMISSION_SUCCESS,
  ERR_MSG,
  FORM_INITIALS,
} from "@/app/lib/constants/admission";
import { toast } from "react-toastify";
import Link from "next/link";

const AdmissionForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setError] = useState({ msg: "", type: "" });
  const [formData, setFormData] = useState(FORM_INITIALS);
  const [currentSlide, setCurrentSlide] = useState(0);



  const handleChange = ({ target }) => {
    const { name, value } = target;
    setError({ msg: "", type: "" });
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError({ msg: "", type: "" });
    let isValid = validator(formData, ERR_MSG, ["otherQuery"]);
    if (isValid === true) {
      try {
        setIsLoading(true);
        let res = await addAdmissionQuery(formData);
        if (res) {
          setFormData(FORM_INITIALS);
          setIsLoading(false);
          setError({ msg: ADMISSION_SUCCESS, type: "success" });
        }
      } catch (error) {
        setIsLoading(false);
      }
    } else {
      toast.error(isValid);
    }
  };

 

  return (
    // AdmissionForm
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="p-5">
            <div className="flex flex-col md:flex-row md:justify-around items-center bg-cover">
            <form
                onSubmit={handleSubmit}
                className="space-y-4 bg-white p-6 w-full md:w-80 lg:w-[600px] border-2 shadow-md flex flex-col border-indigo-200 rounded-xl"
              >
                <h1 className="text-xl bg-clip-text bg-gradient-to-r to-yellow-600 from-pink-400">
                  Admission Form
                </h1>
                <input
                  type="text"
                  name="applicantName"
                  placeholder="Applicant Name*"
                  value={formData.applicantName}
                  onChange={handleChange}
                  required
                  className="border border-gray-300 rounded-md px-4 py-2"
                />
                <input
                  type="text"
                  name="fathersName"
                  placeholder="Father's Name*"
                  value={formData.fathersName}
                  onChange={handleChange}
                  required
                  className="border border-gray-300 rounded-md px-4 py-2"
                />
                <div className="flex flex-col items-start gap-2 justify-center">
                  <input
                    type="text"
                    name="applicantPhone"
                    value={formData.applicantPhone}
                    placeholder="Mobile*"
                    onChange={handleChange}
                    required
                    className="border border-gray-300 rounded-md px-7 py-2 "
                  />
                  {/* <Button
                    type="button"
                    className="ml-2  py-2 text-sm"
                    style={{ background: "#00a76f", color: "white" }}
                  >
                    Verify
                  </Button> */}
                </div>
                <input
                  type="email"
                  name="applicantEmail"
                  value={formData.applicantEmail}
                  placeholder="your@email.com"
                  onChange={handleChange}
                  required
                  className="border border-gray-300 rounded-md px-4 py-2"
                />
                <select
                  name="classEnquiringFor"
                  value={formData.classEnquiringFor}
                  onChange={handleChange}
                  required
                  className="border border-gray-300 rounded-md px-4 py-2"
                >
                  <option value="" disabled>
                    Which Year you are intrested in
                  </option>
                  {Array.from({ length: 4 }, (_, i) => i + 1).map((value) => (
                    <option key={value} value={value}>
                      Year {value}
                    </option>
                  ))}
                </select>
                <input
                  type="text"
                  name="previousSchool"
                  value={formData.previousSchool}
                  placeholder="Previous School"
                  onChange={handleChange}
                  required
                  className="border border-gray-300 rounded-md px-4 py-2"
                />
                <select
                  name="busRequired"
                  placeholder='Bus'
                  value={formData.busRequired}
                  onChange={handleChange}
                  required
                  className="border border-gray-300 rounded-md px-4 py-2"
                >
                  <option value="" disabled>
                    Bus Required?
                  </option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
                <select
                  name="admissionYear"
                  value={formData.admissionYear}
                  onChange={handleChange}
                  required
                  className="border border-gray-300 rounded-md px-4 py-2"
                >
                  <option value="" disabled>
                    Session
                  </option>
                  <option value="2023-2024">2023-2024</option>
                  <option value="2024-2025">2024-2025</option>
                </select>
              
                <button
                  type="submit"
                  style={{ background: "purple", color: "white" }}
                  className="px-4 py-2 rounded-md"
                >
                  Submit
                </button>
              </form>

              <div className="flex flex-col justify-center items-center mt-5 md:mt-0 max-w-3xl">
                <h1 className="mb-4 text-center text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r to-purple-600 from-purple-400">
                    Just a Few More Steps
                  </span>

                  <span>
                    {" "}
                    Towards<br></br> Your Dream.
                  </span>
                </h1>
                <p className="text-lg my-5 font-normal text-gray-500 lg:text-xl dark:text-gray-400">
                  Here, learning is a joy ride!.
                </p>
                <button
                  type="button"
                  className="text-white  hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-200 shadow-lg shadow-green-100 dark:shadow-lg dark:shadow-green-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  style={{ background: "purple" }}
                >
                  <Link href="/about"> About Us</Link>
                </button>
              </div>
            </div>

           
          </div>
        </>
      )}
    </>
  );
};

export default AdmissionForm;