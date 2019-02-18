const logger = require("./middlewares/logger")

const {
  createStore,
  combineReducers,
  applyMiddlewares
} = require('./redux/index')


function reducer1(state = 1, action) {
  switch (action.type) {
    case "add":
      return state + 1
    case "reduce":
      return state - 1
    default:
      return state
  }
}


function reducer2(state = [], action) {
  switch (action.type) {
    case "add_arr":
      return state.concat(1)
    default:
      return state
  }
}

const store = createStore(
  combineReducers({
    reducer1,
    reducer2
  }),
  {},
  applyMiddlewares(...[
    logger
  ])
)


store.dispatch({
  type: "add"
})

store.dispatch({
  type: "add_arr"
})

store.dispatch({
  type: "add_arr"
})


store.dispatch({
  type: "reduce"
})




