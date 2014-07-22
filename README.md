serialize-js
============

Small serialization helper for those who wants to get JS representation of object but gets only this dirty JSON.

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
