import React from 'react';

import renderer from 'react-test-renderer';

import App from '..';

describe('App Component Tests', () => {
  const component = renderer.create(<App />);

  test('renders App component', () => {
    expect(component.toJSON()).toMatchSnapshot();
  })
})
