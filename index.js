function memoarray(thisArg, ...args) {
  if (typeof thisArg !== 'object' || !thisArg) {
    throw new TypeError('Invalid thisArg parameter.');
  }

  const memoKey = JSON.stringify(args);

  if (!thisArg._memoarray_cache) thisArg._memoarray_cache = {};
  let cache = thisArg._memoarray_cache[memoKey];
  if (!cache) {
    cache = thisArg._memoarray_cache[memoKey] = args;
  }
  return cache;
}

export default memoarray;
