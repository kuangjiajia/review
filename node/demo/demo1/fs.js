// let fs = require("fs")
// let data1 = fs.readFileSync("./test.txt")

// console.log(data1)
// console.log(data1.toString())

// fs.readFile("./test.txt", (err, data) => {
//   console.log(data.toString())
// })

// function my_async_function(name, fn) {
//   setTimeout(() => {
//     fn(null, "-" + name + "-")
//   }, 3000)
// }

// my_async_function("hello", (err, name) => {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log(name)
//   }
// })


// class Event {
//   constructor() {
//     this.map = {}
//   }
//   add(name, fn) {
//     if (this.map[name]) {
//       this.map[name].push(fn)
//     } else {
//       this.map[name] = [fn]
//     }
//     return this
//   }
//   emit(name, ...args) {
//     this.map[name].forEach(fn => {
//       fn(...args)
//     })
//     return this
//   }
// }

// const e = new Event()

// e.add("kjj", name => {
//   console.log(name)
// }).add("kjj", name => {
//   console.log(name + " z")
// }).emit("kjj", "kjj")


// function create(fn) {
//   let ret = false
//   return ({ next, complete, err }) => {
//     function nextFn(...args) {
//       if (ret) {
//         return
//       }
//       next(...args)
//     }

//     function completeFn(...args) {
//       complete(...args)
//       ret = true
//     }
//     function errFn(...args) {
//       err(...args)
//     }
//     fn({
//       next: nextFn,
//       complete: completeFn,
//       err: errFn
//     })
//     return () => {
//       return ret = true
//     }
//   }
// }

// let observerable = create(observer => {
//   setTimeout(() => {
//     observer.next(1)
//   }, 1000)
//   observer.next(2)
//   observer.complete(3)
// })

// const subject = {
//   next: v => console.log(v),
//   complete: console.log,
//   err: console.log()
// }

// const unsubscribe = observerable(subject)


// const getName = new Promise(resolve => {
//   setTimeout(() => {
//     resolve("zzx")
//   }, 1000)
// })
// const getAge = new Promise(resolve => {
//   resolve("kjj")
// })

// Promise.all([getName, getAge]).then(res => {
//   console.log(res)
// })

// Promise.race([getName, getAge]).then(res => {
//   console.log(res)
// })


async function func() {
  return 2
}

func().then(console.log)


const getPosts = () => {
  return new Promise((resolve, reject) => {
    resolve([
      {
        name: "a"
      },
      {
        name: "b"
      }
    ])
  })
}

async function func2() {
  try {
    const posts = await getPosts()
    const number = await func()
    console.log("number:" + number)
    console.log("posts:" + JSON.stringify(posts))
  } catch (e) {
    console.log(e)
  }
}

console.log("zzx")
func2()
console.log("kjj")