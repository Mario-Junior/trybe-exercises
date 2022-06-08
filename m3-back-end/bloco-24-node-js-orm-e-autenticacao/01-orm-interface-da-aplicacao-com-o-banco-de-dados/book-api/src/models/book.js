const Book = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    pageQuantity: DataTypes.INTEGER    
  }, {
    underscored: true,
    tableName: 'Books',
  });

  return Book;
};

module.exports = Book;
