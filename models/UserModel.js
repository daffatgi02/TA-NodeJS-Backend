import Sequelize from "sequelize";
import db from "../config/Database.js";

const User = db.define("user", {
  nim: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      is: /^[0-9]*$/  //pakai regex karena NIM tidak boleh text
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
