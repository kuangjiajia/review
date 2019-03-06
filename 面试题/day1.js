// 1.尽可能全面正确的解析一个任意url的所有参数为Object。
var url = 'http://www.domain.com/?user=anonymous&id=123&id=456&city=%E5%8C%97%E4%BA%AC&d&enabled';
// parseParam(url);
/**
结果：
{
   user: 'anonymous',
   id: [123, 456], // 重复出现的 key 要组装成数组，能被转成数字的就转成数字类型
   city: '北京', // 中文
   enabled: true, // 未指定值的 key 约定值为 true
}
*/

//个人答案

// function parseParam(url) {
//   var index = url.indexOf("?")
//   var paramStr = decodeURI(url).slice(index + 1)

//   paramArr = paramStr.split("&")

//   // console.log(paramStr)
//   var param = {}
//   var tmpArr = []
//   for (var i = 0, len = paramArr.length; i < len; i++) {
//     tmpArr = paramArr[i].split("=")
//     tmpArr[1] = tmpArr[1] === undefined ? true : tmpArr[1]
//     if (!param[tmpArr[0]]) {
//       param[tmpArr[0]] = tmpArr[1]
//     } else {
//       if (param[tmpArr[0]] instanceof Array) {
//         param[tmpArr[0]].push(tmpArr[1])
//       } else {
//         param[tmpArr[0]] = [param[tmpArr[0]], tmpArr[1]]
//       }
//     }
//   }
//   return param
// }

// console.log(parseParam(url))


// 2.实现一个最简单的模板引擎
// render('我是{{name}}，年龄{{age}}，性别{{sex}}', {
//   name: '姓名',
//   age: 18
// })

//我的答案...
// function render(tpl, data) {
//   var str = ""
//   var index1 = tpl.indexOf("{{")
//   var index2 = tpl.indexOf("}}")
//   var propName = ""
//   while (index1 !== -1 && index2 !== -1) {
//     propName = tpl.slice(index1 + 2, index2)
//     str += tpl.slice(0, index1) + data[propName]
//     tpl = tpl.slice(index2 + 2)
//     index1 = tpl.indexOf("{{")
//     index2 = tpl.indexOf("}}")
//   }
//   return str
// }

// console.log(render('我是{{name}}，年龄{{age}}，性别{{sex}}', {
//   name: '姓名',
//   age: 18
// }))

//标准答案

// function render(tpl, data) {
//   return tpl.replace(/\{\{(.+?)\}\}/g, function (m, m1) {
//     return data[m1]
//   })
// }

// 结果： 我是姓名，年龄18，性别undefined。


// 3.将一个任意长的数字变成逗号分割的格式
// 1234.56 => "1,234.56" , 123456789 => "123,456,789"
// parseToMoney(1234.56) // return "1,234.56"

//个人答案
// function parseToMoney(num) {
//   var numStr = num + ''
//   var index = numStr.indexOf(".")
//   var len = numStr.length
//   index = index === -1 ? len - 1 : index
//   var i = index - 3
//   while (i > 0) {
//     numStr = numStr.substr(0, i) + "," + numStr.substr(i)
//     i -= 3
//   }
//   return numStr
// }
// console.log(parseToMoney(1234.56))

//标准答案
// function parseToMoney(num) {
//   return (num + '').replace(/(\d+?)(?=(\d{3})+$)/g, '$1,')
// }

// var reg = /(\d)(?=(\d{3})+\.)/g


// 4.请用js计算出我到底有多少钱（输出Number类型数字，代码尽量简洁，考虑通用情况）

// var string = "我的账户余额：2,235,467.20";

// //我的答案
// console.log(string.replace(/,/g, ""));
// //标准答案
// new Number(string.replace(/[^0-9.]/g, ''))



// //5.实现一个 js 的 class ，名字叫做：AnimateToNum，功能是从某个数字递增或者递减到另外一个数字，并且不管数字如何变化，都可以在指定的时间内完成。
// // var AnimateToNum = require("animate-num");


// //我的答案
// class AnimateToNum {
//   constructor({
//     animTime, //每次数字变动持续的时间（ms），
//     initNum, //初始化的数字
//     onChange
//   }) {
//     this.initNum = initNum
//     this.animTime = animTime
//     this.onChange = onChange
//   }
//   toNum(num) {
//     const fps = this.animTime / Math.abs((this.initNum - num))
//     console.log(fps)
//     var timer = setInterval(() => {
//       this.initNum--
//       if (this.initNum === num) {
//         clearInterval(timer)
//       }
//       console.log(this.initNum)
//     }, fps)
//   }
// }


// var numAnim = new AnimateToNum({
//   animTime: 2000, //每次数字变动持续的时间（ms），
//   initNum: 500, //初始化的数字
//   onChange: function (num) {
//     console.log(num);
//   }
// });



// numAnim.toNum(100); // 从500变化到100，用2000ms的时间，在onChange回调中会一直从500倒数到100


// 6.现提供几个读取文件的方法，不借助全局变量实现一个函数，函数可以执行一次后返回一个目录下所有文件中是 .js 后缀的文件列表
// var readdirSync = function (dir_path) { return [filename] } // 读取一个文件夹下的所有文件夹和文件的路径列表（Array）
// var isDirectory = function (path) { return true / false; } // 判断一个路径是否是文件夹
// var existsSync = function (path) { return true / false; } // 判断一个文件/文件夹是否存在

// var getJSFiles = function (path) {
//   return readdirSync(path).map(item => {
//     if (!isDirectory(path + `/${item}`)) {
//       if (item.include(".js")) {
//         return item
//       }
//     }
//   })
// }


// getJSFiles('/code/'); // return 一个文件列表的数组



// 7.请封装一个 CustomFetch 方法，利用原生的 fetch api，但是实现以下几个需求：
// 所有请求默认带上一个 token，值是 xxx
// 请求返回的时候，内部解析内容，并且判断 success 字段是否是 true，如果不是，在 catch 中可以拿到一个Error，message 和 code 是接口返回的对应的内容

// CustomFetch("http://api.com/api").then((data) => {
//   console.log(data); // 如果后台返回 true
// }).catch((e) => {
//   console.log(e.message); // 输出 “查询错误”
// });

// 接口的返回模式
// {
//   success: false,
//     code: 'QUERY_ERROR',
//       data: { },
//   message: '查询错误'
// }

//个人答案

// function CustomFetch(url) {
//   return new Promise((resolve, reject) => {
//     fetch(url, {
//       token: "xxx"
//     }).then(res => {
//       if (res.success) {
//         resolve(res)
//       } else {
//         reject(res)
//       }
//     })
//   })
// }




// 8.将数字转换成中文大写的表示，处理到万级别，例如 12345 -> 一万二千三百四十五

//个人答案
// function toLowerNum(num) {
//   var cnArr = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"]
//   var dig = ["", "十", "百", "千", "万"]
//   var numStr = num + ''
//   var len = numStr.length

//   function getNum() {
//     var str = ''
//     var i = len
//     var index = 0
//     while (index < len) {
//       if (numStr[index] !== "0") {
//         str += cnArr[numStr[index]] + dig[i - 1]
//       } else {
//         if (str[str.length - 1] !== "零") {
//           str += "零"
//         }
//       }
//       i--
//       index++
//     }
//     if (str[str.length - 1] === "零") {
//       str = str.slice(0, str.length - 1)
//     }
//     return str
//   }

//   if (len === 1) {
//     return cnArr[num - 1]
//   } else {
//     return getNum()
//   }
// }
// console.log(toLowerNum(12345)); // 输出 一万二千三百四十五
// console.log(toLowerNum(10001)); // 输出 一万零一
// console.log(toLowerNum(10011)); // 输出 一万零十一
// console.log(toLowerNum(10000)); // 输出 一万



// 9.算法题，实现一个函数，可以判断 a 字符串是否被包含在 b 字符串中


// var B = "1234"
// var A = "124"
// function str(A, B) {
//   var lenA = A.length
//   var lenB = B.length

//   var j = 0
//   for (var i = 0; i < lenB; i++) {
//     if (A[i] === B[j]) {
//       var k = i
//       while (A[k] === B[j] && j < lenA) {
//         k++
//         j++
//       }
//       console.log(j)
//       if (j === lenA) {
//         return true
//       }
//       j = 0
//     }
//   }
//   return false
// }

// console.log(str(A, B))


// 下面五段代码分别输出什么？并且什么时候输出什么？


// for (var i = 0; i < 5; i++) {
//   console.log(i);
// }
//0 1 2 3 4
// for (var i = 0; i < 5; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, 1000 * i);
// }
// // 每隔一秒 5 5 5 5 5
// for (var i = 0; i < 5; i++) {
//   (function (i) {
//     setTimeout(function () {
//       console.log(i);
//     }, i * 1000);
//   })(i);
// }
// // 每隔一秒 0 1 2 3 4
// for (var i = 0; i < 5; i++) {
//   (function () {
//     setTimeout(function () {
//       console.log(i);
//     }, i * 1000);
//   })(i);
// }
// 每隔一秒 5 5 5 5 5
// for (var i = 0; i < 5; i++) {
//   setTimeout((function (i) {
//     console.log(i);
//   })(i), i * 1000);
// }

// // 直接 0 1 2 3 4, ... 正确答案是报错 


//节流
// function throttle(fn, interval) {
//    let time = 0
//    return (...args) => {
//       let context = this
//       let now = +new Date()
//       if ((now - time) >= interval) {
//          fn.apply(context, args)
//          time = now
//       }
//    }
// }

//防抖

// function debounce(fn, delay) {
//    let timer = null
//    return (...args) => {
//       if (timer) {
//          clearTimeout(timer)
//       }
//       timer = setTimeout(() => {
//          fn(args)
//       }, delay)
//    }
// }
