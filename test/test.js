var assert = require('assert');
var serialize = require('..');

describe('Simple serialization', function () {
	it('should serialize object with <= 2 primitive values as is', function () {
		assert.equal(serialize({a: 1, b: 2}), '{a: 1, b: 2}');
	});

	it('should serialize 3 field object with a new line per field', function () {
		assert.equal(serialize({a: 1, b: 2, c: 3}), '{\n  a: 1,\n  b: 2,\n  c: 3\n}');
	});

	it('should wrap non-identifier keys into quotes', function () {
		assert.equal(serialize({a: 1, '"': 2, '-': 3}), '{\n  a: 1,\n  "\\"": 2,\n  "-": 3\n}');
	});

	it('should serialize array of non-objects into single line', function () {
		assert.equal(serialize([1, true, null, "x"]), '[1, true, null, "x"]');
	});

	it('should serialize array with one object keeping bracket and brace on the same line', function () {
		assert.equal(serialize([{a: 1, b: 2, c: 3}]), '[{\n  a: 1,\n  b: 2,\n  c: 3\n}]');
	});

	it('should produce separate lines for array of more than one object', function () {
	   assert.equal(serialize([{a: 1}, {b: 2}]), '[\n  {a: 1},\n  {b: 2}\n]');
	});
});

describe('Custom serialization', function () {
	describe('with forceJSON', function () {
		var options = {forceJSON: true};

		it('should wrap all the object keys with quotes', function () {
			assert.equal(serialize({a: 1}, options), '{"a": 1}');
		});

		it('should still optimize indentation', function () {
			assert.equal(serialize({a: 1, b: 2, c: 3}, options), '{\n  "a": 1,\n  "b": 2,\n  "c": 3\n}');
		});
	});

	describe('with initialIndent', function () {
		it('should affect base indentation', function () {
			assert.equal(serialize({a: 1, b: 2, c: 3}, {initialIndent: '    '}), '    {\n      a: 1,\n      b: 2,\n      c: 3\n    }');
		});
	});

	describe('with custom indent', function () {
		it('should generate given number of spaces', function () {
			assert.equal(serialize({a: 1, b: 2, c: 3}, {indent: 4}), '{\n    a: 1,\n    b: 2,\n    c: 3\n}');
		});

		it('should use given string', function () {
			assert.equal(serialize({a: 1, b: 2, c: 3}, {indent: '\t'}), '{\n\ta: 1,\n\tb: 2,\n\tc: 3\n}');
		});
	});
});