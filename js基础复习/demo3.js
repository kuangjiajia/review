// console.log(format('2017-10-30'))

// function format(str) {
//   let reg = /([1-9]\d+)-(0[1-9]|1[0-2])-([0-2]\d|3[0-1])/g
//   return str.replace(reg, (...args) => {
//     return args[1] + "年" + args[2] + "月" + args[3] + "日"
//   })
// }

// function format(str) {
//   var reg = /^([1-9]\d{3})-(0?[1-9]|1[1-2])-([02]\d|[3][0-1])$/g
//   if (!reg.test(str)) return '输入日期格式不合法'
//   return (str.replace(reg, function () {
//     // console.log(arguments)
//     return arguments[1] + '年' + arguments[2] + '月' + + arguments[3] + '日'
//   }))
// }

var reg = /(\d)(?=(\d{3})+\.)/g
var str = "20123213.123"

console.log(str.replace(reg, "$1,"))