import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

function CourseCard() {
  return (
    <div className="CourseCard">
      <Card>
        <Typography variant='display1' align='center'>
          Micro Course
        </Typography>
      </Card>
    </div>
  );
}

export default CourseCard;
