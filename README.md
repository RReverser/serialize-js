serialize-js
============

[![Build Status](https://travis-ci.org/RReverser/serialize-js.svg)](https://travis-ci.org/RReverser/serialize-js)

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

## How can I customize the output?

You can optionally pass options object as second argument (`serialize(obj, { /*...options...*/ })`).

Possible options are below:

### initialIndent
Type: `Number|String`
Default: `''`

Initial indentation of output (generated indentation will be relative to this one). It can be either number of spaces or explicit string.

### indent
Type: `Number|String`
Default: `2`

Indentation to be used for nested representations. It can be either number of spaces or explicit string (like `'\t'`).

### forceJSON
Type: `Boolean`
Default: `false`

If set to `true`, generates JSON-compatible output (all the keys are wrapped with quotes, but indentation is still optimized).
