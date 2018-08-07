import React from 'react';
import Grid from '@material-ui/core/Grid';
import CourseCard from './CourseCard';

function CoursesContainer() {
  return (
    <div>
      <Grid container spacing={24} justify="center">
        <Grid item lg={4} xl={3}>
          <CourseCard text='Course 1 content'/>
        </Grid>
        <Grid item lg={4} xl={3}>
          <CourseCard text='Course 2 content'/>
        </Grid>
        <Grid item lg={4} xl={3}>
          <CourseCard text='Course 3 content'/>
        </Grid>
      </Grid>
    </div>
  );
}

export default CoursesContainer;
