(function (test) {
  if (typeof require === "function"&& typeof exports === "object"&& typeof module === "object") {
    // NodeJS
    (function () {
      var chai = require('chai');
      chai.config.includeStack = true;
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

    describe('#startWith', function () {

      it('should return true', function () {
        var str = 'abcdef',
          prefix = 'abc';
        str.should.startWith(prefix);
      });

      it('should return false', function () {
        var str = 'abcdef',
          prefix = 'cba';
        str.should.not.startWith(prefix);
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

    describe('#endWith', function () {

      it('should return true', function () {
        var str = 'abcdef',
          suffix = 'def';
        str.should.endWith(suffix);
      });

      it('should return false', function () {
        var str = 'abcdef',
          suffix = 'fed';
        str.should.not.endWith(suffix);
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

    describe('#singleLine', function() {

      it('should return true', function() {
        var str = 'abcdef';
        chai.string.singleLine(str).should.be.true;
      });

      it('should return false', function() {
        var str = "abc\ndef";
        chai.string.singleLine(str).should.be.false;
      });

    });

    describe('#reverseOf', function() {

      it('should return true', function () {
        var str1 = 'abcdef',
          str2 = 'fedcba';
        chai.string.reverseOf(str1, str2).should.be.true;
      });

      it('should return false', function () {
        var str1 = 'abcdef',
          str2 = 'aBDDD';
        chai.string.reverseOf(str1, str2).should.be.false;
      });

    });

    describe('#palindrome', function() {

      it('should return true', function() {
        var str = 'abcba';
        chai.string.palindrome(str).should.be.true;
      });

      it('should return true (2)', function() {
        var str = 'abccba';
        chai.string.palindrome(str).should.be.true;
      });

      it('should return true (3)', function() {
        var str = '';
        chai.string.palindrome(str).should.be.true;
      });

      it('should return false', function() {
        var str = 'abcdef';
        chai.string.palindrome(str).should.be.false;
      });

    });

    describe('#entriesCount', function() {

      it('should return true', function() {
        var str = 'abcabd',
          substr = 'ab',
          count = 2;
        chai.string.entriesCount(str, substr, count).should.be.true;
      });

      it('should return true (2)', function() {
        var str = 'ababd',
          substr = 'ab',
          count = 2;
        chai.string.entriesCount(str, substr, count).should.be.true;
      });

      it('should return true (3)', function() {
        var str = 'abab',
          substr = 'ab',
          count = 2;
        chai.string.entriesCount(str, substr, count).should.be.true;
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

      it('.singleLine', function() {
        assert.singleLine(this.str);
      });

      it('.notSingleLine', function() {
        assert.notSingleLine("abc\ndef");
      });

      it('.reverseOf', function() {
        assert.reverseOf(this.str, 'fedcba');
      });

      it('.notReverseOf', function() {
        assert.notReverseOf(this.str, 'aaaaa');
      });

      it('.palindrome', function() {
        assert.palindrome('abcba');
        assert.palindrome('abccba');
        assert.palindrome('');
      });

      it('.notPalindrome', function() {
        assert.notPalindrome(this.str);
      });

      it('.entriesCount', function() {
        assert.entriesCount('abcabd', 'ab', 2);
        assert.entriesCount('ababd', 'ab', 2);
        assert.entriesCount('abab', 'ab', 2);
        assert.entriesCount('', 'ab', 0);
      });

    });
  });
}));
