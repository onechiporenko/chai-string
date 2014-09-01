(function (test) {
  if (typeof require === "function"&& typeof exports === "object"&& typeof module === "object") {
    // NodeJS
    (function () {
      var chai = require('chai');
      chai.Assertion.includeStack = true;
      test(chai, true);
    }());
  }
  else {
    // Other environment (usually <script> tag): plug in to global chai instance directly.
    test(chai, false);
  }
}(function (chai, testingServer) {

  var should = chai.should();
  var assert = chai.assert;

  if (testingServer) {
    var chai_string = require('../chai-string');
    chai.use(chai_string);
  }

  chai.use(function (chai, utils) {

    var inspect = utils.objDisplay;

    chai.Assertion.addMethod('fail', function (message) {

      var obj = this._obj;
      new chai.Assertion(obj).is.a('function');

      try {
        obj();
      }
      catch (err) {
        this.assert(
          err instanceof chai.AssertionError,
          'expected #{this} to fail, but it threw ' + inspect(err)
        );
        this.assert(
          err.message === message,
          'expected #{this} to fail with ' + inspect(message) + ', but got ' + inspect(err.message)
        );
        return;
      }

      this.assert(false, 'expected #{this} to fail');
    });
  });

  describe('chai-string', function () {

    describe('#startsWith', function () {

      it('should return true', function () {
        var str = 'abcdef',
          prefix = 'abc';
        chai.string.startsWith(str, prefix).should.be.true;
      });

      it('should return false', function () {
        var str = 'abcdef',
          prefix = 'cba';
        chai.string.startsWith(str, prefix).should.be.false;
      });

    });

    describe('#endsWith', function () {

      it('should return true', function () {
        var str = 'abcdef',
          suffix = 'def';
        chai.string.endsWith(str, suffix).should.be.true;
      });

      it('should return false', function () {
        var str = 'abcdef',
          suffix = 'fed';
        chai.string.endsWith(str, suffix).should.be.false;
      });

    });

    describe('#equalIgnoreCase', function () {

      it('should return true', function () {
        var str1 = 'abcdef',
          str2 = 'AbCdEf';
        chai.string.equalIgnoreCase(str1, str2).should.be.true;
      });

      it('should return false', function () {
        var str1 = 'abcdef',
          str2 = 'aBDDD';
        chai.string.equalIgnoreCase(str1, str2).should.be.false;
      });

    });

    describe('#isSingleLine', function() {

      it('should return true', function() {
        var str = 'abcdef';
        chai.string.isSingleLine(str).should.be.true;
      });

      it('should return false', function() {
        var str = "abc\ndef";
        chai.string.isSingleLine(str).should.be.false;
      });

    });

    describe('tdd alias', function () {

      beforeEach(function () {
        this.str = 'abcdef';
      });

      it('.startsWith', function () {
        assert.startsWith(this.str, 'abc');
      });

      it('.notStartsWith', function () {
        assert.notStartsWith(this.str, 'cba');
      });

      it('.endsWith', function () {
        assert.endsWith(this.str, 'def');
      });

      it('.notEndsWith', function () {
        assert.notEndsWith(this.str, 'fed');
      });

      it('.equalIgnoreCase', function () {
        assert.equalIgnoreCase(this.str, 'AbCdEf');
      });

      it('.notEqualIgnoreCase', function () {
        assert.notEqualIgnoreCase(this.str, 'abDDD');
      });

      it('.isSingleLine', function() {
        assert.isSingleLine('abcdef');
      });

      it('.notIsSingleLine', function() {
        assert.notIsSingleLine("abc\ndef");
      });

    });
  });
}));