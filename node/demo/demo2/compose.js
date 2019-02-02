function compose(middleware) {
  return (context, next) => {
    let index = -1
    let len = middleware.length
    return dispatch(0)
    function dispatch(i) {
      if (i <= index) return Promise.reject(new Error('next() called multipart times'))
      index = i
      let fn = middleware[i]
      if (i === len) fn = next
      if (!fn) return Promise.resolve()
      try {
        return Promise.resolve(fn(context, function () {
          return dispatch(i + 1)
        }))
      } catch (e) {
        return Promise.reject(e)
      }
    }
  }
}


async function func1(_, next) {
  console.log(1)
  await next()
  console.log(2)
}

async function func2(_, next) {
  console.log(3)
  await next()
  console.log(4)
}

compose([func1, func2])({})