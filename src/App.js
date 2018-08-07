import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import CoursesContainer from './components/CoursesContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Typography variant='display2' align='center' gutterBottom>
          Micro Courses
        </Typography>
        <CoursesContainer />
      </div>
    );
  }
}

export default App;
