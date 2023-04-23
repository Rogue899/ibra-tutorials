import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/common/Navbar';

const NavbarContainer = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/home');
  };

  return (
    <Navbar onHomeClick={handleHomeClick} />
  );
};

export default NavbarContainer;
