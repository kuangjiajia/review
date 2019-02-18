function applymiddlewares(...middlewares) {
  return createStore => {
    return (reducer, initialState) => {
      var store = createStore(reducer, initialState)
      var _dispatch = store.dispatch

      var middlewareAPI = {
        getState: store.getState,
        dispatch: (...action) => _dispatch(...action)
      }

      var chain = middlewares.map(
        middleware => middleware(middlewareAPI)
      ).reduce(
        (a, b) =>
          (...args) =>
            a(b(...args))
      )

      _dispatch = chain(_dispatch)

      return {
        ...store,
        dispatch: _dispatch
      }

    }
  }
}


module.exports = applymiddlewares