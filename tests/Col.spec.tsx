import React from 'react';
import { create } from 'react-test-renderer';

import { Col } from '../src';

describe('<Col />', () => {
  it('renders with default styles', () => {
    const tree = create(<Col />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with responsive styles', () => {
    const tree = create(<Col xs={12} sm={6} md={4} lg={3} xl={1} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
