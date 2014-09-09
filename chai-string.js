(function (plugin) {
  if (typeof require === "function" && typeof exports === "object" && typeof module === "object") {
    // NodeJS
    module.exports = plugin;
  }
  else {
    if (typeof define === "function" && define.amd) {
      // AMD
      define(function () {
        return plugin;
      });
    }
    else {
      // Other environment (usually <script> tag): plug in to global chai instance directly.
      chai.use(plugin);
    }
  }
}(function (chai, utils) {
  chai.string = chai.string || {};


  chai.string.startsWith = function (str, prefix) {
    return str.indexOf(prefix) === 0;
  };

  chai.string.endsWith = function (str, suffix) {
    return str.indexOf(suffix, str.length - suffix.length) !== -1;
  };

  chai.string.equalIgnoreCase = function (str1, str2) {
    return str1.toLowerCase() === str2.toLowerCase();
  };

  chai.string.singleLine = function(str) {
    return str.trim().indexOf("\n") === -1;
  };

  chai.string.reverseOf = function(str, reversed) {
    return str.split('').reverse().join('') === reversed;
  };

  chai.string.palindrome = function(str) {
    var len = str.length;
    for ( var i = 0; i < Math.floor(len/2); i++ ) {
      if (str[i] !== str[len - 1 - i]) {
        return false;
      }
    }
    return true;
  };

  chai.Assertion.addChainableMethod('startsWith', function (expected) {
    var actual = this._obj;

    return this.assert(
      chai.string.startsWith(actual, expected),
      'expected ' + this._obj + ' to starts with ' + expected,
      'expected ' + this._obj + ' to not starts with ' + expected
    );
  });

  chai.Assertion.addChainableMethod('endsWith', function (expected) {
    var actual = this._obj;

    return this.assert(
      chai.string.endsWith(actual, expected),
      'expected ' + this._obj + ' to ends with ' + expected,
      'expected ' + this._obj + ' to not ends with ' + expected
    );
  });

  chai.Assertion.addChainableMethod('equalIgnoreCase', function (expected) {
    var actual = this._obj;

    return this.assert(
      chai.string.equalIgnoreCase(actual, expected),
      'expected ' + this._obj + ' to be equal to ' + expected + ' ignoring case',
      'expected ' + this._obj + ' to be not equal to ' + expected + ' ignoring case'
    );
  });

  chai.Assertion.addChainableMethod('singleLine', function () {
    var actual = this._obj;

    return this.assert(
      chai.string.singleLine(actual),
      'expected ' + this._obj + ' to be single line',
      'expected ' + this._obj + ' to be not single line'
    );
  });

  chai.Assertion.addChainableMethod('reverseOf', function(expected) {
    var actual = this._obj;

    return this.assert(
      chai.string.reverseOf(actual, expected),
      'expected ' + this._obj + ' to be reverse of ' + expected,
      'expected ' + this._obj + ' to be not reverse of ' + expected
    );
  });

  chai.Assertion.addChainableMethod('palindrome', function () {
    var actual = this._obj;

    return this.assert(
      chai.string.palindrome(actual),
      'expected ' + this._obj + ' to be palindrome',
      'expected ' + this._obj + ' to be not palindrome'
    );
  });


  // Asserts
  var assert = chai.assert;

  assert.startsWith = function (val, exp, msg) {
    new chai.Assertion(val, msg).to.startsWith(exp);
  };

  assert.notStartsWith = function (val, exp, msg) {
    new chai.Assertion(val, msg).to.not.startsWith(exp);
  };

  assert.endsWith = function (val, exp, msg) {
    new chai.Assertion(val, msg).to.endsWith(exp);
  };

  assert.notEndsWith = function (val, exp, msg) {
    new chai.Assertion(val, msg).to.not.endsWith(exp);
  };

  assert.equalIgnoreCase = function (val, exp, msg) {
    new chai.Assertion(val, msg).to.be.equalIgnoreCase(exp);
  };

  assert.notEqualIgnoreCase = function (val, exp, msg) {
    new chai.Assertion(val, msg).to.not.be.equalIgnoreCase(exp);
  };

  assert.singleLine = function(val, exp, msg) {
    new chai.Assertion(val, msg).to.be.singleLine();
  };

  assert.notSingleLine = function(val, exp, msg) {
    new chai.Assertion(val, msg).to.not.be.singleLine();
  };

  assert.reverseOf = function(val, exp, msg) {
    new chai.Assertion(val, msg).to.be.reverseOf(exp);
  };

  assert.notReverseOf = function(val, exp, msg) {
    new chai.Assertion(val, msg).to.not.be.reverseOf(exp);
  };

  assert.palindrome = function(val, exp, msg) {
    new chai.Assertion(val, msg).to.be.palindrome();
  };

  assert.notPalindrome = function(val, exp, msg) {
    new chai.Assertion(val, msg).to.not.be.palindrome();
  };

}));