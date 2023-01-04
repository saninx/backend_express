/** @format */

"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      user_uuid: {
        unique: true,
        type: Sequelize.UUID,
      },
      password: {
        type: Sequelize.STRING,
      },
      nom: {
        type: Sequelize.STRING,
      },
      prenoms: {
        type: Sequelize.STRING,
      },
      profils_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "profils",
          key: "id",
        },
      },
      email: {
        unique: true,
        type: Sequelize.STRING,
      },
      tel: {
        type: Sequelize.INTEGER,
      },
      adresse: {
        type: Sequelize.STRING,
      },
      cnx_date: {
        type: Sequelize.DATE,
      },
      dcnx_date: {
        type: Sequelize.DATE,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("users");
  },
};
