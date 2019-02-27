class Observer {
  constructor(data) {
    this.observer(data)
  }

  observer(data) {
    if (!data || typeof data !== "object") return

    Object.keys(data).forEach(key => {
      this.defineReactive(data, key, data[key])
      if (typeof data[key] === "object") {
        this.observer(data[key])
      }
    })
  }

  defineReactive(data, key, val) {
    let that = this
    let dep = new Dep()
    Object.defineProperty(data, key, {
      enumerable: true,
      configurable: true,
      get() {
        Dep.target && dep.addSub(Dep.target)
        return val
      },
      set(newVal) {
        if (newVal !== val) {
          if (typeof newVal === "object") that.observer(newVal)
          val = newVal
          dep.notify()
        }
      }
    })
  }
}

