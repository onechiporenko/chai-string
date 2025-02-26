import { use, assert, expect, should } from "chai";
import chaiString from "../chai-string.js";

should();

const chai = use(chaiString);

describe("chai-string", () => {
  describe("#startsWith", () => {
    it("should return true", () => {
      const str = "abcdef",
        prefix = "abc";
      chai.string.startsWith(str, prefix).should.be.true;
    });

    it("should return false", () => {
      const str = "abcdef",
        prefix = "cba";
      chai.string.startsWith(str, prefix).should.be.false;
    });

    it("should return false (2)", () => {
      const str = "12abcdef",
        prefix = 12.0;
      chai.string.startsWith(str, prefix).should.be.false;
    });

    it("check that", () => {
      const obj = { foo: "hello world" };
      expect(obj).to.have.property("foo").that.startsWith("hello");
    });
  });

  describe("#startsWithIgnoreCase", () => {
    it("should return true", () => {
      const str = "AbCdef",
        prefix = "aBc";
      chai.string.startsWithIgnoreCase(str, prefix).should.be.true;
    });

    it("should return false", () => {
      const str = "abcdef",
        prefix = "cba";
      chai.string.startsWithIgnoreCase(str, prefix).should.be.false;
    });

    it("should return false (2)", () => {
      const str = "12abcdef",
        prefix = 12.0;
      chai.string.startsWithIgnoreCase(str, prefix).should.be.false;
    });

    it("check that", () => {
      const obj = { foo: "hElLo world" };
      expect(obj).to.have.property("foo").that.startsWithIgnoreCase("HellO");
    });
  });

  describe("#startWith", () => {
    it("should return true", () => {
      const str = "abcdef",
        prefix = "abc";
      str.should.startWith(prefix);
    });

    it("should return false", () => {
      const str = "abcdef",
        prefix = "cba";
      str.should.not.startWith(prefix);
    });

    it("should return false (2)", () => {
      const str = "12abcdef",
        prefix = 12.0;
      str.should.not.startWith(prefix);
      chai.string.startsWith(str, prefix).should.be.false;
    });
  });

  describe("#startWithIgnoreCase", () => {
    it("should return true", () => {
      const str = "AbCdef",
        prefix = "aBc";
      str.should.startWithIgnoreCase(prefix);
    });

    it("should return false", () => {
      const str = "abcdef",
        prefix = "cba";
      str.should.not.startWithIgnoreCase(prefix);
    });

    it("should return false (2)", () => {
      const str = "12abcdef",
        prefix = 12.0;
      str.should.not.startWithIgnoreCase(prefix);
      chai.string.startsWith(str, prefix).should.be.false;
    });
  });

  describe("#endsWith", () => {
    it("should return true", () => {
      const str = "abcdef",
        suffix = "def";
      chai.string.endsWith(str, suffix).should.be.true;
    });

    it("should return false", () => {
      const str = "abcdef",
        suffix = "fed";
      chai.string.endsWith(str, suffix).should.be.false;
    });

    it("should return false (2)", () => {
      const str = "abcdef12",
        suffix = 12.0;
      chai.string.endsWith(str, suffix).should.be.false;
    });
  });

  describe("#endsWithIgnoreCase", () => {
    it("should return true", () => {
      const str = "abcDeF",
        suffix = "dEf";
      chai.string.endsWithIgnoreCase(str, suffix).should.be.true;
    });

    it("should return false", () => {
      const str = "abcdef",
        suffix = "fed";
      chai.string.endsWithIgnoreCase(str, suffix).should.be.false;
    });

    it("should return false (2)", () => {
      const str = "abcdef12",
        suffix = 12.0;
      chai.string.endsWithIgnoreCase(str, suffix).should.be.false;
    });
  });

  describe("#endWith", () => {
    it("should return true", () => {
      const str = "abcdef",
        suffix = "def";
      str.should.endWith(suffix);
    });

    it("should return false", () => {
      const str = "abcdef",
        suffix = "fed";
      str.should.not.endWith(suffix);
    });

    it("should return false (2)", () => {
      const str = "abcdef12",
        suffix = 12.0;
      str.should.not.endsWith(suffix);
    });
  });

  describe("#endWithIgnoreCase", () => {
    it("should return true", () => {
      const str = "abcdEf",
        suffix = "DeF";
      str.should.endWithIgnoreCase(suffix);
    });

    it("should return false", () => {
      const str = "abcdef",
        suffix = "fed";
      str.should.not.endWithIgnoreCase(suffix);
    });

    it("should return false (2)", () => {
      const str = "abcdef12",
        suffix = 12.0;
      str.should.not.endWithIgnoreCase(suffix);
    });
  });

  describe("#equalIgnoreCase", () => {
    it("should return true", () => {
      const str1 = "abcdef",
        str2 = "AbCdEf";
      chai.string.equalIgnoreCase(str1, str2).should.be.true;
    });

    it("should return false", () => {
      const str1 = "abcdef",
        str2 = "aBDDD";
      chai.string.equalIgnoreCase(str1, str2).should.be.false;
    });

    it("should return false (2)", () => {
      const str1 = 12,
        str2 = "12";
      chai.string.equalIgnoreCase(str1, str2).should.be.false;
    });

    it("should return false (3)", () => {
      const str1 = "12",
        str2 = 12;
      chai.string.equalIgnoreCase(str1, str2).should.be.false;
    });
  });

  describe("#equalIgnoreSpaces", () => {
    it("should return true", () => {
      const str1 = "abcdef",
        str2 = "a\nb\tc\r d  ef";
      chai.string.equalIgnoreSpaces(str1, str2).should.be.true;
    });

    it("should return false", () => {
      const str1 = "abcdef",
        str2 = "a\nb\tc\r d  efg";
      chai.string.equalIgnoreSpaces(str1, str2).should.be.false;
    });

    it("should return false (2)", () => {
      chai.string.equalIgnoreSpaces("12", 12).should.be.false;
    });

    it("should return false (3)", () => {
      chai.string.equalIgnoreSpaces(12, "12").should.be.false;
    });
  });

  describe("#containIgnoreSpaces", () => {
    it("should return true", () => {
      const str1 = "1234abcdef56",
        str2 = "1234a\nb\tc\r d  ef56";
      chai.string.containIgnoreSpaces(str1, str2).should.be.true;
    });

    it("should return true (2)", () => {
      const str1 = "abcdef",
        str2 = "a\nb\tc\r d  ef";
      chai.string.containIgnoreSpaces(str1, str2).should.be.true;
    });

    it("should return false", () => {
      const str1 = "abdef",
        str2 = "a\nb\tc\r d  ef";
      chai.string.containIgnoreSpaces(str1, str2).should.be.false;
    });

    it("should return false (2)", () => {
      chai.string.containIgnoreSpaces("12", 12).should.be.false;
    });

    it("should return false (3)", () => {
      chai.string.containIgnoreSpaces(12, "12").should.be.false;
    });
  });

  describe("#containIgnoreCase", () => {
    it("should return true", () => {
      const str1 = "abcdef",
        str2 = "cDe";
      chai.string.containIgnoreCase(str1, str2).should.be.true;
    });

    it("should return true (2)", () => {
      "abcdef".should.containIgnoreCase("cDe");
    });

    it("should return true (3)", () => {
      const str1 = "abcdef",
        str2 = "AbCdeF";
      chai.string.containIgnoreCase(str1, str2).should.be.true;
    });

    it("should return false", () => {
      const str1 = "abcdef",
        str2 = "efg";
      chai.string.containIgnoreCase(str1, str2).should.be.false;
    });

    it("should return false (2)", () => {
      const str1 = "123",
        str2 = 123;
      chai.string.containIgnoreCase(str1, str2).should.be.false;
    });

    it("should return false (3)", () => {
      const str1 = "abcdef",
        str2 = "zabcd";
      chai.string.containIgnoreCase(str1, str2).should.be.false;
    });
  });

  describe("#singleLine", () => {
    it("should return true", () => {
      const str = "abcdef";
      chai.string.singleLine(str).should.be.true;
    });

    it("should return false", () => {
      const str = "abc\ndef";
      chai.string.singleLine(str).should.be.false;
    });

    it("should return false (2)", () => {
      chai.string.singleLine(12).should.be.false;
    });
  });

  describe("#reverseOf", () => {
    it("should return true", () => {
      const str1 = "abcdef",
        str2 = "fedcba";
      chai.string.reverseOf(str1, str2).should.be.true;
    });

    it("should return false", () => {
      const str1 = "abcdef",
        str2 = "aBDDD";
      chai.string.reverseOf(str1, str2).should.be.false;
    });

    it("should return false (2)", () => {
      chai.string.reverseOf("12", 12).should.be.false;
    });

    it("should return false (3)", () => {
      chai.string.reverseOf(12, "12").should.be.false;
    });
  });

  describe("#palindrome", () => {
    it("should return true", () => {
      const str = "abcba";
      chai.string.palindrome(str).should.be.true;
    });

    it("should return true (2)", () => {
      const str = "abccba";
      chai.string.palindrome(str).should.be.true;
    });

    it("should return true (3)", () => {
      const str = "";
      chai.string.palindrome(str).should.be.true;
    });

    it("should return false", () => {
      const str = "abcdef";
      chai.string.palindrome(str).should.be.false;
    });

    it("should return false (2)", () => {
      chai.string.palindrome(12).should.be.false;
    });
  });

  describe("#entriesCount", () => {
    it("should return true", () => {
      const str = "abcabd",
        substr = "ab",
        count = 2;
      chai.string.entriesCount(str, substr, count).should.be.true;
    });

    it("should return true (2)", () => {
      const str = "ababd",
        substr = "ab",
        count = 2;
      chai.string.entriesCount(str, substr, count).should.be.true;
    });

    it("should return true (3)", () => {
      const str = "abab",
        substr = "ab",
        count = 2;
      chai.string.entriesCount(str, substr, count).should.be.true;
    });

    it("should return true (4)", () => {
      const str = 12,
        substr = "ab",
        count = 0;
      chai.string.entriesCount(str, substr, count).should.be.true;
    });

    it("should return true (5)", () => {
      const str = "12",
        substr = 12,
        count = 0;
      chai.string.entriesCount(str, substr, count).should.be.true;
    });

    it("should return false ", () => {
      const str = "12",
        substr = 12,
        count = 1;
      chai.string.entriesCount(str, substr, count).should.be.false;
    });
  });

  describe("#indexOf", () => {
    it("should return true", () => {
      const str = "abcabd",
        substr = "ab",
        index = 0;
      chai.string.indexOf(str, substr, index).should.be.true;
    });

    it("should return true (2)", () => {
      const str = "abcabd",
        substr = "ca",
        index = 2;
      chai.string.indexOf(str, substr, index).should.be.true;
    });

    it("should return true (3)", () => {
      const str = "ababab",
        substr = "ba",
        index = 1;
      chai.string.indexOf(str, substr, index).should.be.true;
    });

    it("should return true (4)", () => {
      const str = "12",
        substr = 12,
        index = -1;
      chai.string.indexOf(str, substr, index).should.be.true;
    });

    it("should return true (5)", () => {
      const str = 12,
        substr = "12",
        index = -1;
      chai.string.indexOf(str, substr, index).should.be.true;
    });

    it("should return false", () => {
      const str = "abcaab",
        substr = "da",
        index = 1;
      chai.string.indexOf(str, substr, index).should.be.false;
    });

    it("should return false (2)", () => {
      const str = "12",
        substr = 12,
        index = 0;
      chai.string.indexOf(str, substr, index).should.be.false;
    });

    it("should return false (3)", () => {
      const str = 12,
        substr = "12",
        index = 0;
      chai.string.indexOf(str, substr, index).should.be.false;
    });
  });

  describe("tdd alias", () => {
    let str, str2;
    beforeEach(function () {
      str = "abcdef";
      str2 = "a\nb\tc\r d  ef";
    });

    it(".startsWith", () => {
      assert.startsWith(str, "abc");
    });

    it(".notStartsWith", () => {
      assert.notStartsWith(str, "cba");
    });

    it(".notStartsWith (2)", () => {
      assert.notStartsWith("12abc", 12.0);
    });

    it(".endsWith", () => {
      assert.endsWith(str, "def");
    });

    it(".notEndsWith", () => {
      assert.notEndsWith(str, "fed");
    });

    it(".notEndsWith (2)", () => {
      assert.notEndsWith("abc12", 12.0);
    });

    it(".equalIgnoreCase", () => {
      assert.equalIgnoreCase(str, "AbCdEf");
    });

    it(".notEqualIgnoreCase", () => {
      assert.notEqualIgnoreCase(str, "abDDD");
    });

    it(".notEqualIgnoreCase (2)", () => {
      assert.notEqualIgnoreCase("12", 12);
    });

    it(".notEqualIgnoreCase (3)", () => {
      assert.notEqualIgnoreCase(12, "12");
    });

    it(".equalIgnoreSpaces", () => {
      assert.equalIgnoreSpaces(str, str2);
    });

    it(".notEqualIgnoreSpaces", () => {
      assert.notEqualIgnoreSpaces(str, str2 + "g");
    });

    it(".notEqualIgnoreSpaces (2)", () => {
      assert.notEqualIgnoreSpaces("12", 12);
    });

    it(".notEqualIgnoreSpaces (3)", () => {
      assert.notEqualIgnoreSpaces(12, "12");
    });

    it(".containIgnoreSpaces", () => {
      assert.containIgnoreSpaces(str, str2);
    });

    it(".notContainIgnoreSpaces", () => {
      assert.notContainIgnoreSpaces(str, str2 + "g");
    });

    it(".singleLine", () => {
      assert.singleLine(str);
    });

    it(".notSingleLine", () => {
      assert.notSingleLine("abc\ndef");
    });

    it(".notSingleLine (2)", () => {
      assert.notSingleLine(12);
    });

    it(".reverseOf", () => {
      assert.reverseOf(str, "fedcba");
    });

    it(".notReverseOf", () => {
      assert.notReverseOf(str, "aaaaa");
    });

    it(".notReverseOf (2)", () => {
      assert.notReverseOf("12", 12);
    });

    it(".notReverseOf (3)", () => {
      assert.notReverseOf(12, "12");
    });

    it(".palindrome", () => {
      assert.palindrome("abcba");
      assert.palindrome("abccba");
      assert.palindrome("");
    });

    it(".notPalindrome", () => {
      assert.notPalindrome(str);
    });

    it(".notPalindrome (2)", () => {
      assert.notPalindrome(12);
    });

    it(".entriesCount", () => {
      assert.entriesCount("abcabd", "ab", 2);
      assert.entriesCount("ababd", "ab", 2);
      assert.entriesCount("abab", "ab", 2);
      assert.entriesCount("", "ab", 0);
      assert.entriesCount(12, "ab", 0);
      assert.entriesCount("12", 12, 0);
    });

    it(".indexOf", () => {
      assert.indexOf("abcabd", "ab", 0);
      assert.indexOf("abcabd", "ca", 2);
      assert.indexOf("ababab", "ba", 1);
      assert.indexOf("ababab", "ba", 1);
      assert.indexOf(12, "12", -1);
      assert.indexOf("12", 12, -1);
      expect("ababab").to.have.indexOf("ba", 1);
    });
  });
});
