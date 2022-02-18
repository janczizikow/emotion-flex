# emotion-flex

>

[![Build Status](https://img.shields.io/travis/janczizikow/emotion-flex.svg?style=flat-square)](https://travis-ci.org/janczizikow/emotion-flex)
[![Coverage Status](https://img.shields.io/coveralls/github/janczizikow/emotion-flex/master.svg?style=flat-square)](https://coveralls.io/github/janczizikow/emotion-flex?branch=master)
[![NPM](https://img.shields.io/npm/v/emotion-flex.svg?style=flat-square)](https://www.npmjs.com/package/emotion-flex)
[![MIT License](https://img.shields.io/npm/l/downshift.svg?style=flat-square)](https://github.com/janczizikow/emotion-flex/blob/master/LICENSE)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)


Fully customizable responsive grid system build with [emotion](https://emotion.sh/), based on [Bootstrap](https://getbootstrap.com/).

## Install

> **⚠ WARNING**
> For emotion 10 use v1.x.x of emotion-flex

```bash
npm i --save emotion-flex @emotion/react @emotion/styled

# or

yarn add emotion-flex @emotion/react @emotion/styled
```

## Usage

> Bootstrap is developed mobile first, a strategy in which we optimize code for mobile devices first and then scale up components as necessary using CSS media queries. To ensure proper rendering and touch zooming for all devices, *add the responsive viewport meta tag* to your `<head>`.
> *from [Bootstrap docs](https://getbootstrap.com/docs/4.3/getting-started/introduction/#responsive-meta-tag)*

```html
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
```

Make sure you reset box-sizing somewhere in global styles:

```css
*,
*::before,
*::after {
  box-sizing: inherit;
}

html {
  box-sizing: border-box;
}
```

```jsx
import React, { Component } from 'react'

import { Container, Row, Col } from 'emotion-flex'

class Example extends Component {
  render () {
    return (
      <Container>
        <Row>
          <Col xs={12} sm={6} md={4} lg={3}>1st column</Col>
          <Col xs={12} sm={6} md={4} lg={3}>2nd column</Col>
        </Row>
      </Container>
    )
  }
}
```

## API

### Container

| props | type    | description                                                 |
| ----- | ------- | ----------------------------------------------------------- |
| fluid | boolean | Equivalent to Bootstrap's `container` and `container-fluid` |


### Row

| props     | type    | description                   |
| --------- | ------- | ----------------------------- |
| noGutters | boolean | Remove Row's negative margins |

### Col

| props     | type                        | description                                            |
| --------- | --------------------------- | ------------------------------------------------------ |
| noGutters | boolean                     | Removes the padding around Column                      |
| xsOffset  | number (2-11)               | The number of columns to offset on extra small devices |
| xsOrder   | number or "first" or "last" | Sets the order on extra small devices                  |
| xs        | number (1-12)               | The number of columns to span on extra small devices   |
| smOffset  | number (2-11)               | The number of columns to offset on small devices       |
| smOrder   | number or "first" or "last" | Sets the order on small devices                        |
| sm        | number (1-12)               | The number of columns to span on small devices         |
| mdOffset  | number (2-11)               | The number of columns to offset on medium devices      |
| mdOrder   | number or "first" or "last" | Sets the order on medium devices                       |
| md        | number (1-12)               | The number of columns to span on medium devices        |
| lgOffset  | number (2-11)               | The number of columns to offset on large devices       |
| lgOrder   | number or "first" or "last" | Sets the order on large devices                        |
| lg        | number (1-12)               | The number of columns to span on large devices         |
| xlOffset  | number (2-11)               | The number of columns to offset on extra large devices |
| xlOrder   | number or "first" or "last" | Sets the order on extra large devices                  |
| xl        | number (1-12)               | The number of columns to span on extra large devices   |

## Theming

```jsx
import React, { Component } from 'react'
import { ThemeProvider } from '@emotion/react'

import { Container, Row, Col } from 'emotion-flex'

const customTheme = {
  breakpoints: {
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
  },
  maxWidths: {
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
  },
  gutters: 16
};

class Example extends Component {
  render () {
    return (
      <ThemeProvider theme={customTheme}>
        <Container>
          <Row>
            <Col xs={12} sm={6} md={4} lg={3}>1st column</Col>
            <Col xs={12} sm={6} md={4} lg={3}>2nd column</Col>
          </Row>
        </Container>
      </ThemeProvider>
    )
  }
}
```

Default theme:

```js
{
  breakpoints: {
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
  },
  maxWidths: {
    sm: 540,
    md: 720,
    lg: 960,
    xl: 1140,
  },
  gutters: 15,
}
```

## Other projects

- [Rebass](https://github.com/rebassjs/rebass)
- [react-grid](https://github.com/wangzuo/react-grid)
- [react-flexbox-grid](https://github.com/roylee0704/react-flexbox-grid)
- [react-styled-flexboxgrid](https://github.com/LoicMahieu/react-styled-flexboxgrid)
- [styled-bootstrap-grid](https://github.com/dragma/styled-bootstrap-grid)

## License

MIT © [janczizikow](https://github.com/janczizikow)