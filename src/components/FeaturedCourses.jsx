import React from 'react';
import { styled } from '@mui/material/styles';
import { Container, Typography, Box, Grid, Card, CardActionArea, CardMedia, CardContent } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const FeaturedCoursesWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.grey[200],
  padding: theme.spacing(4, 0),
}));

const FeaturedCourses = ({courses}) => {
  const navigate = useNavigate();
  return (
    <FeaturedCoursesWrapper>
      <Container maxWidth="lg">
        <Box mb={4} textAlign="center">
          <Typography variant="h4" component="h2">
            Featured Courses
          </Typography>
        </Box>
        <Grid container spacing={4}>
          {courses?.map((course) => (
            <Grid item key={course.id} xs={12} md={4}>
              <Card>
                <CardActionArea onClick={() => navigate(`/courses/${course.id}`)}>
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
