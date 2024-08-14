"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { getAllSeminar, deleteSeminar } from "@/app/lib/services/seminar/seminar.js";
import SeminarForm from "@/app/components/Seminar/SeminarForm";
import SeminarTable from "@/app/components/Seminar/SeminarTable";


import { getAuthToken } from "@/app/lib/middleware/apiInceptor";

const NewsPage = ({ clientProps }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const {
    colleges = [],
    collegeUuid = "",
    profie = {},
  } = clientProps;
  const [seminar, setSeminarList] = useState(clientProps?.seminarList);
  const [selectedSeminarId, setSelectedSeminarId] = useState(null);

  const fetchSeminar = async () => {
    try {
      setIsLoading(true);
      const seminarData = await getAllSeminar();
      setSeminarList(noticeData);
      console.log(seminar);
    } catch (error) {
      console.error("Error fetching news:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFormSubmit = async () => {
    try {
      const updatedSeminarList = await getAllSeminar();
      setSeminarList(updatedSeminarList);
      setSelectedSeminarId(null);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleDelete = async (uuid) => {
    try {
      setIsLoading(true);
      await deleteSeminar(uuid);
      fetchSeminar();
    } catch (error) {
      console.error("Error deleting notice:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEdit = (uuid) => {
    setSelectedSeminarId(uuid);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = getAuthToken(); // Get authentication token from cookies
        if (!token) {
          router.push("/admin/login"); // Redirect to login page if token is not present
          return;
        }
        setIsLoading(true);
        await fetchSeminar();
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="news-page">
      <SeminarForm
        selectedSeminarId={selectedSeminarId}
        onFormSubmit={handleFormSubmit}
        setSelectedSeminarId={setSelectedSeminarId}
        seminarList={seminar}
        colleges={colleges}
        collegeUuid={collegeUuid}
        profile={profie}
      />
      <SeminarTable
        seminarList={seminar}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
    </div>
  );
};

export default NewsPage;
