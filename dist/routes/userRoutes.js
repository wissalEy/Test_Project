"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var UserController_1 = __importDefault(require("../controllers/UserController"));
var userRoutes = function () {
    var router = (0, express_1.Router)();
    router.route("/")
        .get(UserController_1.default.getAll)
        .post(UserController_1.default.addUser);
    router
        .route("/:id")
        .get(UserController_1.default.getUserById)
        .put(UserController_1.default.editUser)
        .delete(UserController_1.default.deleteUser);
    return router;
};
exports.default = userRoutes;
//# sourceMappingURL=userRoutes.js.map