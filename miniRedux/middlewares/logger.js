const loggerMiddlewares = store => next => action => {
  console.log('zxzhu', action)
  let result = next(action)
  console.log("idsbllp")
  return result
}

module.exports = loggerMiddlewares