'use client';
import React, { useState, useEffect } from "react";
import { scrollToTop } from "@/app/lib/helpers/scrollToTopOfContainer";
import { addApplication } from "@/app/lib/services/jobApplication/jobApplication";
import SuccessModal from "../SuccessModal";
import Loader from "@/app/components/Loader/Loader";
import { JOB_APPLICATION } from "@/app/lib/constants";
import { uploadImg } from "@/app/lib/services/files/fileServices"; // Assuming uploadImg function is correctly implemented

const useClientData = () => {
  const [studentData, setStudentData] = useState({
    ...JOB_APPLICATION
  });
  const [hasError, setError] = useState({ msg: "", type: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [fileError, setFileError] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const collegeName = params.get("college");
    const jobUuid = params.get("jobUuid");

    // If collegeName exists in query parameter, set it in studentData
    if (collegeName) {
      setStudentData((prevData) => ({
        ...prevData,
        collegeName: collegeName.toUpperCase(),
        jobUuid: jobUuid || ""
      }));
    }

    setIsLoading(false);
  }, []);

  const handleClientDataChange = (e, type) => {
    setError({ msg: "", type: "" });
    if (type === 'file') {
      const file = e.target.files[0];
      if (file) {
        const fileSizeInKB = file.size / 1024;
        if (fileSizeInKB > 80) {
          setFileError('File size should not exceed 80KB');
        } else {
          setStudentData((prevData) => ({
            ...prevData,
            resumeLink: file, // Store the file object in studentData
          }));
          setFileError('');
        }
      }
    } else {
      const { name, value } = e.target;
      setStudentData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  return {
    studentData,
    setStudentData,
    hasError,
    setError,
    isLoading,
    setIsLoading,
    errors,
    setErrors,
    showSuccessModal,
    setShowSuccessModal,
    fileError,
    setFileError,
    handleClientDataChange
  };
};

const CareerForm = () => {
  const {
    studentData,
    setStudentData,
    hasError,
    setError,
    isLoading,
    setIsLoading,
    errors,
    setErrors,
    showSuccessModal,
    setShowSuccessModal,
    fileError,
    setFileError,
    handleClientDataChange
  } = useClientData();

  const handleCloseSuccessModal = () => {
    setShowSuccessModal(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Validate form fields before submission
    const validationErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;

    if (studentData.applicantName.trim() === "") {
      validationErrors.applicantName = "Please enter applicant name.";
    }
    if (studentData.email.trim() === "") {
      validationErrors.email = "Please enter email.";
    } else if (!emailRegex.test(studentData.email.trim())) {
      validationErrors.email = "Please enter a valid email address.";
    }
    if (studentData.collegeName.trim() === "") {
      validationErrors.collegeName = "Please enter college name.";
    }
    if (studentData.phone.trim() === "") {
      validationErrors.phone = "Please enter phone number.";
    } else if (!phoneRegex.test(studentData.phone.trim())) {
      validationErrors.phone = "Phone number must be 10 digits long.";
    }
    if (studentData.qualifications.trim() === "") {
      validationErrors.qualifications = "Please enter qualifications.";
    }
    if (studentData.experience.trim() === "") {
      validationErrors.experience = "Please enter experience.";
    }
    if (!studentData.resumeLink) {
      validationErrors.resumeLink = "Please upload a resume file.";
    }
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        // Upload resume file
        const imgRes = await uploadImg({
          img: studentData.resumeLink,
          category: "resumes", // Adjust category if needed
        });

        // Add application with uploaded resume link
        const res = await addApplication({
          ...studentData,
          resumeLink: imgRes,
        });

        if (res) {
          setStudentData({
            ...JOB_APPLICATION,
            resumeLink: null // Reset resumeLink after successful submission if needed
          });
          setIsLoading(false);
          setShowSuccessModal(true);
          scrollToTop();
        }
      } catch (error) {
        setIsLoading(false);
        setError({ msg: "An error occurred while submitting the form.", type: "error" });
        console.error("Error submitting form:", error);
      }
    } else {
      setIsLoading(false);
      setError({ msg: "Please fix the errors in the form.", type: "error" });
      scrollToTop();
    }
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="w-9/12 mx-auto mt-10 p-4 my-10">
            <SuccessModal isOpen={showSuccessModal} onClose={handleCloseSuccessModal} />
            <h1 className="my-4 text-3xl font-bold">Career Form</h1>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3">
                  <label htmlFor="applicantName" className="block text-sm font-medium text-gray-700">
                    Applicant Name
                  </label>
                  <input
                    type="text"
                    name="applicantName"
                    id="applicantName"
                    value={studentData.applicantName}
                    onChange={(e) => handleClientDataChange(e, 'text')}
                    className="mt-1 block outline-none border-b-2 border-black w-full rounded-md shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
                  />
                  {errors.applicantName && <p className="text-red-500">{errors.applicantName}</p>}
                </div>
                <div className="p-3">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={studentData.email}
                    onChange={(e) => handleClientDataChange(e, 'email')}
                    className="mt-1 block outline-none border-b-2 border-black w-full rounded-md shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
                  />
                  {errors.email && <p className="text-red-500">{errors.email}</p>}
                </div>
                <div className="p-3">
                  <label htmlFor="jobUuid" className="block text-sm font-medium text-gray-700">
                    Job UUID
                  </label>
                  <input
                    type="text"
                    name="jobUuid"
                    id="jobUuid"
                    value={studentData.jobUuid}
                    onChange={(e) => handleClientDataChange(e, 'text')}
                    className="mt-1 block outline-none border-b-2 border-black w-full rounded-md shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
                  />
                  {errors.jobUuid && <p className="text-red-500">{errors.jobUuid}</p>}
                </div>
                <div className="p-3">
                  <label htmlFor="isOpen" className="block text-sm font-medium text-gray-700">
                    Is Open
                  </label>
                  <input
                    type="checkbox"
                    name="isOpen"
                    id="isOpen"
                    checked={studentData.isOpen}
                    onChange={(e) => handleClientDataChange(e, 'checkbox')}
                    className="mt-1 block rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                  />
                </div>
                <div className="p-3">
                  <label htmlFor="collegeName" className="block text-sm font-medium text-gray-700">
                    College Name
                  </label>
                  <input
                    type="text"
                    name="collegeName"
                    id="collegeName"
                    value={studentData.collegeName}
                    onChange={(e) => handleClientDataChange(e, 'text')}
                    className="mt-1 block outline-none border-b-2 border-black w-full rounded-md shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
                  />
                  {errors.collegeName && <p className="text-red-500">{errors.collegeName}</p>}
                </div>
                <div className="p-3">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Phone
                  </label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    value={studentData.phone}
                    onChange={(e) => handleClientDataChange(e, 'text')}
                    className="mt-1 block outline-none border-b-2 border-black w-full rounded-md shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
                  />
                  {errors.phone && <p className="text-red-500">{errors.phone}</p>}
                </div>
                <div className="p-3">
                  <label htmlFor="qualifications" className="block text-sm font-medium text-gray-700">
                    Qualifications
                  </label>
                  <input
                    type="text"
                    name="qualifications"
                    id="qualifications"
                    value={studentData.qualifications}
                    onChange={(e) => handleClientDataChange(e, 'text')}
                    className="mt-1 block outline-none border-b-2 border-black w-full rounded-md shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
                  />
                  {errors.qualifications && <p className="text-red-500">{errors.qualifications}</p>}
                </div>
                <div className="p-3">
                  <label htmlFor="experience" className="block text-sm font-medium text-gray-700">
                    Experience
                  </label>
                  <input
                    type="text"
                    name="experience"
                    id="experience"
                    value={studentData.experience}
                    onChange={(e) => handleClientDataChange(e, 'text')}
                    className="mt-1 block outline-none border-b-2 border-black w-full rounded-md shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
                  />
                  {errors.experience && <p className="text-red-500">{errors.experience}</p>}
                </div>
                <div className="p-3">
                  <label htmlFor="resumeLink" className="block text-sm font-medium text-gray-700">
                    Resume (PDF/Image, max 80KB)
                  </label>
                  <input
                    type="file"
                    name="resumeLink"
                    id="resumeLink"
                    accept="application/pdf, image/*"
                    onChange={(e) => handleClientDataChange(e, 'file')}
                    required
                    className="mt-2 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                  {fileError && <p className="text-red-500">{fileError}</p>}
                </div>
                <div className="p-3">
                  <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700">
                    Additional Info
                  </label>
                  <textarea
                    id="additionalInfo"
                    type='text'
                    name="additionalInfo"
                    value={studentData.additionalInfo}
                    onChange={(e) => handleClientDataChange(e, 'text')}
                    className="mt-1 block w-full outline-none border-b-2 border-black rounded-md shadow-sm focus:ring-yellow-500"
                    rows="4"
                  ></textarea>
                  {errors.additionalInfo && <p className="text-red-500">{errors.additionalInfo}</p>}
                </div>
              </div>
              <div className="p-3">
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                  onSubmit={handleSubmit}
                >
                  Submit
                </button>
              </div>
            </form>

          </div>
        </>
      )}
    </>
  );
};

export default CareerForm;
