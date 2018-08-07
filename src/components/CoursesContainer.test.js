import React from 'react';
import ReactDOM from 'react-dom';
import CoursesContainer from './CoursesContainer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CoursesContainer />, div);
  ReactDOM.unmountComponentAtNode(div);
});
