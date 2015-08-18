var test = require('tape')
var extend = require('../')

test('extend literal objects', function (t) {
  t.plan(2)

  var expected1 = {
    foo: 2,
    bar: 'xyz',
    baz: 'golden-nugget',
    space: { planet: 'uranus' }
  }

  var expected2 = {
    foo: 8,
    bar: 'xyz',
    baz: 'golden-nugget',
    space: { planet: 'moon', stars: ['sun'] }
  }

  var obj = { foo: 1, bar: 'xyz', baz: 'nugget' }

  extend(obj, { foo: 2, baz: 'golden-nugget', space: { planet: 'uranus' } })
  t.deepEqual(obj, expected1)

  extend(obj, { foo: 8, space: { planet: 'moon', stars: ['sun'] } })
  t.deepEqual(obj, expected2)
})

test('extend objects with accessors', function (t) {
  t.plan(2)

  var expected1 = {
    firstName: 'Johnny',
    lastName: 'Depp'
  }

  var expected2 = {
    firstName: 'Monty',
    lastName: 'Python'
  }

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

  t.deepEqual(person, expected1)

  extend(person, { fullName: 'Monty Python' })
  t.deepEqual(person, expected2)
})
