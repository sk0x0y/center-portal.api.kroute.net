"use strict";
module.exports = (sequelize, Sequelize) => {
  const Menu = sequelize.define(
    "Menu",
    {
      idx: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        unique: true,
        autoIncrement: true
      },
      depth1: {
        type: Sequelize.STRING,
        unique: true
      },
      depth2: {
        type: Sequelize.STRING
      },
      depth3: {
        type: Sequelize.STRING
      },
      level: {
        type: Sequelize.INTEGER
      }
    },
    {
      paranoid: true,
      underscored: true
    }
  );
  Menu.associate = function(models) {
    // associations can be defined here
  };
  return Menu;
};
