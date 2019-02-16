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
render('我是{{name}}，年龄{{age}}，性别{{sex}}', {
  name: '姓名',
  age: 18
})

function render(str, json) {

}

// 结果： 我是姓名，年龄18，性别undefined。
