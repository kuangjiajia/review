
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


function deepCopy(obj, target) {
  Object.keys(obj).forEach(item => {
    if (typeof obj[item] !== "object") {
      target[item] = obj[item]
    } else if (obj[item] instanceof Array) {
      target[item] = []
      deepCopy(obj[item], target[item])
    } else {
      target[item] = {}
      deepCopy(obj[item], target[item])
    }
  })
}

var obj = {
  name: "kjj",
  hobby: {
    play: "computer"
  },
  arr: [1, 2, 3, 4, 5]
}

var llp = {}

deepCopy(obj, llp)



console.log(llp)

llp.arr.push(456)

console.log(obj)