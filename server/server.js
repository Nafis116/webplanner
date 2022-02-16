const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const userValidator = require('./services/validators');
const TaskController = require('./controllers/tasks-controllers');
const mysql = require('mysql');

const connection = mysql.createConnection ({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'Admin',
  database: 'webplanner'
})

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connection.connect((err) => {
  if (!err) { 
    console.log("SUCCESS")
  }
  console.log(err)
});

app.get('/tasks', (req, res) => {
  connection.query('SELECT * FROM tasks',
  (err, data) => {
    if (!err) { 
      console.log(data)
    }
    console.log(err)
  })
});

// app.get('/tasks', (req, res) => {
//   const { namesTask, inCharge, deadline, stages1, result } = Newtask;
//   connection.query(`
//     INSERT INTO clients (namesTask, inCharge, deadline, stages1, result)
//     VALUES ('${namesTask}', '${inCharge}', '${deadline}', '${stages1}', '${result}')`,
//     (err, data) => {
//     if (!err) {
//     console.log(data);
//     }
//   });
// })

app.use(bodyParser.json());

app.post('/tasks', userValidator, TaskController.create);

app.listen(4000, () => {
  console.log('Server started on 4000 port')
});