const add = v => {
  return {
    type: "add",
    value: v
  }
}

const dec = v => {
  return {
    type: "dec",
    value: v
  }
}

const thunkTest = num => dispatch => {
  setTimeout(() => {
    dispatch(add(num))
  })
}

export {
  add,
  dec,
  thunkTest
}