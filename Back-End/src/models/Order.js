const { DataTypes, UUIDV4 } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "order",
    {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: UUIDV4
      },
      order: {
        type: DataTypes.JSON,
        allowNull: false
      },
    },
    {
      timestamps: false,
    }
  );
};