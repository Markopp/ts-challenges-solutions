
function combine<Type>(arr1: Type[], arr2: Type[]): Type[] {
  return arr1.concat(arr2);
}

const arrayy = combine<string | number>([1, 2, 3], ['foo']);

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

function firstElement1<Type>(arr: Type[]) {
  return arr[0];
}

function firstElement2<Type extends any[]>(arr: Type) {
  return arr[0];
}

/**
 * firstElement1: good - returned variable will have the proper type
 * firstElement2: BAD! - returned variable will have type any - TS resolves the arr[0] using the **constraint** type
 */

// # Rule: When possible, use the type parameter itself rather than constraining it

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

function filter1<Type>(arr: Type[], func: (arg: Type) => boolean): Type[] {
  return arr.filter(func);
}

function filter2<Type, Func extends (arg: Type) => boolean>(
  arr: Type[],
  func: Func
): Type[] {
  return arr.filter(func);
}
/*
 * We've created a type parameter Func that doesn't relate two values.
 * That's always a red flag, because it means callers wanting to specify type
 * arguments have to manually specify an extra type argument for no reason.
 * Func doesn't do anything but make the function harder to read and reason about!
 */

// # Rule: Always use AS FEW type parameters as possible

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

function greetBad<Str extends string>(s: Str) {
  console.log(`Hello, ${s}`);
}

// It's the same thing as:
function greetGood(s: string) {
  console.log("Hello, " + s);
}

// Rule: If a type parameter only appears in one location, strongly reconsider if you actually need it

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
