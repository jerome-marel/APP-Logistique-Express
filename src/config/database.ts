import { Sequelize } from "sequelize";

const sequelize = new Sequelize("logistics_db", "user", "password", {
  host: "localhost",
  dialect: "postgres",
});

export default sequelize;
