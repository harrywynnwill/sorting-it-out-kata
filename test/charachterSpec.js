var assert = require('assert');
Character = require('../src/character.js');

describe('Character', function() {


	beforeEach(function() {
		character = new Character();
	});

	describe("#_stringFormatter()", function() {
		it("formats the string and returns an array", function() {
			let string = "When not studying nuclear physics, Bambi likes to play beach volleyball.";
			let splitString = ["w","h","e","n","n","o","t","s","t","u","d","y","i","n","g","n","u","c",
      "l","e","a","r","p","h","y","s","i","c","s","b","a","m","b","i","l","i","k","e","s","t","o",
      "p","l","a","y","b","e","a","c","h","v","o","l","l","e","y","b","a","l","l"];

			assert.deepEqual(character._stringFormatter(string), splitString);

		});
	});

	xdescribe('#spliter()', function() {
		it('should return a string with spaces removed', function() {


		});
	});
});
