function longest<Type extends { length: number }>(a: Type, b: Type) {
  if (a.length >= b.length) {
    return a;
  } else {
    return b;
  }
}

const longerArray = longest([1, 2], [1, 2, 3]);

const longerString = longest('alice', 'bob');

// const noooo_an_error = longest(10, 100);

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

function minimumLength<Type extends { length: number }>(
  obj: Type,
  minimum: number,
): Type | void {
  if (obj.length >= minimum) {
    return obj;
  } else {
    // Error :(
    // return { length: minimum };
  }
}

const arr = minimumLength([1, 2, 3], 6);

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
