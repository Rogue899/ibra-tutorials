import React from 'react';
import {Paper, Grid, Typography, Divider, Button, Box } from '@mui/material';
import { AccessTime, StarRate } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const CoursePage = ({courseId}) => {
  const navigate = useNavigate();

    return (
        <Grid container spacing={2}>
          <Grid item xs={12}>
          <Button variant="contained" onClick={() =>  navigate(-1)}>
            Back
          </Button>
          <Typography variant="h5" component="h1" gutterBottom>
            Course {courseId}
          </Typography>
        </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1" gutterBottom>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in lacus eu sapien
              malesuada dictum at ut sapien. Integer sit amet metus a turpis aliquet dictum in
              eu risus. Fusce commodo vestibulum leo, at lobortis nisl luctus a.
            </Typography>
            <Box mt={2}>
              <Button variant="contained" color="primary">
                Enroll now
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper sx={{ padding: 2 }}>
              <Typography variant="subtitle1" gutterBottom>
                Course details:
              </Typography>
              <Divider />
              <Box mt={2}>
                <Typography variant="body2">
                  <AccessTime sx={{ mr: 0.5 }} />
                  2h 30m
                </Typography>
                <Typography variant="body2">
                  <StarRate sx={{ mr: 0.5 }} />
                  4.5 (125)
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      );
    };

export default CoursePage;
