"use client";
import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { addCareer, updateCareer } from '@/app/lib/services/careers/careers';
import { uploadImg } from '@/app/lib/services/files/fileServices';
import Loader from '../Loader/Loader';


export const CAREER_INITIALS = {
    collegeName: "",
    title: "",
    aboutJob: "",
    resume: "",
    package: "",
    qualification: "",
    isOpen: true,
    openPosition: "",
    skills: "",
    relaventExperience: "",
  }
  

export default function CareerForm({ selectedCareerId, careers }) {
    const [careerData, setCareerData] = useState({ ...CAREER_INITIALS });
    const [isLoading, setIsLoading] = useState(false);
    const [hasError, setError] = useState({ msg: "", type: "" });
    const [isEditMode, setIsEditMode] = useState(false);
    const [validationErrors, setValidationErrors] = useState({});

    useEffect(() => {
        if (selectedCareerId) {
            const selectedCareer = careers.find((career) => career.uuid === selectedCareerId);
            if (selectedCareer) {
                setCareerData({
                    collegeName: selectedCareer.collegeName,
                    title: selectedCareer.title,
                    aboutJob: selectedCareer.aboutJob,
                    resume: selectedCareer.resume,
                    package: selectedCareer.package,
                    qualification: selectedCareer.qualification,
                    isOpen: selectedCareer.isOpen,
                    openPosition: selectedCareer.openPosition,
                    skills: selectedCareer.skills,
                    relaventExperience: selectedCareer.relaventExperience,
                });
                setIsEditMode(true);
            }
        } else {
            setCareerData({ ...CAREER_INITIALS });
            setIsEditMode(false);
        }
    }, [selectedCareerId, careers]);

    const handleChange = ({ target }) => {
        const { name, value, type, checked } = target;
        setValidationErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
        if (type === "file") {
            setCareerData((prev) => ({ ...prev, [name]: target.files[0] }));
        } else {
            setCareerData((prev) => ({
                ...prev,
                [name]: type === "checkbox" ? checked : value,
            }));
            if (!value && type !== "checkbox") {
                setValidationErrors((prevErrors) => ({
                    ...prevErrors,
                    [name]: "This field is required",
                }));
            }
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setValidationErrors({});
        console.log("submitting........");
        setError({ msg: "", type: "" });

        try {
            const newValidationErrors = {};
            Object.keys(CAREER_INITIALS).forEach((field) => {
                if (!careerData[field] && typeof careerData[field] !== 'boolean') {
                    newValidationErrors[field] = "This field is required";
                }
            });
            if (Object.keys(newValidationErrors).length > 0) {
                setValidationErrors(newValidationErrors);
                return;
            }

            setIsLoading(true);

            const imgRes = await uploadImg({
                img: careerData.resume,
                category: "resumes",
            });

            let res;
            if (isEditMode) {
                res = await updateCareer({
                    ...careerData,
                    resume: imgRes,
                    uuid: selectedCareerId,
                });
            } else {
                res = await addCareer({
                    ...careerData,
                    resume: imgRes,
                });
            }

            if (res) {
                setError({ msg: "Career submitted successfully", type: "success" });
                setIsEditMode(false);
                setCareerData({ ...CAREER_INITIALS });
            }
        } catch (error) {
            setError({ msg: error.message || "An error occurred", type: "error" });
            console.error("Error submitting form:", error);
        } finally {
            setIsLoading(false);
        }
        console.log("submitted.....")
    };

    return (
        <>
        {isLoading && <Loader />} {/* Display loader if isLoading is true */}
      
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold mb-6">Job Application Form</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="collegeName">
                        College Name
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="collegeName"
                        type="text"
                        name="collegeName"
                        placeholder="LNCTs"
                        value={careerData.collegeName}
                        onChange={handleChange}
                    />
                    {validationErrors.collegeName && <p className="text-red-500">{validationErrors.collegeName}</p>}
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                        Job Title
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="title"
                        type="text"
                        name="title"
                        placeholder="Software Engineer"
                        value={careerData.title}
                        onChange={handleChange}
                    />
                    {validationErrors.title && <p className="text-red-500">{validationErrors.title}</p>}
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="aboutJob">
                        About the Job
                    </label>
                    <textarea
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="aboutJob"
                        name="aboutJob"
                        placeholder="Join our dynamic team of software engineers to work on cutting-edge projects."
                        value={careerData.aboutJob}
                        onChange={handleChange}
                    />
                    {validationErrors.aboutJob && <p className="text-red-500">{validationErrors.aboutJob}</p>}
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="resume">
                        Resume
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="resume"
                        type="file"
                        name="resume"
                        onChange={handleChange}
                    />
                    {validationErrors.resume && <p className="text-red-500">{validationErrors.resume}</p>}
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="package">
                        Package (Annual Salary)
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="package"
                        type="number"
                        name="package"
                        placeholder="80000"
                        value={careerData.package}
                        onChange={handleChange}
                    />
                    {validationErrors.package && <p className="text-red-500">{validationErrors.package}</p>}
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="qualification">
                        Qualification
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="qualification"
                        type="text"
                        name="qualification"
                        placeholder="Bachelor's degree in Computer Science or related field"
                        value={careerData.qualification}
                        onChange={handleChange}
                    />
                    {validationErrors.qualification && <p className="text-red-500">{validationErrors.qualification}</p>}
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="isOpen">
                        Is Position Open?
                    </label>
                    <select
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="isOpen"
                        name="isOpen"
                        value={careerData.isOpen}
                        onChange={handleChange}
                    >
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                    </select>
                    {validationErrors.isOpen && <p className="text-red-500">{validationErrors.isOpen}</p>}
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="openPosition">
                        Open Position
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="openPosition"
                        type="text"
                        name="openPosition"
                        placeholder="Senior Software Engineer"
                        value={careerData.openPosition}
                        onChange={handleChange}
                    />
                    {validationErrors.openPosition && <p className="text-red-500">{validationErrors.openPosition}</p>}
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="skills">
                        Skills
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="skills"
                        type="text"
                        name="skills"
                        placeholder="JavaScript, Python, React, Node.js"
                        value={careerData.skills}
                        onChange={handleChange}
                    />
                    {validationErrors.skills && <p className="text-red-500">{validationErrors.skills}</p>}
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="relaventExperience">
                        Relevant Experience
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="relaventExperience"
                        type="text"
                        name="relaventExperience"
                        placeholder="Minimum 5 years of experience in software development"
                        value={careerData.relaventExperience}
                        onChange={handleChange}
                    />
                    {validationErrors.relaventExperience && <p className="text-red-500">{validationErrors.relaventExperience}</p>}
                </div>

                <div className="flex items-center justify-between">
                    <button
                        className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        {isEditMode ? 'Update' : 'Submit'}
                    </button>
                </div>
            </form>
        </div>
        </>
    );
}
