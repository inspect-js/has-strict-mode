'use strict';

var test = require('tape');

var hasStrictMode = require('../');

test('has strict mode', function (t) {
	t.equal(typeof hasStrictMode, 'function', 'is a function');

	t.equal(typeof hasStrictMode(), 'boolean', 'function returns a boolean');

	t.end();
});
