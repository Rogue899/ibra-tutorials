import React, { useState, useEffect } from 'react';
import { fetchCourses } from '../api';
import Courses from '../pages/Courses';

const CoursesContainer = () => {
  const [courses, setCourses] = useState([]);
  const [openFilter, setOpenFilter] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await fetchCourses();
        const updatedCourses = data.map(course => {
          return { ...course, image: `https://source.unsplash.com/random/400x300?sig=${course.id}` };
        });
        setCourses(updatedCourses);
      } catch (error) {
        console.error('Error fetching course:', error);
      }
    };
    fetchData();
  }, []);

  const handleDrawer = () => {
    console.log('here')
    setOpenFilter(prev => !prev);
  };

  console.log(openFilter)

  return <Courses courses={courses} open={openFilter} handleDrawer={handleDrawer} />;
};

export default CoursesContainer;