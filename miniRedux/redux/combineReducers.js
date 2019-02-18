function combineReducers(reducers) {
  return (state = {}, action) => {
    const newState = {}
    Reflect.ownKeys(reducers).forEach(key => {
      newState[key] = reducers[key](
        state[key],
        action
      )
    })
    return newState
  }
}




module.exports = combineReducers