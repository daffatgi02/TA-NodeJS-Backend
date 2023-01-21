import Sequelize from "sequelize";
import db from "../config/Database.js";

const User = db.define("user", {
  nama: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  umur: {
    type: Sequelize.INTEGER,
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
