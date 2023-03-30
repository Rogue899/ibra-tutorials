import React from 'react';
import { Typography, Button } from '@mui/material';
import HomePageContainer from '../components/HomePageContainer';
import Testimonials from '../components/Testimonials';
import FeaturedCourses from '../components/FeaturedCourses';
import Footer from '../components/common/Footer';
import NavBar from '../components/common/Navbar';

const HomePage = () => {
  return (
    <>
      <NavBar />
      <HomePageContainer>
        <Typography variant="h2">Welcome to My Tutoring Website</Typography>
        <Button variant="contained" color="primary">
          Explore Courses
        </Button>
      </HomePageContainer>
      <FeaturedCourses />
      <Testimonials />
      <Footer />
    </>
  );
};

export default HomePage;