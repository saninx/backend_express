/** @format */

"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Profils extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Users, { foreignKey: "profil_id" });
    }
  }
  Profils.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      profil_code: DataTypes.STRING,
      profil_desctiption: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Profils",
      underscored: true,
    }
  );
  return Profils;
};
