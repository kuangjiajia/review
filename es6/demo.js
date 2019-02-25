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





// Calling add with [2, 4]


// setTimeout(() => {
//   console.log('timer1')
//   Promise.resolve().then(function () {
//     console.log('promise1')
//   })
// }, 0)
// setTimeout(() => {
//   console.log('timer2')
//   Promise.resolve().then(function () {
//     console.log('promise2')
//   })
// }, 0)


// new Promise(resolve => {
//   console.log(1)
//   setTimeout(() => {
//     console.log(9)
//   })
//   resolve(2)
// }).then(res => {
//   console.log(res)
//   new Promise(resolve => {
//     console.log(3)
//     resolve(4)
//   }).then(res => {
//     console.log(res)
//   })
// })

// setTimeout(() => {
//   console.log(5)
//   new Promise(resolve => {
//     console.log(6)
//     resolve(7)
//   }).then(res => {
//     console.log(res)
//   })
//   setTimeout(() => {
//     console.log(8)
//   })
// })


// setTimeout(() => {
//   console.log(10)
//   new Promise(resolve => {
//     console.log(11)
//     resolve(12)
//   }).then(res => {
//     console.log(res)
//   })
//   setTimeout(() => {
//     console.log(13)
//   })
// })


// var fn = function () {
//   this.name = 20
//   function test() {
//     console.log(this)
//   }
//   test()
// }

// var t = new fn()




