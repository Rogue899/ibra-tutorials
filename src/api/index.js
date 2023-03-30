import axios from 'axios';

export const fetchHomepageMessage = async () => {
  try {
    const response = await axios.get('http://localhost:3001');
    return response.data;
  } catch (error) {
    console.error('Error fetching homepage message:', error);
    throw error;    
  }
};