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
