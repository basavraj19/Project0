const express =require('express');

const router =express.Router();

const {createAiroplane} =require('../controllers');

const {Validator} =require('../middleware');

router.post('/',Validator.requestValidator,createAiroplane);

module.exports =router;