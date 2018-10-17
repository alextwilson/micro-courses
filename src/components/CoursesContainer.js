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
        }, {
          id: 2,
          image: 'https://upload.wikimedia.org/wikipedia/en/f/f6/The_Next_100_Years.jpg',
          description: "The Next 100 Years: A Forecast for the 21st Century is a book by George Friedman has a much wider scope, both geographically and chronologically. What makes it a particularly interesting study is seeing which of George Friedman's predictions have, and more importantly have not come to pass in the 9 years since this book's publication."
        }, {
          id: 3,
          image: 'https://upload.wikimedia.org/wikipedia/commons/9/90/The_Influence_of_Sea_Power_Upon_History.jpg',
          description: "The Influence of Sea Power Upon History: 1660–1783 by Alfred Thayer Mahan is widely considered the foundational work of geopolitics. Written in the late 19th century whilst Mahan was president of the US Naval War College, the book examines the usage of naval power by European and American navies, particularly how Great Britain's control of the sea allowed the growth and maintenance of the world's largest empire."
        }
      ]
    }
  ];

  return (
    <div>
      <Grid container spacing={24} justify="center">
        {content.map(course => (
          <Grid item xs={12} sm={6} lg={4} xl={3} style={{maxWidth: 345}} key={ course.title }>
            <CourseCard
              image={ course.image }
              title={ course.title }
              text={ course.text }
              resources={ course.resources }
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default CoursesContainer;
