const test = require('ava')
const testScope = require('../../../utils/scope-tester.js')

const SCOPE = 'atrules/namespaces'

test(SCOPE, async t => {
  const {actual, expected} = await testScope(SCOPE)
  t.deepEqual(actual.atrules.namespaces, expected)
})
