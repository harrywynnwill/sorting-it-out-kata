var assert = require('assert');
describe('Rack', function() {
  describe('#balls()', function() {
    it('should initialize with an empty rack', function() {
      rack = Rack.new();
      assert.equal([],rack.balls());
    });
  });
});
