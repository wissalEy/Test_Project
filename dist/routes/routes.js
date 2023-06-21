"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var userRoutes_1 = __importDefault(require("./userRoutes"));
var routes = function () {
    var router = (0, express_1.Router)();
    router.use("/users", (0, userRoutes_1.default)());
    return router;
};
exports.default = routes;
//# sourceMappingURL=routes.js.map