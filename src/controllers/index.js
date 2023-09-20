const { AiroplaneService } = require('../services');

const {SuccessRespones ,ErrorRespones }=require('../utils/comman');

const { StatusCodes }=require('http-status-codes');

async function createAiroplane(req,res){
    try {
        const response = await AiroplaneService.createAiroplane({
            modelNo :req.body.modelNo,
            capacity : req.body.capacity
        });
        SuccessRespones.message ="Successfully create and we are inside controller";
        SuccessRespones.data =response;
        return res.status(StatusCodes.CREATED).json(SuccessRespones);
    } catch (error) {
        ErrorRespones.error =error;
        return res.status(error.statucode).json(ErrorRespones);
    }
}
module.exports ={
    createAiroplane
}