const fetch = require('node-fetch')

// function* gen() {
//   var url = 'https://api.github.com/users/github';
//   var result = yield fetch(url);
//   console.log(result.bio);
// }

// var g = gen()

// g.next().value.then(data => {
//   return data.json()
// }).then(data => {
//   g.next(data)
// })

// function* gen() {
//   var r1 = yield fetch('https://api.github.com/users/github');
//   var r2 = yield fetch('https://api.github.com/users/github/followers');
//   var r3 = yield fetch('https://api.github.com/users/github/repos');

//   console.log([r1.bio, r2[0].login, r3[0].full_name].join('\n'));
// }

// var g = gen()

// g.next().value.then(data => {
//   return data.json()
// }).then(data => {
//   return g.next(data).value
// }).then(data => {
//   return data.json()
// }).then(function (data) {
//   return g.next(data).value
// }).then(function (data) {
//   return data.json()
// }).then(function (data) {
//   g.next(data)
// });


// function* gen() {
//   var r1 = yield fetch('https://api.github.com/users/github');
//   var json1 = yield r1.json();
//   var r2 = yield fetch('https://api.github.com/users/github/followers');
//   var json2 = yield r2.json();
//   var r3 = yield fetch('https://api.github.com/users/github/repos');
//   var json3 = yield r3.json();

//   console.log([json1.bio, json2[0].login, json3[0].full_name].join('\n'));
// }

// function run(gen) {
//   const g = gen()
//   function next(data) {
//     var result = g.next(data)

//     console.log(data)

//     if (result.done) return

//     result.value.then(function (data) {
//       next(data)
//     })
//   }
//   next()
// }

// run(gen)



class Math {
  @log
  add(a, b) {
    return a + b;
  }
}

function log(target, name, descriptor) {
  var oldValue = descriptor.value;

  descriptor.value = function (...args) {
    console.log(`Calling ${name} with`, args);
    return oldValue.apply(this, args);
  };

  return descriptor;
}

const math = new Math();

// Calling add with [2, 4]
math.add(2, 4);