const { DataTypes, UUIDV4 } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "supplier",
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
      allowCount: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      deliveryDays: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false
      },
      minimumPurchase: {
        type: DataTypes.STRING,
        allowNull: true
      },
      annotations: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      transactions: {
        type: DataTypes.JSON,
        allowNull: false
      }
    },
    {
      timestamps: false,
    }
  );
};