import React from 'react';
import { makeStyles } from '@mui/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { Box, CardActionArea } from '@mui/material';
import Ratings from './common/Ratings';

const useStyles = makeStyles((theme) => ({
  card :{
    position: 'relative', // Move this property here to the root element instead of pseudo-element
    padding:theme.spacing(1, 0),
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: 0, // Remove left and set only bottom so that the divider spans the entire width of the container
      width: '100%',
      height: '2px',
      backgroundColor: '#1976d2',
    },
  },
  action: {
    display: 'flex !important',
    width: '100% important',
    // flexDirection: 'row',
    alignItems: 'center !important',
    // width:'100%',
    // justifyContent: 'space-between',
    padding: '8px !important',
  },
  media: {
    width: '25% !important',
    height: 'auto',
    // margin: '16px',
  },
  content: {
    // margin: '16px'
  },
  price: {
    display:'flex',
    justifyContent:'flex-end'
  },
}));

const CourseCard = ({ course }) => {
  const navigate = useNavigate();
  const classes = useStyles();

  return (
    <Card className={classes.card} elevation={0}>
      <CardActionArea className={classes.action} onClick={() => navigate(`/courses/${course.id}`)}>
        <Box style={{ display: 'flex' }} width='95%'>
          <CardMedia
            className={classes.media}
            component="img"
            image={course.image}
            alt={course.title}
          />
          <CardContent className={classes.content}>
            <Typography variant="h5" component="h2">
              {course.title}
            </Typography>
            <Typography variant="body1" component="p">
              {course.description}
            </Typography>
            <Typography variant="body2" component="p">
              {course.instructor}
            </Typography>
            <Typography variant="body2" component="p">
              <Ratings rating={course.rating} />
            </Typography>
          </CardContent>
        </Box>
        <Box  className={classes.price} width='5%'>
          <Typography variant="h6" component="h3">
            {course.price}
          </Typography>
        </Box>
      </CardActionArea>
    </Card>
  );
};

export default CourseCard;
