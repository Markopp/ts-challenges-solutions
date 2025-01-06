/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

interface Person {
  name: string;
  age?: number;
}

function greet(person: Person) {
  return `Hello ${person.name}`;
}

greet({ name: "ayy" });

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

interface SomeType {
  readonly prop: string;
}

function doIt(obj: SomeType) {
  console.log(`prop has the value ${obj.prop}`);

  // No can do, prop is read-only
  // obj.prop = "hello";
}

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */