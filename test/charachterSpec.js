var assert = require('assert');
Character = require('../src/character.js');
var sinon = require('sinon');
var chai = require('chai');

var sinonChai = require("sinon-chai");

chai.use(sinonChai);
var expect = chai.expect;

describe('Character', function() {


	beforeEach(function() {
		let character = new Character();

	});

	describe("#_stringFormatter()", function() {
		it("formats the string and returns an array", function() {
	    let character = new Character();
      let string = "This is a test!";
      let splitString = ["t","h","i","s","i","s","a","t","e","s","t"];
			assert.deepEqual(character._stringFormatter(string), splitString);
		});
	});

	describe('#spliter()', function() {
		it('returns the sorted string without spaces or punctuation', function() {
      let sort = new Sort();
      let character = new Character(sort);
      let stub = sinon.stub(sort, 'insertionSort');
      stub.returns(["t121212"]);
      let string = "This is a test!";
      let splitString = ["t","h","i","s","i","s","a","t","e","s","t"];
      // character.splitter(string)
      // expect(sort.insertionSort).to.have.been.calledWith(splitString);
      assert.equal(character.splitter(string), "thisisatest")
		});
	});
});
