var FILL_ME_IN = 'Fill this value in';

/*
describe('Introduction to Mocha Tests - READ ME FIRST', function() {
  // A Mocha test is just a function!
  // If the function throws an error when run, it fails.
  // If it doesn't throw an error when run, it doesn't fail.
  // To read more about mocha, visit mochajs.org

  // Once you've read and understood this section, please comment it out.
  // You will not be able to proceed with a failing test.

  it('Throws an error so it fails', function() {
    throw new Error('Delete me!');
  });

  it('Doesn\'t throw an error, so it doesn\'t fail', function() {
    // This test doesn't really test anything at all! It will pass no matter what.
    var even = function(num){
      return num % 2 === 0;
    }
    return even(10) === true;
  });

  // In tests, we want to compare the expected behavior to the actual behavior.
  // A test should only fail if the expected behavior doesn't match the actual.
  it('Throws an error when expected behavior does not match actual behavior', function() {
    var even = function(num){
      return num % 2 === 0;
    }

    if(even(10) !== true) {
      throw new Error('10 should be even!');
    }
  });
});
*/

function getNumString(charLength) {
  var longNumString = '123456789012345678901234567890';
  return longNumString.slice(0,charLength);
}

describe('Diner\'s Club', function() {
  // Be careful, tests can have bugs too...
  var should = chai.should();

  it('has a prefix of 38 and a length of 14', function() {
    detectNetwork('38345678901234').should.equal('Diner\'s Club');
  });

  it('has a prefix of 39 and a length of 14', function() {
    detectNetwork('39345678901234').should.equal('Diner\'s Club');
  });
});

describe('American Express', function() {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true.
  var should = chai.should();
  var assert = function(isTrue) {
    if(!isTrue) {
      throw new Error('Test failed');
    }

  };

  it('has a prefix of 34 and a length of 15', function() {
    detectNetwork('343456789012345').should.equal('American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    detectNetwork('373456789012345').should.equal('American Express');
  });
});

describe('Visa', function() {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it.
  //   http://chaijs.com/
  var assert = chai.assert;
  var should = chai.should();

  it('has a prefix of 4 and a length of 13', function() {
    detectNetwork('4123456789012').should.equal('Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    detectNetwork('4123456789012345').should.equal('Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    detectNetwork('4123456789012345678').should.equal('Visa');
  });
});

describe('MasterCard', function() {
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others.
  // If you want to know more, check out the documentation.
  //   http://chaijs.com/api/bdd/
  var expect = chai.expect;
  var should = chai.should();

  it('has a prefix of 51 and a length of 16', function() {
    detectNetwork('5112345678901234').should.equal('MasterCard');
  });
  it('has a prefix of 52 and a length of 16', function() {
    detectNetwork('5212345678901234').should.equal('MasterCard');
  });
  it('has a prefix of 53 and a length of 16', function() {
    detectNetwork('5312345678901234').should.equal('MasterCard');
  });
  it('has a prefix of 54 and a length of 16', function() {
    detectNetwork('5412345678901234').should.equal('MasterCard');
  });
  it('has a prefix of 55 and a length of 16', function() {
    detectNetwork('5512345678901234').should.equal('MasterCard');
  })
});

describe('Discover', function() {
  // Tests without a function will be marked as "pending" and not run
  // Implement these tests (and others) and make them pass!
  var should = chai.should();

  for (var prefix = 644; prefix <= 649; prefix++) {
    (function (prefix) {
      it('has a prefix of ' + prefix + ' and a length of 16', function () {
          detectNetwork(prefix + '1234567890123').should.equal('Discover');
        });
        it('has a prefix of ' + prefix + ' and a length of 19', function () {
          detectNetwork(prefix + '1234567890123456').should.equal('Discover');
        });
    }) (prefix)
  }

  it('has a prefix of 6011 and a length of 16', function () {
    detectNetwork('6011123456781234').should.equal('Discover');
  });
  it('has a prefix of 6011 and a length of 19', function () {
    detectNetwork('6011123456781234123').should.equal('Discover');
  });
  it('has a prefix of 644 and a length of 16', function () {
    detectNetwork('6441123456781234').should.equal('Discover');
  });
  it('has a prefix of 649 and a length of 19', function () {
    detectNetwork('6491123456781234123').should.equal('Discover');
  });
  it('has a prefix of 65 and a length of 16', function () {
    detectNetwork('6591123456781234').should.equal('Discover');
  });
  it('has a prefix of 65 and a length of 19', function () {
      detectNetwork('6591123456781234123').should.equal('Discover');
  });
});

describe('Maestro', function() {
  var expect=chai.expect;
  var should = chai.should();

  for (var cardLength = 12 - 4; cardLength <= 19 - 4; cardLength++) {
    (function (cardLength) {
      it('has a prefix of 5018 and a length of ' + (cardLength + 4), function() {
        detectNetwork(5018 + getNumString(cardLength)).should.equal('Maestro');
      });
    }) (cardLength)
  }
  for (var cardLength = 12 - 4; cardLength <= 19 - 4; cardLength++) {
    (function (cardLength) {
      it('has a prefix of 5020 and a length of ' + (cardLength + 4), function() {
        detectNetwork(5020 + getNumString(cardLength)).should.equal('Maestro');
      });
    }) (cardLength)
  }
  for (var cardLength = 12 - 4; cardLength <= 19 - 4; cardLength++) {
    (function (cardLength) {
      it('has a prefix of 5038 and a length of ' + (cardLength + 4), function() {
        detectNetwork(5038 + getNumString(cardLength)).should.equal('Maestro');
      });
    }) (cardLength)
  }
  for (var cardLength = 12 - 4; cardLength <= 19 - 4; cardLength++) {
    (function (cardLength) {
      it('has a prefix of 6304 and a length of ' + (cardLength + 4), function() {
        detectNetwork(6304 + getNumString(cardLength)).should.equal('Maestro');
      });
    }) (cardLength)
  }
});

describe('should support China UnionPay', function () {
  var should = chai.should();
  twoDimTest(622126, 622925, 16, 19, 'China UnionPay');
});

/* something wrong in this function with the character types of prefix */
function twoDimTest(startPre, endPre, shortLength, longLength, cardType) {
  var should = chai.should();
  for (var prefix = startPre; prefix <= endPre; prefix++) {
    for (var cardLength = shortLength - prefix.toString().length; cardLength <= longLength - prefix.toString().length; cardLength++) {
      (function (cardLength) {
        it('has a prefix of ' + prefix + ' and a length of ' + (cardLength + prefix.length), function () {
          detectNetwork(prefix + getNumString(cardLength)).should.equal(cardType);
        });
      }) (cardLength)
    }
  }
}

describe('should support Switch')
