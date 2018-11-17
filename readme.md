# One React Component: checkbox

<p align="center"><img width="150" src="https://cdn.rawgit.com/one-react/assets/master/logo%402x.png" alt="logo"></p>

[![TravisCI Build](https://img.shields.io/travis/one-react/checkbox.svg)](https://travis-ci.org/one-react/checkbox)
[![CircieCI Build](https://img.shields.io/circleci/project/github/one-react/checkbox.svg)](https://circleci.com/gh/one-react/checkbox)
[![Coverage](https://img.shields.io/codecov/c/github/one-react/checkbox.svg)](https://codecov.io/gh/one-react/checkbox) 
[![Version](https://img.shields.io/npm/v/or-checkbox.svg)](https://www.npmjs.com/package/or-checkbox)
[![Chat](https://img.shields.io/gitter/room/one-react-org/Lobby.svg)](https://gitter.im/one-react-org/Lobby)
[![License: MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Greenkeeper badge](https://badges.greenkeeper.io/one-react/checkbox.svg)](https://greenkeeper.io/) 

## Installation
```
// with npm
npm install or-checkbox

// with yarn
yarn add or-checkbox
```
## Usage
- Config webpack `sass-loader` if you are using webpack.

```js
// webpack.config.js
{
  test: /\.scss$/,
  use: [
    'style-loader',
    'css-loader',
    'sass-loader'
  ],
  include: [
    /node_modules\/or\-\w+/ //include or-components
  ]
}
```

## Basic Example

```jsx
import React, { PureComponent } from 'react'

import Button from 'or-button'
import { Checkbox } from 'or-checkbox'

export default class CheckboxExample extends PureComponent {
  state = {
    isChecked: false
  }

  render() {
    return (
      <div className="checkbox-example">
        <Checkbox
          className="hello"
          value="agree"
          isChecked={this.state.isChecked}
          onChange={this.handleOnChange}
        >
          Yes, I'd like to receive the latest news and event invites from
          OneReact!
        </Checkbox>
        <Button type="primary" onClick={this.handleSubmit}>
          Submit
        </Button>
      </div>
    )
  }

  handleOnChange = isChecked => {
    this.setState({
      isChecked
    })
  }

  handleSubmit = () => {
    if (!this.state.isChecked) {
      window.alert('请确保您仔细看了用户协议并勾选')
    }
  }
}

```

## API

Checkbox:

```ts
interface Props {
  /**
   * custom className
   **/
  className?: string

  /**
   * checkbox type
   * @default 'normal'
   **/
  type?: 'button'

  /**
   * value of the checkbox
   **/
  value: string

  /**
   * whether the checkbox is checked or not
   **/
  isChecked?: boolean

  /**
   * children of the checkbox
   **/
  children: any

  /**
   * callback triggered by click
   **/
  onChange?: (isChecked) => void
}
```

CheckboxGroup:

```ts
interface Props {
  /**
   * custom className
   **/
  className?: string

  /**
   * checkbox type
   * @default 'normal'
   **/
  type?: 'button'

  /**
   * checkbox group checked values
   **/
  values: string[]

  /**
   * checkbox group layouts horizontally or vertically
   * @default false
   **/
  horizontal?: boolean

  /**
   * callback triggered by click
   **/
  onChange?: (values) => void
}
```

## Customize Theme
**Customize in webpack**

The following variables in or-button can be overridden:

```scss
$or-checkbox-primary-color: $or-primary-color !default;

$or-checkbox-button-padding: $or-gap $or-gap * 3 !default;

$or-checkbox-border-radius: $or-border-radius-sm !default;
$or-checkbox-border-width: $or-border-width !default;
...
```
For more variables, see [here](https://github.com/one-react/checkbox/blob/master/src/styles.scss).

Alternatively, you can override variables from [or-theme](https://github.com/one-react/theme/blob/master/src/variables.scss) to keep all or-components in a unified theme style.

First you should create a `theme.scss` file to declare the variables you want to override.

Then use the [data](https://github.com/webpack-contrib/sass-loader#environment-variables)  option provided by `sass-loader` to override the default values of the variables.

We take a typical `webpack.config.js` file as example to customize it's sass-loader options.

```js
// webpack.config.js
{
  test: /\.scss$/,
  use: [
    'style-loader',
    'css-loader',
    {
      loader: 'sass-loader',
      options: {
        data: fs.readFileSync(path.resolve(__dirname, 'theme.scss')) // pass theme.scss to sass-loader
      }
    }
  ],
  include: [
    /node_modules\/or\-\w+/ //include or-components
  ]
}
```

## Demos and Docs
> powered by [storybook](https://storybook.js.org/)

[Click Here](https://one-react.github.io/checkbox)

## License

MIT &copy; foryuki
