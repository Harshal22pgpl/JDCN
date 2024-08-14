"use client";
import React, { useState, useEffect, useRef } from "react";
import { addSeminar, updateSeminar } from "@/app/lib/services/seminar/seminar";
import Loader from "@/app/components/Loader/Loader";
import Notification from "@/app/components/Toast/Notification";
import {
  ADMIN,
  SEMINARINITIAL,
} from "@/app/lib/constants/index";
import moment from "moment";
import { uploadImg } from "@/app/lib/services/files/fileServices";
import useDropdown from "../hooks/useDropDown";
import { first } from "lodash";

const fields = [
  { name: "title", label: "Title", type: "text", placeholder: "Enter Title" },
  { name: "type", label: "Type", type: "text", placeholder: "Enter Type" },
  {
    name: "department",
    label: "Department",
    type: "text",
    placeholder: "Enter Department",
  },
  {
    name: "speakerName",
    label: "Speaker Name",
    type: "text",
    placeholder: "Enter Speaker Name",
  },
  { name: "venue", label: "Venue", type: "text", placeholder: "Enter Venue" },
  {
    name: "contactPerson",
    label: "Contact Person",
    type: "text",
    placeholder: "Enter Contact Person",
  },
  {
    name: "abstract",
    label: "Abstract",
    type: "text",
    placeholder: "Enter Abstract",
  },
  {
    name: "imageUrl",
    label: "Image URL",
    type: "file",
    placeholder: "Enter Image URL",
  },
  {
    name: "publishedDate",
    label: "Published Date",
    type: "datetime-local",
    placeholder: "Enter Published Date",
  },
];
const SeminarForm = ({
  selectedSeminarId,
  setSelectedSeminarId,
  onFormSubmit,
  seminarList,
  ...others
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setError] = useState({ msg: "", type: "" });
  const [validationErrors, setValidationErrors] = useState({});
  const fileInputRef = useRef(null);
  const [seminar, setSeminarData] = useState({
    ...SEMINARINITIAL,
    endDate: moment().format("YYYY-MM-DDTHH:mm:ss"),
  });
  const { colleges = [], collegeUuid = "", profile = {} } = others;

  const [organization, OrganizationDropDown, setOrganization] = useDropdown(
    "College",
    collegeUuid || first(colleges).value,
    others?.colleges || []
  );

  const [isEditMode, setIsEditMode] = useState(false);
  const [prevImagePreview, setPrevImagePreview] = useState(null);
  const [prevImagePreviewText, setPrevImagePreviewText] = useState(
    "Previously Used Image"
  );

  useEffect(() => {
    if (selectedSeminarId) {
      const selectedSeminar = seminarList.find(
        (seminar) => seminar.uuid === selectedSeminarId
      );

      if (selectedSeminar) {
        setSeminarData({
          title: selectedSeminar.title,
          description: selectedSeminar.description,
          file: selectedSeminar.file,
          endDate: moment(selectedSeminar.endDate).format(
            "YYYY-MM-DDTHH:mm:ss"
          ),
        });
        setIsEditMode(true);
        // Clear validation errors when entering edit mode
        setValidationErrors({});
        setPrevImagePreview(selectedSeminar.file); // Set previous image preview
        setPrevImagePreviewText("Current Image"); // Update text for current image
      }
    } else {
      setSeminarData({
        ...SEMINARINITIAL,
        endDate: moment().format("YYYY-MM-DDTHH:mm"),
      });
      setIsEditMode(false);
      // Clear validation errors when exiting edit mode
      setValidationErrors({});
      setPrevImagePreview(null); // Clear previous image preview
      setPrevImagePreviewText("Previously Used Image"); // Reset text for previous image
    }
  }, [selectedSeminarId, seminarList]);

  const handleChange = ({ target }) => {
    const { name, value } = target;

    if (name === "imageUrl") {
      setSeminarData((prev) => ({
        ...prev,
        file: target.files.length > 0 ? target.files[0] : null,
      }));
    } else {
      setError({ msg: "", type: "" });
      const isDateTimeLocal = target.type === "datetime-local";

      let rawValue = value;

      // Handle datetime-local input
      if (isDateTimeLocal) {
        // Construct the date and time string in the required format
        const dateValue = moment(value).format("YYYY-MM-DD");
        const timeValue = moment(value).format("HH:mm");
        rawValue = `${dateValue}T${timeValue}`;
      }

      setSeminarData((prev) => ({ ...prev, [name]: rawValue }));

      // Clear validation error for the current field
      setValidationErrors((prevErrors) => {
        const updatedErrors = { ...prevErrors };
        delete updatedErrors[name];
        return updatedErrors;
      });
    }
  };

  const handleCancelEdit = () => {
    setSeminarData({ ...SEMINARINITIAL });
    setSelectedSeminarId(null);
    setIsEditMode(false);
    setPrevImagePreview(null);
    setPrevImagePreviewText("Previously Used Image");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError({ msg: "", type: "" });
    try {
      setIsLoading(true);


      if (!validateForm()) return;

      const formattedDate = moment(seminar.endDate).toISOString();
      let imgRes = null;

      if (seminar.imageUrl && seminar.imageUrl !== prevImagePreview) {
        imgRes = await uploadImg({
          img: seminar.file,
          category: "SEMINARINITIAL",
        });
        setPrevImagePreview(seminar.file); // Update previous image preview if a new image is uploaded
        setPrevImagePreviewText("Current Image"); // Update text for current image
      }

      if (isEditMode) {
        await updateSeminar({
          ...seminar,
          imageUrl: imgRes ? imgRes : seminar.imageUrl,
          collegeUuid: organization || collegeUuid,
          uuid: selectedSeminarId,
        });
      } else {
        await addSeminar({
          ...SEMINARINITIAL,
          file: imgRes,
          endDate: formattedDate,
          collegeUuid: organization || collegeUuid,
          // organizationUuid: organization || schoolUuid,
        });


        // const res = await addNotice(formData);
      }

      onFormSubmit();
    } catch (error) {
      setError({ msg: error.message || "An error occurred", type: "error" });
      console.error("Error submitting form:", error);
    } finally {
      setIsLoading(false);
      setSeminarData({
        ...SEMINARINITIAL,
        endDate: moment().format("YYYY-MM-DDTHH:mm"),
      });
      const fileInput = document.getElementById("file");
      if (fileInput) {
        fileInput.value = ""; // Reset value to empty string
      }
    }
  };

  const validateForm = () => {
    const errors = {};
    fields.forEach((field) => {
      if (field.type !== "file" && !seminar[field.name].trim()) {
        errors[field.name] = "This field is required";
      }
    });
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  return (
    <>
      <div className="flex flex-col w-full justify-center items-center bg-[url('/MessageSvg.svg')]">
        <h1 className="text-center mx-auto w-full my-3 text-4xl font-bold text-tgreen">
          Seminar Details Form
        </h1>
        <div
          className="w-11/12 rounded-lg flex flex-col justify-center items-center bg-bgreen opacity-75 p-5"
          onSubmit={handleSubmit}
        >
          <div className="w-full grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1">
            <div></div>
            {fields.map((field) => (
              <div key={field.name} className="w-full flex flex-col py-2 px-4">
                <label
                  htmlFor={field.name}
                  className="w-32 md:w-40 lg:w-40 p-2 text-xl font-bold"
                >
                  {field.label}
                </label>
                {field.type === "file" ? (
                  <>
                    <input
                      ref={fileInputRef}
                      name={field.name}
                      className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                      id={field.name}
                      type={field.type}
                      onChange={handleChange}
                      required
                    />
                    {prevImagePreview && (
                      <div>
                        <p className="font-medium text-lg mt-5">
                          {prevImagePreviewText}
                        </p>
                        <img
                          src={prevImagePreview}
                          alt={prevImagePreviewText}
                          style={{ maxWidth: "100px", marginTop: "10px" }}
                        />
                      </div>
                    )}
                  </>
                ) : (
                  <input
                    name={field.name}
                    className={`p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black ${validationErrors[field.name] ? "border-red-500" : ""
                      }`}
                    id={field.name}
                    type={field.type}
                    value={seminar[field.name]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    required
                  />
                )}
                {validationErrors[field.name] && (
                  <span className="text-red-500 text-sm mt-1">
                    {validationErrors[field.name]}
                  </span>
                )}
              </div>
            ))}
            {profile.userType === ADMIN && <OrganizationDropDown />}
          </div>
          {isEditMode ? (
            <div className="flex">
              <button
                onClick={handleSubmit}
                className="w-20 my-5 mx-2 p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 bg-white hover:bg-tgreen"
              >
                Update
              </button>
              <button
                onClick={handleCancelEdit}
                className="w-20 my-5 mx-2 p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 bg-red-400 hover:bg-red-500 text-white"
              >
                Cancel
              </button>
            </div>
          ) : (
            <button
              onClick={handleSubmit}
              className="w-20 my-5 mx-auto font-bold p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 bg-purple-400 text-white"
            >
              Submit
            </button>
          )}
        </div>
      </div>
      {isLoading && <Loader />}
      {hasError.msg && (
        <Notification type={hasError.type} message={hasError.msg} />
      )}
    </>
  );
};

export default SeminarForm;
