const bcrypt = require("bcrypt");
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          username: "John Doe",
          email: "john@admin.com",
          password: bcrypt.hashSync("Digital2022!", 10),
          isAdmin: true,
        },
        {
          username: "Daniel Fuentes",
          email: "daniel@fuentes.com",
          password: bcrypt.hashSync("Digital2022!", 10),
          isAdmin: false,
        },
        {
          username: "Eduardo Virgilio",
          email: "eduardo@virgilio.com",
          password: bcrypt.hashSync("Digital2022!", 10),
          isAdmin: false,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
