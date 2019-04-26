import React from 'react';
import { create } from 'react-test-renderer';
import { ThemeProvider } from 'emotion-theming';
import { customTheme } from './test-helpers';

import { Col } from '../src';

describe('<Col />', () => {
  it('renders with default styles', () => {
    const tree = create(<Col />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with no gutters when given a prop', () => {
    const tree = create(<Col noGutters />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with responsive styles', () => {
    const tree = create(<Col xs={12} sm={6} md={4} lg={3} xl={1} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with offset styles when given a prop', () => {
    const tree = create(
      <Col xsOffset={2} smOffset={6} mdOffset={4} lgOffset={3} xlOffset={1} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with order styles when given a prop', () => {
    const tree = create(
      <Col xsOrder="last" smOrder={6} mdOrder={4} lgOrder={3} xlOrder="first" />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with custom styles when given a custom theme', () => {
    const tree = create(
      <ThemeProvider theme={customTheme}>
        <Col xs={12} sm={6} md={4} lg={3} xl={1} />
      </ThemeProvider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
