class Compile {
  constructor(el, vm) {
    this.el = _.isElementNode(el) ? el : document.querySelector(el)
    this.vm = vm


    if (this.el) {
      let fragment = this.nodeToFragment(this.el)
      this.compile(fragment)
      this.el.appendChild(fragment)
    }
  }
  //辅助方法

  //核心方法
  nodeToFragment(el) { //需要将el中的内容全部放到内存中
    let fragment = document.createDocumentFragment()
    let firstChild
    while (firstChild = el.firstChild) {
      fragment.appendChild(firstChild)
    }
    return fragment
  }

  compile(fragment) {
    let childNodes = fragment.childNodes
    Array.from(childNodes).forEach(node => {
      if (_.isElementNode(node)) {
        //子元素是节点继续编译
        this.compileElement(node)
        this.compile(node)
      } else {
        this.compileText(node)
      }
    })
  }
  compileElement(node) {
    let attrs = node.attributes
    Array.from(attrs).forEach(attr => {
      let attrName = attr.name
      if (_.isDirective(attrName)) {
        // 去的v-xxx 的值 
        let expr = attr.value
        let type = attrName.slice(2)
        compileUtil[type](node, this.vm, expr)
      }
    })
  }
  compileText(node) {
    let text = node.textContent
    let reg = /\{\{([^}]+)\}\}/g

    if (reg.test(text)) {
      compileUtil["text"](node, this.vm, text)
    }
  }
}

const compileUtil = {
  text(node, vm, expr) {
    let updateFn = this.updater["textUpdater"]
    let value = _.getTextVal(vm, expr)
    expr.replace(/\{\{([^}]+)\}\}/g, (...args) => {
      new Watcher(vm, args[1], () => {
        updateFn && updateFn(node, _.getTextVal(vm, expr))
      })
    })
    updateFn && updateFn(node, value)
  },
  model(node, vm, expr) {
    let updateFn = this.updater["modelUpdater"]
    new Watcher(vm, expr, () => {
      updateFn && updateFn(node, _.getVal(vm, expr))
    })
    node.addEventListener("input", e => {
      let newVal = e.target.value
      _.setVal(vm, expr, newVal)
    })
    updateFn && updateFn(node, _.getVal(vm, expr))
  },
  updater: {
    //文本更新
    textUpdater(node, value) {
      node.textContent = value
    },
    //输入框更新
    modelUpdater(node, value) {
      node.value = value
    }
  }
}