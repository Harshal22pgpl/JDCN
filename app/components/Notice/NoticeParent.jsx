"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { getAllNotice, deleteNotice } from "@/app/lib/services/notice/notice";
import NoticeForm from "@/app/components/Notice/NoticeForm";
import NoticeTable from "@/app/components/Notice/NoticeTable";
import { getAuthToken } from "@/app/lib/middleware/apiInceptor";

const NewsPage = ({ clientProps }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const {
    colleges = [],
    collegeUuid = "",
    profie = {},
    noticeList = [],
  } = clientProps;
  const [notice, setNoticeList] = useState(clientProps?.noticeList);
  const [selectedNoticeId, setSelectedNoticeId] = useState(null);

  const fetchNotice = async () => {
    try {
      setIsLoading(true);
      const noticeData = await getAllNotice();
      setNoticeList(noticeData);
    } catch (error) {
      console.error("Error fetching news:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFormSubmit = async () => {
    try {
      const updatedNewsList = await getAllNotice();
      setNoticeList(updatedNewsList);
      setSelectedNoticeId(null);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleDelete = async (uuid) => {
    try {
      setIsLoading(true);
      await deleteNotice(uuid);
      fetchNotice();
    } catch (error) {
      console.error("Error deleting notice:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEdit = (uuid) => {
    setSelectedNoticeId(uuid);
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
        await fetchNotice();
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
      <NoticeForm
        selectedNoticeId={selectedNoticeId}
        onFormSubmit={handleFormSubmit}
        setSelectedNoticeId={setSelectedNoticeId}
        noticeList={notice}
        colleges={colleges}
        collegeUuid={collegeUuid}
        profile={profie}
      />
      <NoticeTable
        noticeList={notice}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
    </div>
  );
};

export default NewsPage;
