import React from 'react';
import Grid from '@material-ui/core/Grid';
import CourseCard from './CourseCard';

function CoursesContainer() {
  const content = [
    {
      image: 'https://upload.wikimedia.org/wikipedia/commons/8/84/Robinson-5400.jpg',
      title: 'Geopolitics',
      text: 'Geopolitics is the study of the effects of geography (human and physical) on politics and international relations.',
      resources: [
        {
          id: 1,
          image: 'https://images.penguinrandomhouse.com/cover/9780812984804',
          description: "Asia's Cauldron: The South China Sea and the End of a Stable Pacific by Robert D. Kaplan is an excellent introduction to geopolitics. It is well written and concise, deals with contemporary subject matter, and focuses on a (relatively) small geographical area."
        },
        {
          id: 2,
          image: 'resource image',
          description: 'resource description'
        },
        {
          id: 3,
          image: 'resource image',
          description: 'resource description'
        }
      ]
    }
  ];

  return (
    <div>
      <Grid container spacing={24} justify="center">
        {content.map(course => (
          <Grid item xs={12} sm={6} lg={4} xl={3} style={{maxWidth: 345}} key={ course.title }>
            <CourseCard image={ course.image } title={ course.title } text={ course.text } resources={ course.resources }/>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default CoursesContainer;
