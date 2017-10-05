
<h1 align="center">svg-fallback</h1>
<div align="center">
  <strong>Image fallback for when SVG ain't a thing</strong>
</div>
<br>
<div align="center">
  <a href="https://npmjs.org/package/svg-fallback">
    <img src="https://img.shields.io/npm/v/svg-fallback.svg?style=flat-square" alt="npm package version" />
  </a>
  <a href="https://npmjs.org/package/svg-fallback">
  <img src="https://img.shields.io/npm/dm/svg-fallback.svg?style=flat-square" alt="npm downloads" />
  </a>
  <a href="https://github.com/feross/standard">
    <img src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square" alt="standard JS linter" />
  </a>
  <a href="https://github.com/prettier/prettier">
    <img src="https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=flat-square" alt="prettier code formatting" />
  </a>
  <a href="https://travis-ci.org/tiaanduplessis/svg-fallback">
    <img src="https://img.shields.io/travis/tiaanduplessis/svg-fallback.svg?style=flat-square" alt="travis ci build status" />
  </a>
  <a href="https://github.com/tiaanduplessis/svg-fallback/blob/master/LICENSE">
    <img src="https://img.shields.io/npm/l/svg-fallback.svg?style=flat-square" alt="project license" />
  </a>
  <a href="http://makeapullrequest.com">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="make a pull request" />
  </a>
</div>
<br>
<div align="center">
  <a href="https://github.com/tiaanduplessis/svg-fallback/watchers">
    <img src="https://img.shields.io/github/watchers/tiaanduplessis/svg-fallback.svg?style=social" alt="Github Watch Badge" />
  </a>
  <a href="https://github.com/tiaanduplessis/svg-fallback/stargazers">
    <img src="https://img.shields.io/github/stars/tiaanduplessis/svg-fallback.svg?style=social" alt="Github Star Badge" />
  </a>
  <a href="https://twitter.com/intent/tweet?text=Check%20out%20svg-fallback!%20https://github.com/tiaanduplessis/svg-fallback%20%F0%9F%91%8D">
    <img src="https://img.shields.io/twitter/url/https/github.com/tiaanduplessis/svg-fallback.svg?style=social" alt="Tweet" />
  </a>
</div>
<br>
<div align="center">
  Built with ❤︎ by <a href="https://github.com/tiaanduplessis">tiaanduplessis</a> and <a href="https://github.com/tiaanduplessis/svg-fallback/contributors">contributors</a>
</div>

<h2>Table of Contents</h2>
<details>
  <summary>Table of Contents</summary>
  <li><a href="#install">Install</a></li>
  <li><a href="#usage">Usage</a></li>
  <li><a href="#contribute">Contribute</a></li>
  <li><a href="#license">License</a></li>
</details>

## Install

[![Greenkeeper badge](https://badges.greenkeeper.io/tiaanduplessis/svg-fallback.svg)](https://greenkeeper.io/)

```sh
$ npm install svg-fallback
# OR
$ yarn add svg-fallback
```

## Usage

```js
import svgFallback from 'svg-fallback'

svgFallback({
    type: 'png', // Type of image to replace with. Should have the same name as the svg and be in the same directory
    ignore: '', // Element with this class name will be ignored
    dev: true // If true, will always replace svg. Used for dev
})

```

See a example [here](example).

## Contributing

Contributions are welcome!

1. Fork it.
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

Or open up [a issue](https://github.com/tiaanduplessis/svg-fallback/issues).

## License

Licensed under the MIT License.
