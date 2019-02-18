const bindActionCreator = (actionCreator, dispatch) => {
  return (...args) => {
    return dispatch(actionCreator(...args))
  }
}

module.exports = bindActionCreator