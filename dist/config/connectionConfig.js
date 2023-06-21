"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.myConnection = void 0;
var typeorm_1 = require("typeorm");
exports.myConnection = new typeorm_1.DataSource({
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
//# sourceMappingURL=connectionConfig.js.map