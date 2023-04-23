import React, { useState, useEffect } from 'react';
import { fetchCourses, fetchHomepageMessage } from '../api';
import HomePage from '../pages/HomePage';

const HomeContainer = () => {
  const [message, setMessage] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const messageData = await fetchHomepageMessage();
        const {data} = await fetchCourses();
        const updatedCourses = data.slice(0, 3).map(course => {
          return { ...course, image: `https://source.unsplash.com/random/400x300?sig=${course.id}` };
        });
        setMessage({
          home:messageData.message,
          courses:updatedCourses
        });
      } catch (error) {
        console.error('Error fetching homepage message:', error);
      }
    };
    fetchData();
  }, []);

  return <HomePage data={message} />;
};

export default HomeContainer;