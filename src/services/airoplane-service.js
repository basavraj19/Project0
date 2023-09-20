const {AiroplaneRepositories}=require('../repositories');

const {StatusCodes} =require('http-status-codes');

const  AppError =require('../utils/error/app-error');

const Airoplane =new AiroplaneRepositories();

async function createAiroplane(data)
{
    try {
       const airoplane =await Airoplane.create(data);  
       return airoplane;
    } catch (error) {
        if(error.name == 'TypeError')
        {
        throw new AppError("Error Occured cannot create model",StatusCodes.INTERNAL_SERVER_ERROR);
        }
        if(error.name == 'SequelizeValidationError')
        {
            let explaintion =[];
            error.errors.forEach(element => {
                explaintion.push(element.message);
            });
            throw new AppError(explaintion,StatusCodes.BAD_REQUEST);
        }
        console.log(error);
        throw error;
    }
}

module.exports ={
    createAiroplane
}
