const { DataTypes, UUIDV4 } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "product",
    {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: UUIDV4,
      },
      name: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
      },
      available: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      expirationDate: {
        type: DataTypes.STRING(20),
        allowNull: true
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      img: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: true
      }
    },
    {
      timestamps: false,
    }
  );
};