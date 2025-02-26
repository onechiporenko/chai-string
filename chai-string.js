function chaiString(chai) {
  chai.string = chai.string || {};

  function isString(value) {
    return typeof value === "string";
  }

  chai.string.startsWith = function (str, prefix) {
    if (!isString(str) || !isString(prefix)) {
      return false;
    }
    return str.indexOf(prefix) === 0;
  };

  chai.string.startsWithIgnoreCase = function (str, prefix) {
    if (!isString(str) || !isString(prefix)) {
      return false;
    }
    return str.toLocaleLowerCase().indexOf(prefix.toLocaleLowerCase()) === 0;
  };

  chai.string.endsWith = function (str, suffix) {
    if (!isString(str) || !isString(suffix)) {
      return false;
    }
    return str.indexOf(suffix, str.length - suffix.length) !== -1;
  };

  chai.string.endsWithIgnoreCase = function (str, suffix) {
    if (!isString(str) || !isString(suffix)) {
      return false;
    }
    const strLower = str.toLocaleLowerCase();
    const suffixLower = suffix.toLocaleLowerCase();
    return (
      strLower.indexOf(suffixLower, strLower.length - suffixLower.length) !== -1
    );
  };

  chai.string.equalIgnoreCase = function (str1, str2) {
    if (!isString(str1) || !isString(str2)) {
      return false;
    }
    return str1.toLowerCase() === str2.toLowerCase();
  };

  chai.string.equalIgnoreSpaces = function (str1, str2) {
    if (!isString(str1) || !isString(str2)) {
      return false;
    }
    return str1.replace(/\s/g, "") === str2.replace(/\s/g, "");
  };

  chai.string.containIgnoreSpaces = function (str1, str2) {
    if (!isString(str1) || !isString(str2)) {
      return false;
    }
    return str1.replace(/\s/g, "").indexOf(str2.replace(/\s/g, "")) > -1;
  };

  chai.string.containIgnoreCase = function (str1, str2) {
    if (!isString(str1) || !isString(str2)) {
      return false;
    }
    return str1.toLowerCase().indexOf(str2.toLowerCase()) > -1;
  };

  chai.string.singleLine = function (str) {
    if (!isString(str)) {
      return false;
    }
    return str.trim().indexOf("\n") === -1;
  };

  chai.string.reverseOf = function (str, reversed) {
    if (!isString(str) || !isString(reversed)) {
      return false;
    }
    return str.split("").reverse().join("") === reversed;
  };

  chai.string.palindrome = function (str) {
    if (!isString(str)) {
      return false;
    }
    const len = str.length;
    for (let i = 0; i < Math.floor(len / 2); i++) {
      if (str[i] !== str[len - 1 - i]) {
        return false;
      }
    }
    return true;
  };

  chai.string.entriesCount = function (str, substr, count) {
    let matches = 0;
    if (isString(str) && isString(substr)) {
      let i = 0;
      const len = str.length;
      while (i < len) {
        const indx = str.indexOf(substr, i);
        if (indx === -1) {
          break;
        } else {
          matches++;
          i = indx + 1;
        }
      }
    }
    return matches === count;
  };

  chai.string.indexOf = function (str, substr, index) {
    const indx = !isString(str) || !isString(substr) ? -1 : str.indexOf(substr);
    return indx === index;
  };

  const startsWithMethodWrapper = function (expected) {
    const actual = this._obj;

    return this.assert(
      chai.string.startsWith(actual, expected),
      "expected " + this._obj + " to start with " + expected,
      "expected " + this._obj + " not to start with " + expected,
    );
  };

  chai.Assertion.addChainableMethod("startsWith", startsWithMethodWrapper);
  chai.Assertion.addChainableMethod("startWith", startsWithMethodWrapper);

  const startsWithIgnoreCaseMethodWrapper = function (expected) {
    const actual = this._obj;

    return this.assert(
      chai.string.startsWithIgnoreCase(actual, expected),
      "expected " + this._obj + " to start with " + expected + " ignoring case",
      "expected " +
        this._obj +
        " not to start with " +
        expected +
        " ignoring case",
    );
  };

  chai.Assertion.addChainableMethod(
    "startsWithIgnoreCase",
    startsWithIgnoreCaseMethodWrapper,
  );
  chai.Assertion.addChainableMethod(
    "startWithIgnoreCase",
    startsWithIgnoreCaseMethodWrapper,
  );

  const endsWithMethodWrapper = function (expected) {
    const actual = this._obj;

    return this.assert(
      chai.string.endsWith(actual, expected),
      "expected " + this._obj + " to end with " + expected,
      "expected " + this._obj + " not to end with " + expected,
    );
  };

  chai.Assertion.addChainableMethod("endsWith", endsWithMethodWrapper);
  chai.Assertion.addChainableMethod("endWith", endsWithMethodWrapper);

  const endsWithIgnoreCaseMethodWrapper = function (expected) {
    const actual = this._obj;

    return this.assert(
      chai.string.endsWithIgnoreCase(actual, expected),
      "expected " + this._obj + " to end with " + expected + " ignoring case",
      "expected " +
        this._obj +
        " not to end with " +
        expected +
        " ignoring case",
    );
  };

  chai.Assertion.addChainableMethod(
    "endsWithIgnoreCase",
    endsWithIgnoreCaseMethodWrapper,
  );
  chai.Assertion.addChainableMethod(
    "endWithIgnoreCase",
    endsWithIgnoreCaseMethodWrapper,
  );

  chai.Assertion.addChainableMethod("equalIgnoreCase", function (expected) {
    const actual = this._obj;

    return this.assert(
      chai.string.equalIgnoreCase(actual, expected),
      "expected " + this._obj + " to equal " + expected + " ignoring case",
      "expected " + this._obj + " not to equal " + expected + " ignoring case",
    );
  });

  chai.Assertion.addChainableMethod("equalIgnoreSpaces", function (expected) {
    const actual = this._obj;

    return this.assert(
      chai.string.equalIgnoreSpaces(actual, expected),
      "expected " + this._obj + " to equal " + expected + " ignoring spaces",
      "expected " +
        this._obj +
        " not to equal " +
        expected +
        " ignoring spaces",
    );
  });

  chai.Assertion.addChainableMethod("containIgnoreSpaces", function (expected) {
    const actual = this._obj;

    return this.assert(
      chai.string.containIgnoreSpaces(actual, expected),
      "expected " + this._obj + " to contain " + expected + " ignoring spaces",
      "expected " +
        this._obj +
        " not to contain " +
        expected +
        " ignoring spaces",
    );
  });

  chai.Assertion.addChainableMethod("containIgnoreCase", function (expected) {
    const actual = this._obj;

    return this.assert(
      chai.string.containIgnoreCase(actual, expected),
      "expected " + this._obj + " to contain " + expected + " ignoring case",
      "expected " +
        this._obj +
        " not to contain " +
        expected +
        " ignoring case",
    );
  });

  chai.Assertion.addChainableMethod("singleLine", function () {
    const actual = this._obj;

    return this.assert(
      chai.string.singleLine(actual),
      "expected " + this._obj + " to be a single line",
      "expected " + this._obj + " not to be a single line",
    );
  });

  chai.Assertion.addChainableMethod("reverseOf", function (expected) {
    const actual = this._obj;

    return this.assert(
      chai.string.reverseOf(actual, expected),
      "expected " + this._obj + " to be the reverse of " + expected,
      "expected " + this._obj + " not to be the reverse of " + expected,
    );
  });

  chai.Assertion.addChainableMethod("palindrome", function () {
    const actual = this._obj;

    return this.assert(
      chai.string.palindrome(actual),
      "expected " + this._obj + " to be a palindrome",
      "expected " + this._obj + " not to be a palindrome",
    );
  });

  chai.Assertion.addChainableMethod(
    "entriesCount",
    function (substr, expected) {
      const actual = this._obj;

      return this.assert(
        chai.string.entriesCount(actual, substr, expected),
        "expected " +
          this._obj +
          " to have " +
          substr +
          " " +
          expected +
          " time(s)",
        "expected " +
          this._obj +
          " to not have " +
          substr +
          " " +
          expected +
          " time(s)",
      );
    },
  );

  chai.Assertion.addChainableMethod("indexOf", function (substr, index) {
    const actual = this._obj;

    return this.assert(
      chai.string.indexOf(actual, substr, index),
      "expected " + this._obj + " to have " + substr + " on index " + index,
      "expected " + this._obj + " to not have " + substr + " on index " + index,
    );
  });

  // Asserts
  const assert = chai.assert;

  assert.startsWith = function (val, exp, msg) {
    new chai.Assertion(val, msg).to.startsWith(exp);
  };

  assert.startsWithIgnoreCase = function (val, exp, msg) {
    new chai.Assertion(val, msg).to.startsWithIgnoreCase(exp);
  };

  assert.notStartsWith = function (val, exp, msg) {
    new chai.Assertion(val, msg).to.not.startsWith(exp);
  };

  assert.notStartsWithIgnoreCase = function (val, exp, msg) {
    new chai.Assertion(val, msg).to.not.startsWithIgnoreCase(exp);
  };

  assert.endsWith = function (val, exp, msg) {
    new chai.Assertion(val, msg).to.endsWith(exp);
  };

  assert.endsWithIgnoreCase = function (val, exp, msg) {
    new chai.Assertion(val, msg).to.endsWithIgnoreCase(exp);
  };

  assert.notEndsWith = function (val, exp, msg) {
    new chai.Assertion(val, msg).to.not.endsWith(exp);
  };

  assert.notEndsWithIgnoreCase = function (val, exp, msg) {
    new chai.Assertion(val, msg).to.not.endsWithIgnoreCase(exp);
  };

  assert.equalIgnoreCase = function (val, exp, msg) {
    new chai.Assertion(val, msg).to.be.equalIgnoreCase(exp);
  };

  assert.notEqualIgnoreCase = function (val, exp, msg) {
    new chai.Assertion(val, msg).to.not.be.equalIgnoreCase(exp);
  };

  assert.equalIgnoreSpaces = function (val, exp, msg) {
    new chai.Assertion(val, msg).to.be.equalIgnoreSpaces(exp);
  };

  assert.notEqualIgnoreSpaces = function (val, exp, msg) {
    new chai.Assertion(val, msg).to.not.be.equalIgnoreSpaces(exp);
  };

  assert.containIgnoreSpaces = function (val, exp, msg) {
    new chai.Assertion(val, msg).to.be.containIgnoreSpaces(exp);
  };

  assert.notContainIgnoreSpaces = function (val, exp, msg) {
    new chai.Assertion(val, msg).to.not.be.containIgnoreSpaces(exp);
  };

  assert.containIgnoreCase = function (val, exp, msg) {
    new chai.Assertion(val, msg).to.be.containIgnoreCase(exp);
  };

  assert.notContainIgnoreCase = function (val, exp, msg) {
    new chai.Assertion(val, msg).to.not.be.containIgnoreCase(exp);
  };

  assert.singleLine = function (val, exp, msg) {
    new chai.Assertion(val, msg).to.be.singleLine();
  };

  assert.notSingleLine = function (val, exp, msg) {
    new chai.Assertion(val, msg).to.not.be.singleLine();
  };

  assert.reverseOf = function (val, exp, msg) {
    new chai.Assertion(val, msg).to.be.reverseOf(exp);
  };

  assert.notReverseOf = function (val, exp, msg) {
    new chai.Assertion(val, msg).to.not.be.reverseOf(exp);
  };

  assert.palindrome = function (val, exp, msg) {
    new chai.Assertion(val, msg).to.be.palindrome();
  };

  assert.notPalindrome = function (val, exp, msg) {
    new chai.Assertion(val, msg).to.not.be.palindrome();
  };

  assert.entriesCount = function (str, substr, count, msg) {
    new chai.Assertion(str, msg).to.have.entriesCount(substr, count);
  };

  assert.indexOf = function (str, substr, index, msg) {
    new chai.Assertion(str, msg).to.have.indexOf(substr, index);
  };
}

export default chaiString;
