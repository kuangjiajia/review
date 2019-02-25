const _ = {
  isElementNode(node) {
    return node.nodeType === 1
  },
  isTextNode(node) {
    return node.nodeType === 3
  },
  isDirective(name) {
    return name.includes("v-")
  },
  getVal(vm, expr) {
    return expr.split(".").reduce((prev, next) => {
      return prev[next]
    }, vm.$data)
  },
  getTextVal(vm, str) {
    return str.replace(/\{\{([^}]+)\}\}/g, (...args) => {
      return _.getVal(vm, args[1])
    })
  },
  setVal(vm, expr, value) {
    var arr = expr.split(".")
    arr.reduce((prev, next, nextIndex) => {
      if (nextIndex === arr.length - 1) {
        return prev[next] = value
      }
      return prev[next]
    }, vm.$data)
  }
}

