import axios from 'axios';
const API_URL = 'http://localhost:3001';

export const fetchHomepageMessage = async () => {
  try {
    const response =  await axios.get(`${API_URL}/home`);
    return response.data;
  } catch (error) {
    console.error('Error fetching homepage message:', error);
    throw error;    
  }
};

export const fetchCourses = async () => {
  try {
    const response = await axios.get(`${API_URL}/courses`);
    return response;
  } catch (error) {
    console.error('Error fetching courses:', error);
    throw error;    
  }
};
