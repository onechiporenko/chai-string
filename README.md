# chai-string

Matchers for chai to help with common string comparison assertions.

[![CI](https://github.com/onechiporenko/chai-string/actions/workflows/ci.yml/badge.svg?branch=master)](https://github.com/onechiporenko/chai-string/actions/workflows/ci.yml)
[![Downloads](http://img.shields.io/npm/dm/chai-string.svg)](https://www.npmjs.com/package/chai-string)

## Usage

```javascript
var chai = require('chai');
chai.use(require('chai-string'));
```

## Assertions

* startsWith/startWith
* startsWithIgnoreCase/startWithIgnoreCase
* endsWith/endWith
* endsWithIgnoreCase/endWithIgnoreCase
* equalIgnoreCase
* equalIgnoreSpaces
* containIgnoreSpaces
* containIgnoreCase
* singleLine
* reverseOf
* palindrome
* entriesCount
* indexOf

All assertions are defined for both the BDD and TDD syntax but some aliases exist to make the assertions look good with both styles.

```javascript
const d1 = 'abcdef',
    d2 = 'abc';

d1.should.startWith.d2;
expect(d1).to.startsWith(d2);
assert.startsWith(d1, d2);
```

### startsWith / startWith
```javascript
assert.startsWith('abcdef', 'abc');
expect('abcdef').to.startsWith('abc');
'abcdef'.should.startWith('abc');
```

### startsWithIgnoreCase / startWithIgnoreCase
```javascript
assert.startsWithIgnoreCase('aBcdef', 'abC');
expect('abCdef').to.startsWithIgnoreCase('Abc');
'Abcdef'.should.startWithIgnoreCase('aBc');
```

### endsWith / endWith
```javascript
assert.endsWith('abcdef', 'def');
expect('abcdef').to.endsWith('def');
'abcdef'.should.endWith('def');
```

### endsWithIgnoreCase / endWithIgnoreCase
```javascript
assert.endsWithIgnoreCase('abcdEf', 'deF');
expect('abcDef').to.endsWithIgnoreCase('dEf');
'abcdeF'.should.endWithIgnoreCase('Def');
```

### equalIgnoreCase
```javascript
assert.equalIgnoreCase('abcdef', 'AbCdEf');
expect('abcdef').to.equalIgnoreCase('AbCdEf');
```

### equalIgnoreSpaces
```javascript
assert.equalIgnoreSpaces('abcdef', 'a\nb\tc\r d  ef');
expect('abcdef').to.equalIgnoreSpaces('a\nb\tc\r d  ef');
```

### containIgnoreSpaces
```javascript
assert.containIgnoreSpaces('abcdefgh', 'a\nb\tc\r d  ef');
expect('abcdefgh').to.containIgnoreSpaces('a\nb\tc\r d  ef');
```

### containIgnoreCase
```javascript
assert.containIgnoreCase('abcdefgh', 'AbcDefGH'); 
expect('abcdefgh').to.containIgnoreCase('AbcDefGH');
'abcdef'.should.containIgnoreCase('cDe');
```

### singleLine
```javascript
assert.singleLine('abcdef');
expect('abcdef').to.be.singleLine();
```

### reverseOf
```javascript
assert.reverseOf('abcdef', 'fedcba');
expect('abcdef').to.be.reverseOf('fedcba');
```

### palindrome
```javascript
assert.palindrome('abccba');
expect('abccba').to.be.palindrome();
```

### entriesCount
```javascript
assert.entriesCount('abcabd', 'ab', 2);
expect('abcabd').to.have.entriesCount('ab', 2);
```

### indexOf
```javascript
assert.indexOf('abcabd', 'ab', 0);
expect('abcabd').to.have.indexOf('ab', 0);
```
