memoarray
===========

[![Version](http://img.shields.io/npm/v/memoarray.svg)](https://www.npmjs.org/package/memoarray)
[![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)

A simple javascript utility for array binding memoization. It's motivated by and based on [memobind](https://github.io/supnate/memobind), and the want to reduce unneccesary re-render due to prop change in styles when array prop is supplied.


Install with `npm install memoarray` or `yarn add memoarray`

Usage:

```js
var memoarray = require('memoarray');
memoarray(context, item1, item2, item3);
```

**CAUTION: there are some possible issues around `undefined` values**

```js
memoarray(this, undefined, undefined, null) === memoarray(this, undefined, null) // true
```

Check out [this pen](https://codepen.io/Krisztiaan/pen/XVmbjW). If you have a solution, feel free to open a PR about it.

### Motivation
An inline array initializer `[element1, element2]` in a JSX prop will create a brand new array on every single render. This is bad for performance, as it will result in the garbage collector being invoked way more than is necessary.

A common use case of `arrays` in `render` is when rendering an element, and styling with overrides:
```jsx
<ul>
  {this.props.items.map(item =>
    <li key={item.id} style={[styles.listItem, listItemStyleOverride]}>
      ...
    </li>
  )}
</ul>
```
This is not good because it creates new arrays in every update.

To resolve the problem, `memoarray` caches the array construction result so that it could be reused if the arguments are not changed. See below example:
```jsx
<ul>
  {this.props.items.map(item =>
    <li key={item.id} onClick={memoarray(this, styles.listItem, listItemStyleOverride)}>
      ...
    </li>
  )}
</ul>
```

### How it works
`memoarray` caches the array construction result in the `context` object. The array creation result is stored with the key generated from arguments using JSON.stringify.

### License

[MIT](LICENSE). Copyright (c) 2017 Krisztian Ferencz.
