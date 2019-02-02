const Koa = require("koa")
const app = new Koa()
const useragent = require("koa-useragent")


app.use(useragent)

app.use(async (ctx, next) => {
  ctx.body = {
    name: "zzx"
  }
  console.log(require("util").inspect(ctx.userAgent))
})

app.listen(8899)