"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { getAllNews, deleteNews } from "@/app/lib/services/news/news";
import NewsForm from "@/app/components/News/NewsForm";
import NewsTable from "@/app/components/News/NewsTable";
import { getAuthToken } from "@/app/lib/middleware/apiInceptor";

const NewsPage = ({ clientProps }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [selectedNewsId, setSelectedNewsId] = useState(null);
  const {
    colleges = [],
    collegeUuid = "",
    profie = {},
    newsList=[]
  } = clientProps;
  const [news, setNewsList] = useState(clientProps.newsList);
  const fetchNews = async () => {
    try {
      setIsLoading(true);
      const newsData = await getAllNews();
      setNewsList(newsData);
    } catch (error) {
      console.error("Error fetching news:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFormSubmit = async () => {
    try {
      const updatedNewsList = await getAllNews();
      setNewsList(updatedNewsList);
      setSelectedNewsId(null);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleDelete = async (uuid) => {
    try {
      setIsLoading(true);
      await deleteNews(uuid);
      fetchNews();
    } catch (error) {
      console.error("Error deleting news:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEdit = (uuid) => {
    setSelectedNewsId(uuid);
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
      <NewsForm
        colleges={colleges}
        collegeUuid={collegeUuid}
        profile={profie}
        selectedNewsId={selectedNewsId}
        onFormSubmit={handleFormSubmit}
        newsList={news}
        setSelectedNewsId={setSelectedNewsId}
      />
      <NewsTable newsList={news} onDelete={handleDelete} onEdit={handleEdit} />
    </div>
  );
};

export default NewsPage;
