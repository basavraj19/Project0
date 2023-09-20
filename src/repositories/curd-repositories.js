const { logger } =require('../config/logger');

class CrudRepositories{
    constructor(model)
    {
        this.model =model
    }
    
    async create(data)
    {
        const respone = await this.model.create(data);
        return respone;
    }
 
    async delete(id)
    {
        try {
            const respone = await this.model.destroy({
                where :{
                    id : id
                }
            });
             return respone;
        } catch (error) {
            console.log("Something went worng in CurdRepositories: destroy");
            throw error
        }
    }

    async get(id)
    {
        try {
            const respone = await this.model.findByPk(id)
             return respone;
        } catch (error) {
            console.log("Something went worng in CurdRepositories: get");
            throw error;
        }
    }

    async update(id,data)
    {
        try {
            const respone = await this.model.update(data,{
                where : {
                   id :id
                }
            })
             return respone;
        } catch (error) {
            console.log("Something went worng in CurdRepositories: update");
            throw error
        }
    }

}

module.exports = CrudRepositories;
