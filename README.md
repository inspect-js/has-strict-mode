# has-strict-mode <sup>[![Version Badge][2]][1]</sup>

[![dependency status][5]][6]
[![dev dependency status][7]][8]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][11]][1]

Does the current JS environment have strict mode? ES5+ should; but let's not assume.

## Example

```js
var hasStrictMode = require('has-strict-mode');
var assert = require('assert');

assert.equal(hasStrictMode(), true); // will be `false` in IE 6-8
```

## Tests
Simply clone the repo, `npm install`, and run `npm test`

[1]: https://npmjs.org/package/has-strict-mode
[2]: https://versionbadg.es/inspect-js/has-strict-mode.svg
[5]: https://david-dm.org/inspect-js/has-strict-mode.svg
[6]: https://david-dm.org/inspect-js/has-strict-mode
[7]: https://david-dm.org/inspect-js/has-strict-mode/dev-status.svg
[8]: https://david-dm.org/inspect-js/has-strict-mode#info=devDependencies
[11]: https://nodei.co/npm/has-strict-mode.png?downloads=true&stars=true
[license-image]: https://img.shields.io/npm/l/has-strict-mode.svg
[license-url]: LICENSE
[downloads-image]: https://img.shields.io/npm/dm/has-strict-mode.svg
[downloads-url]: https://npm-stat.com/charts.html?package=has-strict-mode
