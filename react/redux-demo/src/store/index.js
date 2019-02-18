import {
  createStore,
  applyMiddlewares
} from '../redux/index'

import {
  loggerMiddleware,
  thunkMiddleware
} from '../middlewares/index'


function count(state = 0, action) {
  switch (action.type) {
    case "add":
      return state + action.value
    case "dec":
      return state - action.value
    default:
      return state
  }
}

const middlewares = [
  loggerMiddleware, thunkMiddleware
]

const store = createStore(
  count,
  0,
  applyMiddlewares(...middlewares)
)

export {
  store
}