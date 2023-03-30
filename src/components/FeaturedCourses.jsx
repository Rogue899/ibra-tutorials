import React from 'react';
import { styled } from '@mui/material/styles';
import { Container, Typography, Box, Grid, Card, CardActionArea, CardMedia, CardContent } from '@mui/material';

const courses = [
  {
    id: 1,
    title: 'Course 1',
    description: 'This is the first course',
    image: 'https://source.unsplash.com/random/400x300?sig=1',
  },
  {
    id: 2,
    title: 'Course 2',
    description: 'This is the second course',
    image: 'https://source.unsplash.com/random/400x300?sig=2',
  },
  {
    id: 3,
    title: 'Course 3',
    description: 'This is the third course',
    image: 'https://source.unsplash.com/random/400x300?sig=3',
  },
];

const FeaturedCoursesWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.grey[200],
  padding: theme.spacing(4, 0),
}));

const FeaturedCourses = () => {
  return (
    <FeaturedCoursesWrapper>
      <Container maxWidth="lg">
        <Box mb={4} textAlign="center">
          <Typography variant="h4" component="h2">
            Featured Courses
          </Typography>
        </Box>
        <Grid container spacing={4}>
          {courses.map((course) => (
            <Grid item key={course.id} xs={12} md={4}>
              <Card>
                <CardActionArea>
                  <CardMedia component="img" height="200" image={course.image} alt={course.title} />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h3">
                      {course.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      {course.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </FeaturedCoursesWrapper>
  );
};

export default FeaturedCourses;
