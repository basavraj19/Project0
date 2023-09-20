const { StatusCodes } =require('http-status-codes');

const {ErrorRespones}=require('../utils/comman');

const  AppError =require('../utils/error/app-error');

async function requestValidator(req,res,next)
{
    if(!req.body.modelNo)
    {
        ErrorRespones.message ="Something went worng";
        ErrorRespones.error= new AppError('Model No Not found Please enter the ModelNo',StatusCodes.BAD_REQUEST);
        return res.status( ErrorRespones.error.statucode).json(ErrorRespones);
    }
    next();
}

module.exports ={
    requestValidator
}