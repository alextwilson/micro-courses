import React from 'react';
import Grid from '@material-ui/core/Grid';
import CourseCard from './CourseCard';

function CoursesContainer() {
  const content = [{image: 'https://upload.wikimedia.org/wikipedia/commons/8/84/Robinson-5400.jpg',
                    title: 'Geopolitics',
                    text: 'Geopolitics content'}];

  return (
    <div>
      <Grid container spacing={24} justify="center">
        {content.map(course => (
          <Grid item xs={12} sm={6} lg={4} xl={3} style={{maxWidth: 345}} key={ course.title }>
            <CourseCard image={ course.image } title={ course.title } text={ course.text }/>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default CoursesContainer;
