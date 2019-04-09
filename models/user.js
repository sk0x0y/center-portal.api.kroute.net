"use strict";
module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define(
    "User",
    {
      idx: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        unique: true
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      division: {
        type: Sequelize.STRING
      },
      job: {
        type: Sequelize.STRING
      },
      level: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      banned: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: true
      },
      deletedAt: {
        type: Sequelize.DATE,
        allowNull: true
      }
    },
    {
      timestamps: false,
      paranoid: true,
      underscored: true
    }
  );
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};
