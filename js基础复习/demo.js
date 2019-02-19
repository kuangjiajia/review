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


function Foo() {
  getName = function () {
    console.log(1)
  }
  console.log(this)
  return this
}

Foo.prototype.getName = function () {
  console.log(3)
}

function getName() {
  console.log(5)
}

new Foo().getName()