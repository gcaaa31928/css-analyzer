const test = require('ava')
const analyze = require('../../../src/analyzer/properties/browserhacks.js')

test('It responds with the correct structure', t => {
  const actual = analyze([])
  const expected = {
    total: 0,
    unique: [],
    totalUnique: 0
  }

  t.deepEqual(actual, expected)
})

test('It recognizes browser hacks correctly', t => {
  const actual = analyze(['_color'])
  const expected = {
    total: 1,
    unique: [
      {
        value: '_color',
        count: 1
      }
    ],
    totalUnique: 1
  }

  t.deepEqual(actual, expected)
})

test('It does not report values that are no browser hacks', t => {
  const expected = {
    total: 0,
    unique: [],
    totalUnique: 0
  }

  const actual = analyze(['color'])

  t.deepEqual(actual, expected)
})
