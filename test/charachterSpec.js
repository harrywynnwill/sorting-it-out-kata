var assert = require('assert');
Character = require('../src/character.js');

describe('Character', function() {

var character = new Character();

  beforeEach(function() {
    character = new Character();
  });

  describe('#spliter()', function() {
    it('should return a string with spaces removed', function() {
      let string = "When not studying nuclear physics, Bambi likes to play beach volleyball.";
      let splitString = "aaaaabbbbcccdeeeeeghhhiiiiklllllllmnnnnooopprsssstttuuvwyyyy";
      assert.equal(character.splitter(string), splitString);
    });
  });
});
