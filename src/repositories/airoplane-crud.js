const CrudRepositories =require('./curd-repositories');

const {Airoplane} =require('../models');



class AiroplaneRepositories extends  CrudRepositories{
    constructor(){
        super(Airoplane);
    }
}

module.exports=AiroplaneRepositories;





