import React from 'react';
import { create } from 'react-test-renderer';

import { Container } from '../src';

describe('<Container />', () => {
  it('renders with default styles', () => {
    const tree = create(<Container />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with default fluid styles', () => {
    const tree = create(<Container fluid />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
