const { Tasks } = require('../models');
const { body, validationResult } = require('express-validator/check');

function create(req, res, next) {
  const errors = validationResult(req);
  if(!errors.isEmpty()){
    return res.status(422).json({errors: errors.array()})
  } 
    res.send(req.body);
  }
  
  Tasks.findOne({where: { namesTask: req.body.namesTask }})
       .then(task => {
         if (task) {
           return Promise.reject({statusCode: 422, message:"Такая задача уже создана"});
         } else {
           const { namesTask, inCharge, deadline, stages1, result } = req.body;
           return Tasks.create({ namesTask, inCharge, deadline, stages1, result })
         }
       })
       .then(task => {
         res.json(task);
       })
       .catch(error => {
         res.status(error.statusCode || 400).json({error: error.message});
       })
}

module.exports = {
  create
}