// models/employee.js

module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define('Employee', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    age: DataTypes.INTEGER,
  }, {
    timestamps: false, // remove obrigatoriedade dos campos 'createdAt' e 'updatedAt'
    tableName: 'Employees',
    underscored: true,
  });

  Employee.associate = (models) => {
    Employee.hasOne(models.Adress, 
      { foreingKey: 'employeeId', as: 'address' });
  };

  return Employee;
};

// 'use strict';
// const {
//   Model, DataTypes
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Employee extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   Employee.init({
//     firstName: DataTypes.STRING
//   }, {
//     sequelize,
//     modelName: 'Employee',
//   });
//   return Employee;
// };