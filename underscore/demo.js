// var _ = function () { }

// _.age = 20
// _.sayName = function () {
//   console.log(this.name)
// }
// _.sayAge = function () {
//   console.log("age :" + this.age)
// }

// _.sayName()
// _.sayAge()
// console.log(_)


// var root = (typeof self === "object" && self.self === self && self) ||
//   (typeof global === "object" && global.global === global && global) ||
//   this ||
//   {}


var _ = function (obj) {
  if (!(this instanceof _)) return new _(obj)
  this.wrapped = obj
}

var demo = _([1, 2, 3, 4])
console.log(demo)