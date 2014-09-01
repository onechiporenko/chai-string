# chai-string

Matchers for chai to help with common string comparison assertions.

[![Build Status](https://travis-ci.org/onechiporenko/chai-string.png?branch=master)](https://travis-ci.org/onechiporenko/chai-string)

## Usage

### Browser

```html
<script src="chai.js"></script>
<script src="chai-string.js"></script>
```

### Server

```javascript
var chai = require('chai');
chai.use(require('chai-string'));
```

## Assertions

* startsWith
* endsWith
* equalIgnoreCase

All assertions are defined for both the BDD and TDD syntaxes.

```javascript
var d1 = 'abcdef',
    d2 = 'abc';

d1.should.startsWith.d2
expect(d1).to.startsWith(d2)
assert.startsWith(d1, d2)
```

## Thanks

Thanks to the [chai-datetime](https://github.com/gaslight/chai-datetime) module for giving me an idea for how to structure and test a chai plugin.