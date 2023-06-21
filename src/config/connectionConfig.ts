import { DataSource } from "typeorm";

export const myConnection = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "",
  database: "ormtest",
  entities: ["dist/entities/*.js"],
  synchronize: true,
  logging: true,
});
