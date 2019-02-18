function createStore(reducer, preloadedState, enhancer) {
  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.')
    }

    return enhancer(createStore)(reducer, preloadedState)
  }

  let state

  const listeners = []

  const getState = () => state

  const dispatch = action => {
    state = reducer(state, action)
    console.log(state)

    listeners.forEach(fn => fn())
  }

  const subscribe = listener => {
    listeners.push(listener)

    return () => {
      listeners.filter(fn => fn !== listener)
    }
  }

  dispatch({})

  return {
    getState,
    dispatch,
    subscribe
  }
}


module.exports = createStore