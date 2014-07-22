serialize-js
============

Shorter object serialization for JavaScript.

Sometimes it's useful to serialize object into the JS user-readable representation but the only option you have is JSON which adds all this damn quotes around any keys (incl. valid identifiers), indents entire contents of any objects/arrays etc.

This small serializer allows you to overcome that and get pretty representations, just as you would write it with own hands in code:

```javascript
> serialize({a: 1, b: 2})
{a: 1, b: 2}

> serialize({a: 1, b: 2, c: 3})
{
  a: 1,
  b: 2,
  c: 3
}

> serialize([{a: 1, b: 2, c: 3, '-': '+'}])
[{
  a: 1,
  b: 2,
  c: 3,
  "-": "+"
}]

> serialize([{a: 1}, {b: 2}])
[
  {a: 1},
  {b: 2}
] 
```
