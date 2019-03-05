const EventEmitter = require("events")

class Person extends EventEmitter { }

var x = new Person()

x.on("say", () => {
  console.log("zzx sb")
})
x.on("say", () => {
  console.log("lx sb")
})


x.emit("say")