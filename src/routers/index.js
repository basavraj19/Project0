const express =require('express');

const router =express.Router();

const v1Routers =require('./v1');

const airoplane =require('./airoplane');

router.use('/airoplane',airoplane);

router.use('/v1',v1Routers);

module.exports =router;
