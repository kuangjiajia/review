//正则问题

// var str = 'For more information, see Chapter 3.4.5.1';
// var reg = /\d(\.\d)*/g
// var found = str.match(reg);
// console.log(found)

// var str = 'ABCDEFGHIJKLMNOASDAAPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
// var reg = /[A-E]+/g
// var found = str.match(reg);
// console.log(found)


// var str = 'For more information, see Chapter 3.4.5.1';
// var reg = /\d(\.\d)*/g

// str = str.replace(/\d(\.\d)(\.\d)*/g, (...args) => {
//   console.log(args)
// })

// var str = "John Smith John Smith";
// var reg = /(\w+)\s(\w+)/g
// var newStr = str.replace(reg, (...args) => {
//   return args[2] + args[1]
// })
// console.log(newStr)

// var str = "aaBbbCccDdd"
// var reg = /[A-Z]/g

// var newStr = str.replace(reg, (...args) => {
//   return "-" + args[0].toLowerCase()
// })

// console.log(newStr)


// 例如有数据分别为:
// a = [
//   { date: "03-01 0:00", pageview: 104828 }
// ]

// b = [
//   { value: 'date', label: '时间日期' },
//   { value: 'pageview', label: '页面浏览' }
// ]

// 要求: 将数据a转为
// a = [
//   { "时间日期": "03-01 0:00", "页面浏览": 104828 }
// ]


// var a = [
//   { date: "03-01 0:00", pageview: 104828 }
// ]
// var b = [
//   { value: 'date', label: '时间日期' },
//   { value: 'pageview', label: '页面浏览' }
// ]

// var obj = {}
// b.forEach(item => {
//   obj[item.value] = item.label
// })
// a = a.map(item => {
//   var newObj = {}
//   Object.keys(item).forEach(key => {
//     newObj[obj[key]] = item[key]
//   })
//   return newObj
// })

// console.log(a)


// function replacer(match, p1, p2, p3, offset, string) {
// p1 is nondigits, p2 digits, and p3 non-alphanumerics
// return [p1, p2, p3].join(' - ');
// }
// var newString = 'abc12345#$*%'.replace(/([^\d]*)(\d*)([^\w]*)/, replacer);
// newString   abc - 12345 - #$*%


// var str = "aaBbbCccDdd"
// var reg = /(?=[A-Z])/g

// console.log(str.replace(reg, "-").toLowerCase())


// var str = "1234567890.1231"

// var reg = /(\d)(?=(\d{3})+\.)/g
// str.replace(reg, (...args) => {
//   console.log(args)
// })

// console.log(str.replace(reg, "$1,"))

// var x = "123/456"

// var reg = /(\d*)\/(\d*)/g

// x = x.replace(reg, "$1 $2")

// console.log(x)


// var x = "aaaBbbCccDccc"
// var reg = /([A-Z])/g
// console.log(x.replace(reg, '-$1').toLocaleLowerCase())

setTimeout(() => {
  console.log('timer1')
  Promise.resolve().then(function () {
    console.log('promise1')
  })
}, 0)

setImmediate(() => {
  console.log('timer3')
  Promise.resolve().then(function () {
    console.log('promise3')
  })
})

setImmediate(() => {
  console.log('timer4')
  Promise.resolve().then(function () {
    console.log('promise4')
  })
})

setTimeout(() => {
  console.log('timer2')
  Promise.resolve().then(function () {
    console.log('promise2')
  })
}, 0)