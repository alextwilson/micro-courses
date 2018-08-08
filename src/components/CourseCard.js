import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import DialogButton from './DialogButton';

function CourseCard(props) {
  return (
    <div>
      <Card>
        <CardMedia
          style={{height: 0, paddingTop: '56.25%'}}
          image={ props.image }
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            { props.title }
          </Typography>
          <Typography component="p">
            { props.text }
          </Typography>
        </CardContent>
        <CardActions>
          <DialogButton />
        </CardActions>
      </Card>
    </div>
  );
}

export default CourseCard;
