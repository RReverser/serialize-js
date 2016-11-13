[![Build Status](https://travis-ci.org/RReverser/serialize-js.svg)](https://travis-ci.org/RReverser/serialize-js)

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
# TOC

- [serialize-js](#serialize-js)
  - [Installation](#installation)
  - [Tests](#tests)
  - [Dependencies](#dependencies)
  - [Dev Dependencies](#dev-dependencies)
  - [License](#license)
  - [What's this?](#whats-this)
  - [Why does it exist?](#why-does-it-exist)
  - [How-to?](#how-to)
  - [How can I customize the output?](#how-can-i-customize-the-output)
- [API Reference](#api-reference)
  - [Functions](#functions)
  - [Typedefs](#typedefs)
  - [serialize(obj, [options]) ⇒ <code>String</code>](#serializeobj-options-%E2%87%92-codestringcode)
  - [Options : <code>object</code>](#options--codeobjectcode)
- [Changelog](#changelog)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


# serialize-js 

User-readable object serialization for JavaScript.

## Installation

Download node at [nodejs.org](http://nodejs.org) and install it, if you haven't already.

```sh
npm install serialize-js --save
```


## Tests

```sh
npm install
npm test
```

## Dependencies

None

## Dev Dependencies

- [codeclimate-test-reporter](https://github.com/codeclimate/javascript-test-reporter): Code Climate test reporter client for javascript projects
- [codecov](https://github.com/codecov/codecov-node): Uploading report to Codecov: https://codecov.io
- [coveralls](https://github.com/nickmerwin/node-coveralls): takes json-cov output into stdin and POSTs to coveralls.io
- [doctoc](https://github.com/thlorenz/doctoc): Generates TOC for markdown files of local git repo.
- [istanbul](https://github.com/gotwarlost/istanbul): Yet another JS code coverage tool that computes statement, line, function and branch coverage with module loader hooks to transparently add coverage when running tests. Supports all JS coverage use cases including unit tests, server side functional tests 
- [jsdoc-parse](https://github.com/jsdoc2md/jsdoc-parse): Transforms jsdoc data into something more suitable for use as template input
- [jsdoc-to-markdown](https://github.com/jsdoc2md/jsdoc-to-markdown): Generates markdown API documentation from jsdoc annotated source code
- [mocha](https://github.com/mochajs/mocha): simple, flexible, fun test framework
- [mocha-lcov-reporter](https://github.com/StevenLooman/mocha-lcov-reporter): LCOV reporter for Mocha
- [package-json-to-readme](https://github.com/zeke/package-json-to-readme): Generate a README.md from package.json contents


## License

MIT

## What's this?

Small serialization helper for those who wants to get JS representation of object but gets only this dirty JSON.

## Why does it exist?

Sometimes it's useful to serialize object into the JS user-readable representation but the only option you have is JSON which adds all this damn quotes around any keys (incl. valid identifiers), indents entire contents of any objects/arrays etc.

This small serializer allows you to overcome that and get pretty representations, just as you would write it with own hands in code:

<table>
<thead>
<tr><th>obj</th><th>JSON.stringify(obj, null, 2)</th><th>serialize(obj)</th></tr>
</thead>
<tbody>

<tr><th><pre><code>{a: 1}</code></pre></th><td><pre><code>{
  "a": 1
}</code></pre></td><td><pre><code>{a: 1}</code></pre></td></tr>

<tr><th><pre><code>{a: 1, b: 2}</code></pre></th><td><pre><code>{
  "a": 1,
  "b": 2
}</code></pre></td><td><pre><code>{a: 1, b: 2}</code></pre></td></tr>

<tr><th><pre><code>{a: 1, b: 2, c: 3}</code></pre></th><td><pre><code>{
  "a": 1,
  "b": 2,
  "c": 3
}</code></pre></td><td><pre><code>{
  a: 1,
  b: 2,
  c: 3
}</code></pre></td></tr>

<tr><th><pre><code>[{a: 1, b: 2, c: 3, '-': '+'}]</code></pre></th><td><pre><code>[
  {
    "a": 1,
    "b": 2,
    "c": 3,
    "-": "+"
  }
]</code></pre></td><td><pre><code>[{
  a: 1,
  b: 2,
  c: 3,
  "-": "+"
}]</code></pre></td></tr>

<tr><th><pre><code>[{a: 1}, {b: 2}]</code></pre></th><td><pre><code>[
  {
    "a": 1
  },
  {
    "b": 2
  }
]</code></pre></td><td><pre><code>[
  {a: 1},
  {b: 2}
]</code></pre></td></tr>

</tbody>
</table>

## How-to?

Full example:

```javascript
const serializeJs = require('serialize-js');

const options = {
    indent: 4,
    initialIndent: 0,
    forceJSON: false,
    forceSingleQuote: false
};

const myObjToSerialize = {
    a: 'a',
    ab: {
        a: 'a', 
        b: 'b'
    },
    abc: ['a', 'b', 'c'],
    'a-bc': ['a', 'b', 'c']
};

const serialized = serializeJs.serialize(myObjToSerialize, options);
console.log(serialized);
```

For instance, the `serialized` string can be written to a file, let's say _myObj.js_: 

```javascript
const fs = require('fs');
fs.writeFile('myObj.js', 'module.exports = ' + serialized + ';', (err) => {
    if (err) {
        return console.log(err);
    }
    console.log('Saved myObj.js!');
}); 
```

which would contain then:

```javascript
module.exports = {
    a: "a",
    ab: {
        a: "a", 
        b: "b"
    },
    abc: ["a", "b", "c"],
    "a-bc": ["a", "b", "c"]
};
```

## How can I customize the output?

You can optionally pass options object as second argument (`serialize(obj, { /*...options...*/ })`).
Refer to [Options Definition](#Options) for a detailed description.
# API Reference


## Functions

<dl>
<dt><a href="#serialize">serialize(obj, [options])</a> ⇒ <code>String</code></dt>
<dd><p>Serializes the given <code>obj</code> to string applying the passed options.</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#Options">Options</a> : <code>object</code></dt>
<dd><p>The module configuration <code>Options</code> type.</p>
</dd>
</dl>

<a name="serialize"></a>

## serialize(obj, [options]) ⇒ <code>String</code>
Serializes the given `obj` to string applying the passed options.

**Kind**: global function  
**Returns**: <code>String</code> - - The serialized `obj`.  
**Access:** public  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| obj | <code>Object</code> |  | The JS `Object` to serialize to string. |
| [options] | <code>[Options](#Options)</code> | <code>{}</code> | The module configuration options. |

<a name="Options"></a>

## Options : <code>object</code>
The module configuration `Options` type.

**Kind**: global typedef  
**Access:** public  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| initialIndent | <code>Number</code> &#124; <code>String</code> | <code>&#x27;&#x27;</code> | Initial indentation of output (generated indentation will be relative to this one). It can be either number of spaces or explicit string. |
| indent | <code>Number</code> &#124; <code>String</code> | <code>2</code> | The indentation to be used for nested representations. It can be either number of spaces or explicit string (like `'\t'`). |
| forceJSON | <code>boolean</code> | <code>false</code> | Whether to force JSON style. If set to `true`, generates JSON-compatible output (all the keys are wrapped with quotes, but indentation is still optimized). |
| forceSingleQuotes | <code>boolean</code> | <code>false</code> | Whether to force single-quote style. Applied to _keys_ and values, of course, the first only effective if `forceJSON` is set to `true`! |

# Changelog

### v1.2.0

- [Feature] New Configuration option:
    - Add (optional) `options.forceSingleQuotes` flag (default: `false`) to enable serialization with single-quotes
- [Refactoring] Internal improvements only (functionality is still fully backwards compatible!):
    - Add this changelog
    - Add more node.js versions in _.travis.yml_ and a branch whitelist
    - Enhanced _package.json_
    - Enhanced generation for _README.md_
    - Add [istanbul](https://www.npmjs.com/package/istanbul) test coverage tool
    - Improved test coverage
    - Code base reworked
    - Add [JSDoc](http://usejsdoc.org/)s
    - Add [_Makefile_](https://www.gnu.org/software/make/manual/make.html)
    - Add [_.editorconfig_](http://editorconfig.org/)
    - Add _.gitignore_ and _.npmignore_
    - Add [_inch.json_](https://inch-ci.org/)
