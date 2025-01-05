/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

function firstElement<Type>(
  arr: Type[]
): Type | undefined {
  return arr[0];
}

// Variables now are of the returned type | undefined
const x = firstElement(['foo', 'bar', 'baz']);
const y = firstElement([3, 2, 1]);
const z = firstElement([{}, 'a', 1]);

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

function map<Input, Output>(arr: Input[], func: (arg: Input) => Output): Output[] {
  return arr.map(func);
}

// type number[]
const parsed = map(["1", "2", "3"], (n) => parseInt(n));

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
