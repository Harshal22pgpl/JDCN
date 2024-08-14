'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { deleteCareer } from '@/app/lib/services/careers/careers';
import { getAuthToken } from '@/app/lib/middleware/apiInceptor';
import CareerForm from '@/app/components/Career/CareerForm';
import CareerTable from '@/app/components/Career/CareerTable';

const CareerParent = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [events, setEventList] = useState([]);
  console.log(events, 'yyyyyyy'); // Corrected the name to setEventList
  const [allEvents, setAllEvents] = useState(); // Renamed setEvents to setAllEvents
  const [selectedEventId, setSelectedEventId] = useState(null);

  const fetchCareer = async (college, limit, page) => {
    try {
      setIsLoading(true);
      const params = new URLSearchParams({ college, limit, page });
      const response = await axios.get(`https://lnct-backend.vercel.app/api/v1/career/?college=LNCT&limit=5&page=1`);
      console.log(response.data.payload.data, "rrrrrrrrr");
      const eventData = response.data.payload.data;

      setEventList(eventData);
      console.log(events, "eeeeeeee");
    } catch (error) {
      console.error('Error fetching events:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (uuid) => {
    try {
      setIsLoading(true);
      await deleteCareer(uuid);
      fetchCareer('LNCT', 1, 2);
    } catch (error) {
      console.error('Error deleting news:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEdit = async (uuid) => {
    console.log(events);
    fetchCareer('LNCT', 1, 2);
    setSelectedEventId(uuid);
  };

  const handleFormSubmit = () => {
    fetchCareer('LNCT', 1, 2);
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
        await fetchCareer('LNCT', 1, 2);
      } catch (error) {
        console.error('Error fetching news:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="news-page">
      <CareerForm onFormSubmit={handleFormSubmit} events={events} selectedEventId={selectedEventId} />
      <CareerTable events={events} onDelete={handleDelete} onEdit={handleEdit} />
    </div>
  );
};

export default CareerParent;
