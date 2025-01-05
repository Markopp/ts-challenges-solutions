/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

function fn(n: number) {
  console.log(n.toFixed());
  console.log(n.toFixed(3));
}

// To model this, we use the optional parameters
function fnFoo(n?: number) { n }

// Both valid
fnFoo();
fnFoo(42);

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

// Setting the default
function fnBar(n = 10) { n }

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

function myForEach(arr: any[], callback: (arg: any, index?: number) => void) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}

myForEach([1, 2, 3], (a, i) => console.log(a, i.toFixed()));

// # Rule: When writing a function type for a callback,
// never write an optional parameter unless you intend
// to call the function without passing that argument

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

