var memoarray = require('./index.js');
var expect = require('chai').expect;

describe('memoarray', function() {
  var flavorStrawberry = { taste: 'delicious' }
  var flavorPistachio = { taste: 'even better' }

  var kid = {
    currentlyConsumedIceCreamFlavors: undefined,
  }

  it('should return the array of flavors', function() {
    var makeIceCream = memoarray(kid, flavorStrawberry, flavorPistachio);

    expect(makeIceCream).to.be.an('array').that.includes([ flavorStrawberry, flavorPistachio ]);
  });

  it('should return the SAME array of flavors for subseq calls on the same O', function() {
    var makeIceCream = memoarray(kid, flavorStrawberry, flavorPistachio);
    var makeIceCream2 = memoarray(kid, flavorStrawberry, flavorPistachio);

    expect(makeIceCream).to.equal(makeIceCream2);
  });

  it('should throw error with invalid parameter', function() {
    expect(memoarray.bind(null, 1)).to.throw(TypeError);
  });
});
