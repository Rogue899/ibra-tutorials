import React from 'react';
import CourseCard from '../components/CourseCard';
import FilterPanel from '../components/courses-components/FilterPanel';
import FilterPanelHeading from '../components/courses-components/FilterPanelHeading';
import { styled } from '@mui/material/styles';

const CourseContainer = styled('span')({
    display: 'flex',
    padding: 20,
    gap: 20,
});

const Courses = ({ courses, open, handleDrawer }) => {
    return (
        <>
            <FilterPanelHeading open={open} handleDrawer={handleDrawer} results={courses.length} />
            <CourseContainer>
                <FilterPanel open={open} />
                <div>
                    {courses.map((course) => (
                        <CourseCard key={course.id} course={course} />
                    ))}
                </div>
            </CourseContainer>
        </>
    );
}

export default Courses;