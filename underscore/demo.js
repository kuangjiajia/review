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


// var _ = function (obj) {
//   if (!(this instanceof _)) return new _(obj)
//   this.wrapped = obj
// }

// var demo = _([1, 2, 3, 4])
// console.log(demo)


// var _ = {}

// var escapeMap = {
//   '&': '&amp;',
//   '<': '&lt;',
//   '>': '&gt;',
//   '"': '&quot;',
//   "'": '&#x27;',
//   '`': '&#x60;'
// }

// _.escape = function (str) {
//   var escaper = function (match) {
//     return escapeMap[match]
//   }
//   var source = '(?:' + Object.keys(escapeMap).join('|') + ')'
//   console.log(source) // (?:&|<|>|"|'|`)
//   var testRegexp = RegExp(source)
//   var replaceRegexp = RegExp(source, 'g')

//   string = string == null ? '' : '' + string
//   return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string
// }


// const a = Symbol("1")
// const b = Symbol({
//   toString: () => "1"
// })

// console.log(a)
// console.log(b)

// console.log(a === b)
// console.log(String(a))
// console.log(String(b))
// console.log(String(b) === String(a))

// var obj = {}
// obj[a] = "123"

// console.log(Object.getOwnPropertySymbols(obj))
// const test = Symbol.for("test")
// console.log(Symbol.keyFor(test))


// function createIterator(arr) {
//   var index = 0
//   return {
//     next: function () {
//       var done = index >= arr.length
//       var value = !done ? arr[index++] : undefined
//       return {
//         done,
//         value
//       }
//     }
//   }
// }

// var x = {
//   [Symbol.iterator]: function () {
//     return createIterator([1, 2, 3])
//   }
// }

// for (value of x) {
//   console.log(value);
// }


// function forOf(obj, cb) {
//   var x = obj[Symbol.iterator]()

//   var result = x.next()

//   while (!result.done) {
//     cb(result.value)
//     result = x.next()
//   }
// }

// forOf([1, 2, 3, 4], function (val) {
//   console.log(val * 2)
// })


// var arr = ["kjj", "llp", "zzx"]

// console.log(arr.entries())

// forOf(arr.entries(), function (item) {
//   console.log(item)
// })


// var colors = new Set(["red", "green", "blue"]);

// for (let index of colors.keys()) {
//   console.log(index);
// }



// for (let color of colors.values()) {
//   console.log(color);
// }



// for (let item of colors.entries()) {
//   console.log(item);
// }

var light = function (type, time) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(type)
      resolve()
    }, time)
  })
}

var dep = function () {
  Promise.resolve().then(_ => {
    return light("green", 1000)
  }).then(_ => {
    return light("yellow", 2000)
  }).then(_ => {
    return light("red", 3000)
  }).then(_ => {
    dep()
  })
}

// dep()