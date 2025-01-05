type DescribableFunction = {
  description: string;
  (a: number): boolean;
}

function doSomething(fn: DescribableFunction) {
  return `${fn.description} returned ${fn(6)}`
}

function isMoreThanThree(a: number) {
  return a > 3;
};

isMoreThanThree.description = 'Is more than 3';

let result = doSomething(isMoreThanThree);

console.log(result);