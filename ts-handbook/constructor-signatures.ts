/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

type SomeConstructor = {
  new (s: string): SomeObject;
}

type SomeObject = {
  name: string,
};

class SomeClass {
  public name: string;

  constructor (name: string) {
    this.name = name
  }
};

function fn(ctor: SomeConstructor): SomeObject {
  return new ctor("hello")
}

const someObject = fn(SomeClass);

console.log(someObject);

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

interface CallOrConstruct {
  (n?: number): string;
  new (s: string): Date;
}

function callOrConstruct(ctor: CallOrConstruct) {
  console.log(ctor(10));

  console.log(new ctor("10"));
}

callOrConstruct(Date);

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */