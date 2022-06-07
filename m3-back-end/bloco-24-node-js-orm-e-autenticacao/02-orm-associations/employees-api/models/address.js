// models/Address.js

module.exports = (sequelize, DataTypes) => {
  const Address = sequelize.define('Address', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    city: DataTypes.STRING,
    street: DataTypes.STRING,
    number: DataTypes.INTEGER,
    employeeId: { type: DataTypes.INTEGER, foreignKey: true },
    // declaração da FK aqui é opcional no model
  },
  {
    timestamps: false,
    tableName: 'Addresses',
    underscored: true,
  });

  // porém, declaração da FK aqui é necessária
  Address.associate = (models) => {
    Address.belongsTo(models.Employee,
      { foreignKey: 'employeeId', as: 'employees' });
  };

  return Address;
};

// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Address extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   Address.init({
//     city: DataTypes.STRING
//   }, {
//     sequelize,
//     modelName: 'Address',
//   });
//   return Address;
// };