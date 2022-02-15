const { body } = require('express-validator/check');

module.exports = [
  body('namesTask').isString().notEmpty().trim().isLength({min: 5}).withMessage('Наименование должно быть длиннее 5 символов')
]