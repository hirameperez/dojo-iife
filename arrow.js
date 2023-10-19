// foo();

// function foo() {
//   console.log('Hello world');
// }

// const bar = function (name = 'Mary') {
//   console.log(`Hi! My name is ${name}`);
// }

// const bar = (name = 'Mary') => console.log(`Hi! My name is ${name}`);

// bar();

// const fizz = (a, b, ...r) => {};
// const buzz = ([a, b] = [20, 30]) => {};

// const movie = {
//   title: 'Star Wars',
//   ratings: [4.8, 4.9, 4.7],
//   printThis: function () {
//     console.log(this);
//   },
//   getTitle: function getTitle() {
//     console.log(this.title)
//   },
//   addRating: function (val) {
//     this.ratings.push(val);
    
//     return this.ratings.reduce((a, b) => a + b) / this.ratings.length;
//   }
// };

// console.log(movie.title); // Star Wars
// console.log(movie.getTitle()); // Star Wars
// console.log(movie.printThis());
// console.log(movie.addRating(4.6));

function Counter () {
  this.num = 0;
  this.timer = setInterval(() => {
    this.num++;
    console.log(this.num);
  }, 500);
}

const c = new Counter();

console.log(c.num); // 0





