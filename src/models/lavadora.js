'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Lavadora extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Lavadora.init({
    model: DataTypes.STRING,
    name: DataTypes.STRING,
    year: DataTypes.NUMBER,
    time_end: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Lavadora',
    timestamps: false
  });
  return Lavadora;
};