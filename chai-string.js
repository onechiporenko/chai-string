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

  chai.string.isSingleLine = function(str) {
    return str.trim().indexOf("\n") === -1;
  };

  chai.Assertion.addChainableMethod('startsWith', function (expected) {
    var actual = this._obj;

    return this.assert(
      chai.string.startsWith(actual, expected),
      'expected ' + this._obj + ' to starts with ' + expected,
      'expected ' + this._obj + ' to not starts with ' + expected,
      expected.toString(),
      actual.toString()
    );
  });

  chai.Assertion.addChainableMethod('endsWith', function (expected) {
    var actual = this._obj;

    return this.assert(
      chai.string.endsWith(actual, expected),
      'expected ' + this._obj + ' to ends with ' + expected,
      'expected ' + this._obj + ' to not ends with ' + expected,
      expected.toString(),
      actual.toString()
    );
  });

  chai.Assertion.addChainableMethod('equalIgnoreCase', function (expected) {
    var actual = this._obj;

    return this.assert(
      chai.string.equalIgnoreCase(actual, expected),
      'expected ' + this._obj + ' to be equal to ' + expected + ' ignoring case',
      'expected ' + this._obj + ' to be not equal to ' + expected + ' ignoring case',
      expected.toString(),
      actual.toString()
    );
  });

  chai.Assertion.addChainableMethod('isSingleLine', function () {
    var actual = this._obj;

    return this.assert(
      chai.string.isSingleLine(actual),
      'expected ' + this._obj + ' to be single line',
      'expected ' + this._obj + ' to be not single line',
      actual.toString()
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

  assert.isSingleLine = function(val, exp, msg) {
    new chai.Assertion(val, msg).to.be.isSingleLine();
  };

  assert.notIsSingleLine = function(val, exp, msg) {
    new chai.Assertion(val, msg).to.not.be.isSingleLine();
  };

}));