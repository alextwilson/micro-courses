import React from 'react';
import Grid from '@material-ui/core/Grid';
import CourseCard from './CourseCard';

function CoursesContainer() {
  return (
    <div>
      <Grid container spacing={24} justify="center">
        <Grid item xs={12} sm={6} lg={4} xl={3} style={{maxWidth: 345}}>
          <CourseCard image='https://upload.wikimedia.org/wikipedia/commons/8/84/Robinson-5400.jpg' title='Geopolitics' text='Geopolitics content'/>
        </Grid>
        <Grid item xs={12} sm={6} lg={4} xl={3} style={{maxWidth: 345}}>
          <CourseCard text='Course 2 content'/>
        </Grid>
        <Grid item xs={12} sm={6} lg={4} xl={3} style={{maxWidth: 345}}>
          <CourseCard text='Course 3 content'/>
        </Grid>
      </Grid>
    </div>
  );
}

export default CoursesContainer;
