# has-strict-mode <sup>[![Version Badge][npm-version-svg]][package-url]</sup>

[![github actions][actions-image]][actions-url]
[![coverage][codecov-image]][codecov-url]
[![dependency status][deps-svg]][deps-url]
[![dev dependency status][dev-deps-svg]][dev-deps-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][package-url]

Does the current JS environment have strict mode? ES5+ should; but let's not assume.

## Example

```js
var hasStrictMode = require('has-strict-mode');
var assert = require('assert');

assert.equal(hasStrictMode(), true); // will be `false` in IE 6-8
```

## Tests
Simply clone the repo, `npm install`, and run `npm test`

[package-url]: https://npmjs.org/package/has-strict-mode
[npm-version-svg]: https://versionbadg.es/inspect-js/has-strict-mode.svg
[deps-svg]: https://david-dm.org/inspect-js/has-strict-mode.svg
[deps-url]: https://david-dm.org/inspect-js/has-strict-mode
[dev-deps-svg]: https://david-dm.org/inspect-js/has-strict-mode/dev-status.svg
[dev-deps-url]: https://david-dm.org/inspect-js/has-strict-mode#info=devDependencies
[npm-badge-png]: https://nodei.co/npm/has-strict-mode.png?downloads=true&stars=true
[license-image]: https://img.shields.io/npm/l/has-strict-mode.svg
[license-url]: LICENSE
[downloads-image]: https://img.shields.io/npm/dm/has-strict-mode.svg
[downloads-url]: https://npm-stat.com/charts.html?package=has-strict-mode
[codecov-image]: https://codecov.io/gh/inspect-js/has-strict-mode/branch/main/graphs/badge.svg
[codecov-url]: https://app.codecov.io/gh/inspect-js/has-strict-mode/
[actions-image]: https://img.shields.io/endpoint?url=https://github-actions-badge-u3jn4tfpocch.runkit.sh/inspect-js/has-strict-mode
[actions-url]: https://github.com/inspect-js/has-strict-mode/actions
