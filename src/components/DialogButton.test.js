import React from 'react';
import ReactDOM from 'react-dom';
import DialogButton from './DialogButton';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DialogButton course={{title: 'foo', resources: ['foo', 'bar']}}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
