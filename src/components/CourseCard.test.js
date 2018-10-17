import React from 'react';
import ReactDOM from 'react-dom';
import CourseCard from './CourseCard';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CourseCard image={'foo'} title={'bar'} text={'baz'} resources= {['foo', 'bar']}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
