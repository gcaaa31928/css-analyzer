# css-analyzer

[![NPM Version](https://img.shields.io/npm/v/@projectwallace/css-analyzer.svg)](https://www.npmjs.com/package/@projectwallace/css-analyzer)
[![Build Status](https://travis-ci.org/projectwallace/css-analyzer.svg?branch=master)](https://travis-ci.org/projectwallace/css-analyzer) [![Known Vulnerabilities](https://snyk.io/test/github/projectwallace/css-analyzer/badge.svg)](https://snyk.io/test/github/projectwallace/css-analyzer) [![Coverage Status](https://coveralls.io/repos/github/projectwallace/css-analyzer/badge.svg?branch=master)](https://coveralls.io/github/projectwallace/css-analyzer?branch=master) ![Dependencies Status](https://img.shields.io/david/projectwallace/css-analyzer.svg) ![Dependencies Status](https://img.shields.io/david/dev/projectwallace/css-analyzer.svg) [![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)

> Analyze your CSS

A module that goes through your CSS to find all kinds of relevant statistics,
like the amount of rules, the amount of `!important`s, unique colors, and so on.

## Install

```sh
npm install @projectwallace/css-analyzer
```

or

```sh
yarn add @projectwallace/css-analyzer
```

## Usage

```js
const analyze = require('css-analyzer');

analyze('foo{}')
  .then(result => console.log(result))
  .catch(err => console.error(err))
}

//=>
// {
//   'atrules.charsets.total': 0,
//   'atrules.charsets.totalUnique': 0,
//   'atrules.charsets.unique': [],
//   'atrules.documents.total': 0,
//   'atrules.documents.totalUnique': 0,
//   'atrules.documents.unique': [],
//   'atrules.fontfaces.total': 0,
//   'atrules.fontfaces.totalUnique': 0,
//   'atrules.fontfaces.unique': [],
//   'atrules.imports.total': 0,
//   'atrules.imports.totalUnique': 0,
//   'atrules.imports.unique': [],
//   'atrules.keyframes.total': 0,
//   'atrules.keyframes.totalUnique': 0,
//   'atrules.keyframes.unique': [],
//   'atrules.mediaqueries.total': 0,
//   'atrules.mediaqueries.totalUnique': 0,
//   'atrules.mediaqueries.unique': [],
//   'atrules.mediaqueries.browserhacks.total': 0,
//   'atrules.mediaqueries.browserhacks.unique': [],
//   'atrules.mediaqueries.browserhacks.totalUnique': 0,
//   'atrules.namespaces.total': 0,
//   'atrules.namespaces.totalUnique': 0,
//   'atrules.namespaces.unique': [],
//   'atrules.pages.total': 0,
//   'atrules.pages.totalUnique': 0,
//   'atrules.pages.unique': [],
//   'atrules.supports.total': 0,
//   'atrules.supports.totalUnique': 0,
//   'atrules.supports.unique': [],
//   'atrules.supports.browserhacks.total': 0,
//   'atrules.supports.browserhacks.unique': [],
//   'atrules.supports.browserhacks.totalUnique': 0,
//   'declarations.importants.share': 0,
//   'declarations.importants.total': 0,
//   'declarations.total': 0,
//   'declarations.totalUnique': 0,
//   'properties.prefixed.share': 0,
//   'properties.prefixed.total': 0,
//   'properties.prefixed.totalUnique': 0,
//   'properties.prefixed.unique': [],
//   'properties.browserhacks.total': 0,
//   'properties.browserhacks.unique': [],
//   'properties.browserhacks.totalUnique': 0,
//   'properties.total': 0,
//   'properties.totalUnique': 0,
//   'properties.unique': [],
//   'rules.total': 1,
//   'rules.empty.total': 1,
//   'selectors.accessibility.total': 0,
//   'selectors.accessibility.totalUnique': 0,
//   'selectors.accessibility.unique': [],
//   'selectors.id.total': 0,
//   'selectors.id.totalUnique': 0,
//   'selectors.id.unique': [],
//   'selectors.identifiers.average': 1,
//   'selectors.identifiers.top': [{count: 1, value: 'foo'}],
//   'selectors.identifiers.max.count': 1,
//   'selectors.identifiers.max.value': 'foo',
//   'selectors.js.total': 0,
//   'selectors.js.totalUnique': 0,
//   'selectors.js.unique': [],
//   'selectors.specificity.top': [
//     {value: 'foo', specificity: {a: 0, b: 0, c: 0, d: 1}}
//   ],
//   'selectors.total': 1,
//   'selectors.totalUnique': 1,
//   'selectors.universal.total': 0,
//   'selectors.universal.totalUnique': 0,
//   'selectors.universal.unique': [],
//   'selectors.browserhacks.total': 0,
//   'selectors.browserhacks.unique': [],
//   'selectors.browserhacks.totalUnique': 0,
//   'stylesheets.cohesion.average': 0,
//   'stylesheets.simplicity': 1,
//   'stylesheets.size': 5,
//   'stylesheets.browserhacks.total': 0,
//   'stylesheets.browserhacks.totalUnique': 0,
//   'values.browserhacks.total': 0,
//   'values.browserhacks.unique': [],
//   'values.browserhacks.totalUnique': 0,
//   'values.colors.total': 0,
//   'values.colors.totalUnique': 0,
//   'values.colors.unique': [],
//   'values.colors.duplicates.total': 0,
//   'values.colors.duplicates.totalUnique': 0,
//   'values.colors.duplicates.unique': [],
//   'values.fontfamilies.total': 0,
//   'values.fontfamilies.totalUnique': 0,
//   'values.fontfamilies.unique': [],
//   'values.fontsizes.total': 0,
//   'values.fontsizes.totalUnique': 0,
//   'values.fontsizes.unique': [],
//   'values.prefixed.share': 0,
//   'values.prefixed.total': 0,
//   'values.prefixed.totalUnique': 0,
//   'values.prefixed.unique': [],
//   'values.total': 0
// }
```

## Related projects

- [Wallace CLI](https://github.com/bartveneman/wallace-cli) - CLI tool for
  @projectwallace/css-analyzer
- [Gromit CLI](https://github.com/bartveneman/gromit-cli) - A test framework to assert
  that CSS doesn't exceeds certain thresholds
- [Color Sorter](https://github.com/bartveneman/color-sorter) - Sort CSS colors
  by hue, saturation, lightness and opacity
