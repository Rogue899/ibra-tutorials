import React, { useState, useEffect } from 'react';
import { fetchHomepageMessage } from '../api';
import HomePage from '../pages/HomePage';

const HomeContainer = () => {
  const [message, setMessage] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const messageData = await fetchHomepageMessage();
        setMessage(messageData.message);
      } catch (error) {
        console.error('Error fetching homepage message:', error);
      }
    };
    fetchData();
  }, []);

  return <HomePage message={message} />;
};

export default HomeContainer;