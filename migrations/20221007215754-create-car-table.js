//Code was written by Muhammad Sindida Hilmy
//Note: Semua keterangan ada di README.md

"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("notes", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },

      Nama: {
        type: Sequelize.STRING,
      },

      Harga: {
        type: Sequelize.STRING,
      },

      Ukuran: {
        type: Sequelize.STRING,
      },

      Foto: {
        type: Sequelize.STRING,
      },

      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },

      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("notes");
  },
};