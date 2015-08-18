extend-accessor
---------------

extend objects with accessors without poofing

[![browser support](https://ci.testling.com/fnky/extend-accessors.png)
](https://ci.testling.com/fnky/extend-accessors)
[![build status](https://secure.travis-ci.org/fnky/extend-accessors.svg)](http://travis-ci.org/fnky/extend-accessors)

Inspiration from [Lea Verou](http://lea.verou.me/)'s article [Copying object properties, the robust way](http://lea.verou.me/2015/08/copying-properties-the-robust-way/)

## install

```sh
$ npm install extend-accessor
```

## usage

```js
var extend = require('extend-accessor')

var Person = function (first, last) {
  this.firstName = first
  this.lastName = last
}

Object.defineProperty(Person.prototype, 'fullName', {
  get: function () {
    return this.firstName + ' ' + this.lastName
  },

  set: function (value) {
    var parts = value.trim().split(' ')

    if (parts.length === 2) {
      this.firstName = parts[0]
      this.lastName = parts[1]
    }
  }
})

var person = new Person('Johnny', 'Depp')
extend(person, { fullName: 'Monty Python' })

// person => Person { firstName: 'Monty', lastName: 'Python' }
```

## license

[MIT](LICENSE)
