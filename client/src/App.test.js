import React from 'react';
import App from './App';
import {render} from '@testing-library/react';

test ('Renders without crashing: ', ()=> {
  render(<App/>);
});

test ('Countr is found: ', ()=> {
  const {getByText} = render(<App />);
  getByText(/country/i);
});

// test ('Renders without crashing: ', ()=> {
//   render(<App/>);
// });

// test ('Renders without crashing: ', ()=> {
//   render(<App/>);
// });

