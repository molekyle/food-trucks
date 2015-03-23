var assert = require("assert");
var utils = require("../string_utils");

describe('string_utils', function() {
	describe('#containsAny()', function(){
		it('contains examples', function() {
			var actual = utils.containsAny('Michael Laudrup', ['Laudrup']);
			assert.equal(true, actual, "2 1");

			actual = utils.containsAny('Maradona', ['Diego', 'Maradona']);
			assert.equal(true, actual, "1 2");
		})
		it('contains not example', function() {
			var actual = utils.containsAny('P', ['NP']);
			assert.equal(false, actual);
		})
		it('empty s', function() {
			var actual = utils.containsAny('', '');
			assert.equal(true, actual, "empty words");

			actual = utils.containsAny('', 'Uber');
			assert.equal(false, actual, "non-empty words");
		})
		it('empty words', function() {
			var actual = utils.containsAny('', '');
			assert.equal(true, actual, "empty s");

			actual = utils.containsAny('Uber', '');
			assert.equal(true, actual, "non-empty s");
		})
	})
})


