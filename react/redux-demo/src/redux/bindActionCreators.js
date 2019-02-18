const bindActionCreator = (actionCreator, dispatch) => {
  return (...args) => {
    return dispatch(actionCreator(...args))
  }
}

export default bindActionCreator