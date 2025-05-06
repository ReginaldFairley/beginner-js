function showAllTypes() {
  /* Create a function that outputs the typeof for:
  objects, arrays, strings, numbers, booleans, null, undefined, and NaN It should return an object containing all these types */
  const object = {};
  object.object = typeof {};
  object.array = typeof [];
  object.string = typeof "";
  object.number = typeof 0;
  object.boolean = typeof true;
  object.boolean2 = typeof false;
  object.null = typeof null;
  object.undefined = typeof undefined;
  object.NaN = typeof NaN;
  return object;
}

module.exports = showAllTypes;
