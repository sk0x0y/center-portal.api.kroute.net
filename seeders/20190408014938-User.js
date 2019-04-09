"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    const initialData = [
      {
        email: "rayxkr@kroute.kr",
        first_name: "Ray",
        last_name: "Chris",
        password: "sphw7100",
        division: "Operation",
        job: "Leader",
        level: 10,
        created_at: Sequelize.fn("NOW")
      },
      {
        email: "ysj@kroute.kr",
        first_name: "SeokJun",
        last_name: "Yang",
        password: "alfkzmf7",
        division: "Operation",
        job: "Leader",
        level: 10,
        created_at: Sequelize.fn("NOW")
      }
    ];

    return queryInterface.bulkInsert("users", initialData, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete("users", null, {});
  }
};
