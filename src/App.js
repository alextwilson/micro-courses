import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import CourseCard from './components/CourseCard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Typography variant='display2' align='center' gutterBottom>
          Micro Courses
        </Typography>
        <CourseCard text='Course content'/>
      </div>
    );
  }
}

export default App;
