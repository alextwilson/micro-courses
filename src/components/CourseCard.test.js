import React from 'react';
import ReactDOM from 'react-dom';
import CourseCard from './CourseCard';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CourseCard />, div);
  ReactDOM.unmountComponentAtNode(div);
});
