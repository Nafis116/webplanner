const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const userValidator = require('./services/validators');
const TaskController = require('./controllers/tasks-controllers')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/tasks', (req, res, next) => {
  res.send('Hello');
});

app.post('/api/tasks', userValidator, TaskController.create);


app.listen(4000, () => {
  console.log('Server started on 4000 port')
});