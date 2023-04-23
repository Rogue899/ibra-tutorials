import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, Button } from '@mui/material';
import Testimonials from '../components/Testimonials';
import FeaturedCourses from '../components/FeaturedCourses';
import HomePageContainer from '../components/common/HomePageContainer';

const HomePage = ({ data }) => {
  const navigate = useNavigate();

  return (
    <HomePageContainer>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}>
        <Typography variant="h3">{data.home}</Typography>
        <Button variant="contained" color="primary" onClick={() => navigate('/courses')}>
          Explore Courses
        </Button>
      </div>
      <FeaturedCourses courses={data.courses} />
      <Testimonials />
    </HomePageContainer>
  );
};

export default HomePage;