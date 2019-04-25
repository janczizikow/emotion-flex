import React from 'react';
import { create } from 'react-test-renderer';

import { Row } from '../src';

describe('<Row />', () => {
  it('renders with default styles', () => {
    const tree = create(<Row />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with no gutters when given a prop', () => {
    const tree = create(<Row noGutters />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
