
const container = document.querySelector("#container")

var count = 1

function getUserAction() {
  container.innerHTML = count++
}

// container.onmousemove = getUserAction

//防抖

// function debounce(func, wait) {
//   var timeout
//   return function () {
//     if (timeout) {
//       clearTimeout(timeout)
//     }
//     timeout = setTimeout(func, wait)
//   }
// }

// container.onmousemove = debounce(getUserAction, 100)


// function arrage(old, str) {
//   var len = str.length
//   if (len === 1) {
//     return [old + str]
//   }
//   var arr = []
//   for (var i = 0; i < len; i++) {
//     arr.push(...sort(old + str[i], str.slice(0, i) + str.slice(i + 1)))
//   }
//   return arr
// }

// var checkInclusion = function (s1, s2) {
//   var arr = arrage("")
//   console.log(arr)
//   for (var i = 0, len = arr.length; i < len; i++) {
//     if (!s2.includes(arr[i])) {
//       return false
//     }
//   }
//   return true
// };

// checkInclusion("hello", "ooolleoooleh")


// function debounce(func, wait) {
//   var timeout
//   return function () {
//     if (timeout) {
//       clearTimeout(timeout)
//     }
//     timeout = setTimeout(func, wait)
//   }
// }


// function debounce(func, wait) {
//   var timeout
//   return function (...args) {
//     var that = this
//     clearTimeout(timeout)
//     timeout = setTimeout(function () {
//       func.apply(that, args)
//     }, wait)
//   }
// }


// function debounce(func, wait, immediate) {
//   var timeout, result
//   var fn = function (...args) {
//     var that = this
//     if (timeout) clearTimeout(timeout)
//     if (immediate) {
//       var callNow = !timeout
//       timeout = setTimeout(function () {
//         timeout = null
//       }, wait)
//       if (callNow) result = func.apply(that, args)
//     } else {
//       timeout = setTimeout(function () {
//         func.apply(that, args)
//       }, wait)
//     }
//     return result
//   }
//   fn.cancel = function () {
//     clearTimeout(timeout)
//     timeout = null
//   }
//   return fn
// }


// var debounce = function (func, wait, immediate) {
//   var timeout
//   var fn = (...args) {
//     var that = this
//     if (timeout) clearTimeout(timeout)
//     if (immediate) {
//       var callNow = !timeout
//       timeout = setTimeout(function () {
//         timeout = null
//       }, wait)
//       if (callNow) func.apply(that, args)
//     } else {
//       timeout = setTimeout(function () {
//         func.apply(that, args)
//       }, wait)
//     }
//   }

// }



// container.onmousemove = debounce(getUserAction, 100)

// function throttle(func, wait) {
//   var that = this
//   var prev = new Date().getTime()
//   return function (...args) {
//     var now = new Date().getTime()
//     if (now - prev >= wait) {
//       func.apply(that, args)
//       prev = now
//     }
//   }
// }


// function throttle(func, wait) {
//   var timeout
//   return function (...args) {
//     var that = this
//     if (!timeout) {
//       timeout = setTimeout(function () {
//         timeout = null
//         func.apply(that, args)
//       }, wait)
//     }
//   }
// }





// container.onmousemove = throttle(getUserAction, 1000)


// var arr = ['1', '1', 1, 1]

// function unique(arr) {
//   var res = []
//   for (var i = 0, len = arr.length; i < len; i++) {
//     if (!res.includes(arr[i])) {
//       res.push(arr[i])
//     }
//   }
//   return res
// }

// console.log(unique(arr))


// console.log("yuyu")

// console.log(typeof "yuyu")
// console.log(typeof ("yuyu"))

// console.log(typeof function () { })
// console.log(typeof {})
// console.log(typeof new Date())

// 以下是11种：
// var number = 1;          // [object Number]
// var string = '123';      // [object String]
// var boolean = true;      // [object Boolean]
// var und = undefined;     // [object Undefined]
// var nul = null;          // [object Null]
// var obj = { a: 1 }         // [object Object]
// var array = [1, 2, 3];   // [object Array]
// var date = new Date();   // [object Date]
// var error = new Error(); // [object Error]
// var reg = /a/g;          // [object RegExp]
// var func = function a() { }; // [object Function]

// function checkType() {
//   for (var i = 0; i < arguments.length; i++) {
//     console.log(Object.prototype.toString.call(arguments[i]))
//   }
// }

// console.log(Object.prototype.toString.call(Math)); // [object Math]
// console.log(Object.prototype.toString.call(JSON)); // [object JSON]
// checkType(number, string, boolean, und, nul, obj, array, date, error, reg, func)

// function isEmpthObject(obj) {
//   var name
//   for (name in obj) {
//     console.log(name)
//     return false
//   }
//   return true
// }

// isEmpthObject()
// console.log(isEmpthObject([]))

// function isElement(obj) {
//   return !!(obj && obj.nodeType === 1)
// }

// console.log(isElement(container))


// var arr = [
//   {
//     name: "zzx"
//   },
//   {
//     name: "zzx"
//   },
//   {
//     name: "zzx"
//   },
//   {
//     name: "zzx"
//   },
// ]

// var tmpArr = arr.slice(0, 2)

// tmpArr[0].name = "kjj"

// console.log(arr)

// var obj = {
//   name: "kjj",
//   sayName: function () {
//     console.log(this.name)
//   }
// }

// function shallowCopy(obj, target) {
//   Object.keys(obj).forEach(prop => {
//     target[prop] = obj[prop]
//   })
// }

// var target = {}

// shallowCopy(obj, target)

// console.log(target)


// function deepCopy(obj, target) {
//   Object.keys(obj).forEach(item => {
//     if (typeof obj[item] !== "object") {
//       target[item] = obj[item]
//     } else if (obj[item] instanceof Array) {
//       target[item] = []
//       deepCopy(obj[item], target[item])
//     } else {
//       target[item] = {}
//       deepCopy(obj[item], target[item])
//     }
//   })
// }

// var obj = {
//   name: "kjj",
//   hobby: {
//     play: "computer"
//   },
//   arr: [1, 2, 3, 4, 5]
// }

// var llp = {}

// deepCopy(obj, llp)



// console.log(llp)

// llp.arr.push(456)

// console.log(obj)


// function extend() {
//   var args0 = arguments[0]
//   var flag = false
//   var args
//   if (typeof args0 === "boolean") {
//     flag = args0
//     args = Array.prototype.slice.call(arguments, 1)
//   } else {
//     args = Array.prototype.slice.call(arguments, 0)
//   }
//   var target = args[0]
//   if (flag) {
//     for (var i = 1, len = args.length; i < len; i++) {
//       Object.keys(args[i]).forEach(item => {
//         if (typeof args[i][item] !== "object") {
//           target[item] = args[i][item]
//         } else if (args[i][item] instanceof Array) {
//           extend(flag, target[item] = [], args[i][item])
//         } else {
//           if (target[item]) {
//             extend(flag, target[item], args[i][item])
//           } else {
//             extend(flag, target[item] = {}, args[i][item])
//           }
//         }
//       })
//     }
//   } else {
//     for (var i = 1, len = args.length; i < len; i++) {
//       Object.keys(args[i]).forEach(item => {
//         target[item] = args[i][item]
//       })
//     }
//   }
// }

// var obj = {
//   name: "kjj",
//   hobby: {
//     play: "computer"
//   },
//   arr: [1, 2, 3, 4, 5]
// }

// var zzx = {
//   hobby: {
//     play: "computer",
//     age: 20
//   }
// }

// var llp = {}

// extend(true, llp, zzx, obj)
// console.log(llp)


// function max(arr) {
//   if (arr === undefined || !(arr instanceof Array)) {
//     return undefined
//   }
//   return arr.reduce((prev, next) => {
//     console.log("prev: " + prev)
//     console.log("next: " + next)
//     return Math.max(prev, next)
//   })
// }

// console.log(max([1, 2, 4, -4, 2]))


// function flatten(arr) {
//   return arr.reduce((prev, next) => {
//     return prev.concat(Array.isArray(next) ? flatten(next) : next)
//   }, [])
// }

// function flatten(arr) {
//   return arr.reduce((prev, next) => {
//     if (Array.isArray(next)) {
//       var flag = next.some(item => Array.isArray(item))
//       if (flag) {
//         return prev.concat(flatten(next))
//       } else {
//         return prev.concat(next)
//       }
//     } else {
//       return prev.concat(next)
//     }

//   }, [])
// }

// console.log(flatten([1, 2, 3, 4, [3, 4, [3, 2]]]))


// function findIndex(array, fn) {
//   var index = -1
//   for (var i = 0, len = array.length; i < len; i++) {
//     if (fn(array[i])) {
//       index = i
//       break
//     }
//   }
//   return index
// }

// console.log(findIndex([1, 2, 3, 4], function (item, i, array) {
//   if (item == 3) return true;
// })) // 2

// function createFindIndex(num) {
//   return function (arr, fn) {
//     var n = num > 0 ? 1 : -1
//     var len = arr.length
//     var i = num > 0 ? 0 : len - 1
//     var index = -1
//     for (; i >= 0 && i < len; i += n) {
//       if (fn(arr[i])) {
//         index = i
//         break
//       }
//     }
//     return index
//   }
// }

// var findIndex = createFindIndex(1)
// console.log(findIndex([1, 2, 3, 4, 2], function (item, i, array) {
//   if (item == 2) return true;
// })) // 2

// function sub_curry(fn, ...args) {
//   var that = this
//   return function (...args2) {
//     return fn.call(that, ...args, ...args2)
//   }
// }

// function curry(fn, length) {
//   var length = fn.length || length
//   return function (...args) {
//     if (args.length < length) {
//       return curry(sub_curry(fn, ...args), length - args.length)
//     } else {
//       return fn.apply(this, args)
//     }
//   }
// }

// var fn = curry(function (a, b, c) {
//   return [a, b, c];
// });

// console.log(fn("a", "b", "c")) // ["a", "b", "c"]
// fn("a", "b")("c") // ["a", "b", "c"]
// fn("a")("b")("c") // ["a", "b", "c"]
// fn("a")("b", "c") // ["a", "b", "c"]


// var addOne = function (result) {
//   return result + 1
// }

// var toUpperCase = function (str) {
//   return str.toUpperCase()
// }

// function compose() {
//   var len = arguments.length
//   var args = [].slice.call(arguments)
//   return function () {
//     var result = [].slice.call(arguments)
//     for (var i = 0; i < len; i++) {
//       result = args[i](result)
//     }
//     return result
//   }
// }

// console.log(compose(addOne, toUpperCase)("zzx"))


// var reverseWords = function (str) {
//   console.log(str.split(" ").reverse().filter(item => item !== " "))
//   return str.split(" ").reverse().filter(item => item !== "").join(" ").trim()
// };

// console.log(reverseWords("   a   b "))


// function memoize(func) {
//   var cache = {}
//   return function () {
//     var key = arguments.length + [].slice.apply(arguments).join("")
//     console.log(key)
//     if (key in cache) {
//       return cache[key]
//     } else {
//       return cache[key] = func.apply(this, arguments)
//     }
//   }
// }


function memoize(func) {
  var _memoize = function () {
    var cache = _memoize.cache
    var key = arguments.length + JSON.stringify(arguments)
    if (key in cache) {
      return cache[key]
    } else {
      return cache[key] = func.apply(this, arguments)
    }
  }
  _memoize.cache = {};
  return _memoize
}

var count = 0
function fib(n) {
  count++
  if (n <= 1 && n >= 0) {
    return n
  }
  return fib(n - 1) + fib(n - 2)
}

var memoizeFib = memoize(fib)

for (var i = 0; i <= 10; i++) {
  memoizeFib(i)
}

console.log(count) // 12


// var propValue = function (obj) {
//   return obj.value
// }

// var memoizedAdd = memoize(propValue)

// console.log(memoizedAdd({ value: 1 })) // 1
// console.log(memoizedAdd({ value: 2 })) // 1

// var add = function (a, b, c) {
//   return a + b + c
// }

// var memoizedAdd = memoize(add)

// console.log(memoizedAdd(1, 2, 3)) // 6
// console.log(memoizedAdd(1, 2, 4)) // 6