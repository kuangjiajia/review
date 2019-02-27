class Watcher {
  constructor(vm, expr, cb) {
    this.vm = vm
    this.expr = expr
    this.cb = cb
    this.value = this.getOldValue()
    //先获取一下老的值
  }
  getOldValue() {
    Dep.target = this
    let value = _.getVal(this.vm, this.expr)
    Dep.target = null
    return value
  }
  update() {
    let newVal = _.getVal(this.vm, this.expr)
    let oldVal = this.value
    if (newVal !== oldVal) {
      this.value = newVal
      this.cb(newVal) //watch的callback
    }
  }
}
