import React from 'react';
import { create } from 'react-test-renderer';
import { ThemeProvider } from '@emotion/react';
import { customTheme } from './test-helpers';

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

  it('renders with custom styles with custom theme', () => {
    const tree = create(
      <ThemeProvider theme={customTheme}>
        <Row />
      </ThemeProvider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
