const Koa = require('koa');
const app = new Koa();


app.use(async ctx => {
  ctx.body = '电影首页';
});

app.listen('3000')