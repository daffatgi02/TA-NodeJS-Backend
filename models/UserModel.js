import { Sequelize } from "sequelize";
import db from "../config/Database.js"

const {DataTypes}= Sequelize;

const User = db.define('user', {
    name: DataTypes.STRING,
    phone_number: DataTypes.INT,
    email: DataTypes.STRING
},{
    freezeTableName:true
})

export default User;

(async()=>{
    await db.sync();
})();