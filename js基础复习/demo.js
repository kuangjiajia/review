//js原型

// function Person() { }

// var person = new Person()
// console.log(person)
// person.name = "kjj"

// console.log(person)


// function Person() { }

// Person.prototype.name = "kevin"

// var person1 = new Person()
// var person2 = new Person()


// console.log(person1.name)
// console.log(person2.name)

// console.log(person1)
// console.log(person2)

// console.log(person1.__proto__)
// console.log(Person.prototype)

// console.log(Person === Person.prototype.constructor)
// console.log(Person.prototype)

// console.log(Object.getPrototypeOf(person1))

// console.log(Object.getPrototypeOf(person1) === person1.__proto__)


// function Person() { }

// Person.prototype.name = "zzx"

// var person = new Person()

// person.name = "lx"

// console.log(person.name)

// delete person.name

// console.log(person.name)


// console.log(Object.prototype)

// console.log(Object.prototype.__proto__)




//作用域 --- 静态作用域

// var value = 1

// function foo() {
//   console.log(value)
// }

// function bar() {
//   var value = 2
//   foo()
// }

// bar()

// var scope = "global scope"

// function checkScope() {
//   var scope = "local scope"
//   function f() {
//     return scope
//   }
//   return f()
// }

// console.log(checkScope())

// var scope = "global scope"

// function checkScope() {
//   var scope = "local scope"
//   function f() {
//     return scope
//   }
//   return f
// }

// var fn = checkScope()
// console.log(checkScope()())
// console.log(fn())



//执行上下文栈

// var foo = function () {
//   console.log("foo1")
// }
// foo()

// var foo = function () {
//   console.log("foo2")
// }

// foo()

// function foo() {
//   console.log("foo1")
// }
// foo()
// function foo() {
//   console.log("foo2")
// }
// foo()


// function fun3() {
//   console.log("fun3")
// }
// function fun2() {
//   fun3()
// }
// function fun1() {
//   fun2()
// }

// fun1()


//变量对象

// console.log(this)
// console.log(window)
// console.log(this === window)

// console.log(this instanceof Object)
// console.log(Math.random())
// console.log(this.Math.random())

// console.log(this.Math)
// console.log(window.Math)
// console.log(this.Math === window.Math)

// var a = 1
// console.log(window.a)

// console.log(window.window)
// console.log(this.window)
// console.log(this.window === window.window)

//执行上下文
//进入执行上下文
//代码执行

// function foo(a) {
//   var b = 2
//   function c() { }
//   var d = function () { }
//   b = 3
// }

// foo(10)

// 进入时
// AO = {
//   arguments: {
//     0: 10,
//     length: 1
//   },
//   a: 10,
//   b: undefined,
//   //注意区别c和d的区别
//   c: reference to function() c{ },
//   d: undefined
// }

//代码执行阶段
// AO = {
//   arguments: {
//     0: 10,
//     length: 1
//   },
//   a: 10,
//   b = 3,
//   c: reference to function() c{ },
//   d: reference to FunctionExpresion "d"
// }

// function foo() {
//   console.log(a)
//   a = 1
// }

// function bar() {
//   a = 1
//   console.log(a)
// }

// bar()

//作用域链

// function foo() {
//   function bar() {

//   }
// }

// foo的作用域
// {
//   globalContext
// }

// bar的作用域链
// {
//   fooContext,
//   globalContext
// }

// var scope = "global scope"

// function checkScope() {
//   var scope2 = "local scope"
//   return scope2
// }

// checkScope()


//this

// var value = "global"
// var foo = {
//   value: "local",
//   bar: function () {
//     return this.value
//   },
//   bar2: () => {
//     return this.value
//   }
// }

// console.log(foo.bar())
// console.log(foo.bar2())

// var value = 1

// var foo = {
//   value: 2,
//   bar: function () {
//     return this.value
//   }
// }

// console.log(foo.bar())

// console.log((foo.bar)())

// console.log((foo.bar = foo.bar)())

// console.log((false || foo.bar)())

// console.log((foo.bar, foo.bar)())


// function Foo() {
//   getName = function () {
//     console.log(1)
//   }
//   console.log(this)
//   return this
// }

// Foo.prototype.getName = function () {
//   console.log(3)
// }

// function getName() {
//   console.log(5)
// }

// new Foo().getName()

var name = "window"

var person1 = {
  name: "person1",
  show1: function () {
    console.log(this.name)
  },
  show2: () => {
    console.log(this.name)
  },
  show3: function () {
    return function () {
      console.log(this.name)
    }
  },
  show4: function () {
    return () => {
      console.log(this.name)
    }
  },
  show5: () => {
    return () => {
      console.log(this.name)
    }
  },
  show6: () => {
    return function () {
      console.log(this.name)
    }
  },
  show7: function () {
    var fn = function () {
      console.log(this.name)
    }
    return fn
  },
  show8: function () {
    var fn = function () {
      console.log(this.name)
    }
    return fn()
  },
  show9: function () {
    var fn = () => {
      console.log(this.name)
    }
    return fn
  }
}

var person2 = {
  name: "person2"
}

// person1.show1()
// person1.show1.call(person2)

// person1.show2()
// person1.show2.call(person2)

// person1.show3()()
// person1.show3().call(person2)
// person1.show3.call(person2)()

// person1.show4()()
// person1.show4().call(person2)
// person1.show4.call(person2)()

// person1.show5()()
// person1.show5().call(person2)
// person1.show5.call(person2)()

// person1.show6()()
// person1.show6().call(person2)
// person1.show6.call(person2)()

// person1.show7()()
// person1.show8()
// person1.show9()()



// function Foo() {
//   getName = function () {
//     console.log(1)
//   }
//   return this
// }
// Foo.getName = function () {
//   console.log(2)
// }
// Foo.prototype.getName = function () {
//   console.log(3)
// }
// var getName = function () {
//   console.log(4)
// }
// function getName() {
//   console.log(5)
// }

// Foo.getName()
// getName()
// Foo().getName()
// getName()
// new Foo.getName()
// new Foo().getName()
// new new Foo().getName()


//执行上下文

// var scope = "global scope"
// function checkscope() {
//   var scope = "local scope"
//   function f() {
//     return scope
//   }
//   return f()
// }
// console.log(checkscope())

// function checkscope() {
//   var scope = "local scope"
//   function f() {
//     return scope
//   }
//   return f
// }
// console.log(checkscope()())

// function test() {
//   var a = 10
//   delete a
//   return a
// }

// console.log(test())


//call apply

// var foo = {
//   value: 1
// }
// function bar() {
//   console.log(this.value)
// }

// bar.call(foo)

// var foo = {
//   value: 1,
//   bar: function () {
//     console.log(this.value)
//   }
// }

// foo.bar()

// var foo = {
//   value: 1,
//   age: 29
// }

// Function.prototype.call2 = function (context) {
//   var that = this
//   context.fn = that
//   context.fn()
//   delete context.fn
// }

// function bar() {
//   console.log(this.value)
//   console.log(this.age)
// }

// bar.call2(foo)

// function bar(name, age) {
//   console.log("say: " + this.say)
//   console.log("name: " + name)
//   console.log("age: " + age)
// }

// Function.prototype.call3 = function (context, ...args) {
//   context.fn = this
//   context.fn(...args)
//   delete context.fn
// }

// var foo = {
//   say: "kuangjiajia"
// }

// bar.call3(foo, "kuangjunjia", 20)

// Function.prototype.call4 = function (context, ...args) {
//   if (context === null) {
//     this()
//     return
//   }
//   context.fn = this
//   context.fn(...args)
//   delete context.fn
// }

// var value = 123

// function bar() {
//   console.log(this.value)
// }

// bar.call4(null)

// function demo() {
//   console.log(123)
//   return function () {
//     console.log(456)
//   }
// }

// (new demo())()



