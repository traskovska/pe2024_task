function customCounter(increment) {
  let count = 0;

  function inc() {
    debugger;
    count += increment;
    return count;
  }
  return inc;
}

const myCounter = customCounter(10);

console.log(myCounter());
console.log(myCounter());
console.log(myCounter());
console.log(myCounter());
