import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

function CourseCard(props) {
  return (
    <div>
      <Card>
        <CardContent>
          <Typography variant='display1' align='center'>
            { props.text }
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" variant='contained'>
            Learn More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default CourseCard;
