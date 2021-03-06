'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Budget extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      
    }
  };
  Budget.init({
    incomes: DataTypes.NUMBER,
    expenses: DataTypes.NUMBER,
    balance: DataTypes.NUMBER,
    date: DataTypes.DATE,
    concept: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Budget',
  });
  return Budget;
};