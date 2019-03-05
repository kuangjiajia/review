// const fs = require('fs')
// const http = require('http')
// const path = require('path')
// const mime = require("mime")


// const server = http.createServer((req, res) => {
//   const url = req.url
//   if (url === "/favicon.ico") return
//   const extName = path.extname(url).slice(1)
//   const mimeType = mime.getType(extName)
//   res.setHeader("Content-Type", mimeType)
//   fs.createReadStream(path.resolve("." + url)).pipe(res)
// })

// server.listen(3001)


// 例如有数据为:
// {
//   "data": [
//     {
//       "date": "2019-03-05",
//       "headcount": 777107,
//       "t0": 777107
//     },
//     {
//       "date": "2019-03-01",
//       "headcount": 777117,
//       "t0": 777207
//     }
//   ],
//     "series": [
//       {
//         "value": "date",
//         "label": "日期"
//       },
//       {
//         "value": "headcount",
//         "label": "总人数"
//       }, {
//         "value": "t0",
//         "label": "第0天"
//       }]
// }

// 要求: 将数据a转为
// {
//   columns: ["日期", "总人数", "第0天"],
//     rows: [
//       {
//         "日期": "2019-03-05",
//         "总人数": 777107,
//         "第0天": 777107
//       },
//       {
//         "日期": "2019-03-01",
//         "总人数": 777117,
//         "第0天": 777207
//       }
//     ]
// }

var obj1 = {
  "data": [
    {
      "date": "2019-03-05",
      "headcount": 777107,
      "t0": 777107
    },
    {
      "date": "2019-03-01",
      "headcount": 777117,
      "t0": 777207
    }
  ],
  "series": [
    {
      "value": "date",
      "label": "日期"
    },
    {
      "value": "headcount",
      "label": "总人数"
    }, {
      "value": "t0",
      "label": "第0天"
    }]
}

var obj = {}
var columns = Object.keys(obj1.series).map(item => {
  obj[item.value] = item.label
  return item.label
})

var rows = Object.keys(obj1.data).map(item => {
  var tmpObj = {}
  return
})




