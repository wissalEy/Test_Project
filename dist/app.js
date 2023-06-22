"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var express_1 = __importDefault(require("express"));
var dotenv_1 = require("dotenv");
var cors_1 = __importDefault(require("cors"));
var connectionConfig_1 = require("./config/connectionConfig");
var routes_1 = __importDefault(require("./routes/routes"));
(0, dotenv_1.config)();
var PORT = Number(process.env.PORT) || 3000;
var app = (0, express_1.default)();
// App Configuration
app.use((0, cors_1.default)());
// Use JSON middleware to parse request bodies
app.use(express_1.default.json());
app.use("/", (0, routes_1.default)());
//Database connection
connectionConfig_1.myConnection
    .initialize()
    .then(function () {
    console.log("Data Source has been initialized");
})
    .catch(function (err) {
    console.error("Error during Data Source initialization:", err);
});
var server = app.listen(PORT, function () {
    return console.log("Server is on Port ".concat(PORT));
});
//# sourceMappingURL=app.js.map