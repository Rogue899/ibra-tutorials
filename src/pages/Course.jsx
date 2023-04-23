import React from 'react';
import CoursePage from '../components/CoursePage';

const Course = ({ match }) => {
  const courseId = match.params.courseId;

  return (
    <>
      <CoursePage courseId={courseId} />
    </>
  );
};

export default Course;