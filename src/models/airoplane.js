'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Airoplane extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Airoplane.init({
    modelNo: {
      type : DataTypes.STRING,
      allowNull :false
    },
    capacity: {
      type : DataTypes.INTEGER,
      defaultValue :0,
      validate :{
        min :100,
        max :1000
      }
    }
    
  }, {
    sequelize,
    modelName: 'Airoplane',
  });
  return Airoplane;
};