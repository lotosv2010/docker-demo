const Koa = require('koa');
const mysql = require('mysql');
const app = new Koa();

const connection = mysql.createConnection({
  host: 'db',
  user: 'nodeapp',
  password: '123456',
  database: 'nodeapp'
});

connection.connect();



app.use(async (ctx) => {
  connection.query('SELECT 1+1 AS solution', (error, result) => {
    if(error) throw error;
    console.log('the solution is: ', result[0].solution);
  })
  connection.end();
  ctx.body = `welcome docker app`
})

app.listen(3000, () => {
  console.log(`the port 3000 is started`);
})