'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';  // Import axios
import { getAuthToken } from '@/app/lib/middleware/apiInceptor';
import WaitingForApproval from './WaitingForApproval';
import WaitingNews from '@/app/components/WaitingFomApproval/WaitingNews'
import WaitingNotice from '@/app/components/WaitingFomApproval/WaitingNotice'
const WaitingParent = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [events, setEventList] = useState([]); 
  const [news, setNewsList] = useState([]); 
  const [notices, setNoticesList] = useState([]); // Add state for notices

  const fetchEvents = async () => {
    try {
      setIsLoading(true);
      const token = getAuthToken(); // Get the authentication token

      const response = await axios.get('https://lnct-backend.vercel.app/api/v1/event?status=WAITING_FOR_APPROVAL', {
        headers: {
          Authorization: `Bearer ${token}` // Pass the token in the request headers
        },
        params: {
          limit: 6, // Set the limit as needed
          page: 1
        }
      });
  
      console.log('eventData:', response.data);
  
      // Access the events array under the 'data' property
      setEventList(response.data.payload.data); // Adjust based on the actual structure of your response data
    } catch (error) {
      console.error('Error fetching events:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchNews = async () => {
    try {
      setIsLoading(true);
      const token = getAuthToken(); // Get the authentication token

      const response = await axios.get('https://lnct-backend.vercel.app/api/v1/news?status=WAITING_FOR_APPROVAL', {
        headers: {
          Authorization: `Bearer ${token}` // Pass the token in the request headers
        },
        params: {
          limit: 6, // Set the limit as needed
          page: 1
        }
      });
  
      console.log('newsData:', response.data);
  
      // Access the news array under the 'data' property
      setNewsList(response.data.payload.data); // Adjust based on the actual structure of your response data
    } catch (error) {
      console.error('Error fetching news:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchNotices = async () => { // Function to fetch notices data
    try {
      setIsLoading(true);
      const token = getAuthToken(); // Get the authentication token

      const response = await axios.get('https://lnct-backend.vercel.app/api/v1/notice?status=WAITING_FOR_APPROVAL', {
        headers: {
          Authorization: `Bearer ${token}` // Pass the token in the request headers
        },
        params: {
          limit: 6, // Set the limit as needed
          page: 1
        }
      });
  
      console.log('noticesData:', response.data);
  
      // Access the notices array under the 'data' property
      setNoticesList(response.data.payload.data); // Adjust based on the actual structure of your response data
    } catch (error) {
      console.error('Error fetching notices:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = getAuthToken(); // Get authentication token from cookies
        if (!token) {
          router.push('/admin/login'); 
          return;
        }
        setIsLoading(true);
        await Promise.all([fetchEvents(), fetchNews(), fetchNotices()]); // Fetch events, news, and notices
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="news-page">
      <WaitingForApproval events={events} />
      <WaitingNews news={news}/>
      <WaitingNotice notices={notices}/> {/* Pass notices data as a prop */}
    </div>
  );
};

export default WaitingParent;
