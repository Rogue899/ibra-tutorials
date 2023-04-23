import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CoursePage from './components/CoursePage';
import Footer from './components/common/Footer';
import HomeContainer from './containers/HomeConainer';
import { ThemeProvider } from '@mui/styles';
import theme from './theme';
import './App.css';
import Container from './components/common/Container';
import NavbarContainer from './containers/NavbarContainer';
import CoursesContainer from './containers/CoursesContainer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
      <NavbarContainer />
        <Container>
          <Routes>
            <Route exact path="/courses/:courseId" element={<CoursePage />} />
            <Route exact path="/courses" element={<CoursesContainer />} />
            <Route exact path="/home" element={<HomeContainer />} />
            <Route exact path="/" element={<HomeContainer />} />
          </Routes>
        </Container>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;