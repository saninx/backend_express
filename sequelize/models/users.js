/** @format */

"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Profils, { foreignKey: "profil_id" });
    }
  }
  Users.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      user_uuid: DataTypes.UUID,
      password: DataTypes.STRING,
      nom: DataTypes.STRING,
      prenoms: DataTypes.STRING,
      profils_id: DataTypes.INTEGER,
      email: DataTypes.STRING,
      tel: DataTypes.INTEGER,
      adresse: DataTypes.STRING,
      photo: DataTypes.STRING,
      cnx_date: DataTypes.DATE,
      dcnx_date: DataTypes.DATE,
      key: DataTypes.STRING,
      key_validity: DataTypes.DATE,
    },
    {
      indexes: [
        // Create a unique index on email
        {
          unique: true,
          fields: ["email"],
        },
        {
          unique: true,
          fields: ["id"],
        },
        {
          unique: true,
          fields: ["user_uuid"],
        },

        // A BTREE index with a ordered field
        {
          name: "user_index",
          method: "BTREE",
          fields: ["id"],
        },
      ],
      sequelize,
      modelName: "Users",
      underscored: true,
    }
  );
  return Users;
};
