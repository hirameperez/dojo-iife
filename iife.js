(function () {
  console.log('Hello IIFE');
})();

// expression + ()
!(function (params) {
  console.log('Hello IIFE part 2');
}());

const foo = (function () {
  return 'I\'m foo';
})();

console.log(foo);

const counter = (function (val = 0) {
  let current = 0;

  // expose API

  return {
    getCurrent: function () {
      return current;
    },
    getNext: function () {
      current++;
      return current;
    }
  }
})();

console.log(counter.getCurrent());
console.log(counter.getNext());
console.log(counter.getNext());
console.log(counter.getNext());
console.log(counter.getNext());