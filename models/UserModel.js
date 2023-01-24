import Sequelize from "sequelize";
import db from "../config/Database.js";

const User = db.define("users", {
  nim: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      is: /^[0-9]*$/  //pakai regex karena NIM tidak bisa ditambah abjad
    }
  },
  nama: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
});

User.sync({ force: false }).catch((error) => {
  console.log(error);
});

export default User;
