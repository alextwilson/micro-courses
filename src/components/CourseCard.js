import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

function CourseCard() {
  return (
    <div>
      <Card>
        <CardContent>
          <Typography variant='display1' align='center'>
            Micro Course Content
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default CourseCard;
