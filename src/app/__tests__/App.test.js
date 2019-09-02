import React from 'react';

import renderer from 'react-test-renderer';

import App from '../App';

describe('App Component', () => {
  const component = renderer.create(<App />);

  test('renders App component', () => {
    expect(component.toJSON()).toMatchSnapshot();
  })
})
