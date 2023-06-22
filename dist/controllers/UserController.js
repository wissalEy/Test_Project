"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var User_1 = require("../entities/User");
var connectionConfig_1 = require("../config/connectionConfig");
var getAll = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var userRepository, users, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                userRepository = connectionConfig_1.myConnection.getRepository(User_1.User);
                return [4 /*yield*/, userRepository.find()];
            case 1:
                users = _a.sent();
                return [2 /*return*/, res.status(200).json(users)];
            case 2:
                error_1 = _a.sent();
                console.error(error_1);
                return [2 /*return*/, res.status(500).json({ message: error_1.message })];
            case 3: return [2 /*return*/];
        }
    });
}); };
var getUserById = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var userID, userRepository, foundUser, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                userID = Number(req.params.id);
                userRepository = connectionConfig_1.myConnection.getRepository(User_1.User);
                return [4 /*yield*/, userRepository.findOneBy({ id: userID })];
            case 1:
                foundUser = _a.sent();
                if (foundUser) {
                    return [2 /*return*/, res.status(200).json(foundUser)];
                }
                else {
                    return [2 /*return*/, res
                            .status(404)
                            .json({ message: "no user can be found with this id" })];
                }
                return [3 /*break*/, 3];
            case 2:
                error_2 = _a.sent();
                return [2 /*return*/, res.status(500).json({ message: error_2.message })];
            case 3: return [2 /*return*/];
        }
    });
}); };
var addUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var userRepository, user, saveUser, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                userRepository = connectionConfig_1.myConnection.getRepository(User_1.User);
                user = userRepository.create(req.body);
                return [4 /*yield*/, userRepository.save(user)];
            case 1:
                saveUser = _a.sent();
                return [2 /*return*/, res.status(201).json(saveUser)];
            case 2:
                error_3 = _a.sent();
                return [2 /*return*/, res.status(500).json({ message: error_3.message })];
            case 3: return [2 /*return*/];
        }
    });
}); };
var editUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var userID, userRepository, foundUser, userToBeSaved, updatedUser, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 5, , 6]);
                userID = Number(req.params.id);
                userRepository = connectionConfig_1.myConnection.getRepository(User_1.User);
                return [4 /*yield*/, userRepository.findOneBy({ id: userID })];
            case 1:
                foundUser = _a.sent();
                if (!foundUser) return [3 /*break*/, 3];
                userToBeSaved = __assign(__assign({}, req.body), { id: userID });
                return [4 /*yield*/, userRepository.save(userToBeSaved)];
            case 2:
                updatedUser = _a.sent();
                return [2 /*return*/, res.status(200).json(updatedUser)];
            case 3: return [2 /*return*/, res
                    .status(404)
                    .json({ message: "no user can be found with this id" })];
            case 4: return [3 /*break*/, 6];
            case 5:
                error_4 = _a.sent();
                return [2 /*return*/, res.status(500).json({ message: error_4.message })];
            case 6: return [2 /*return*/];
        }
    });
}); };
var deleteUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var userID, userRepository, foundUser, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 5, , 6]);
                userID = Number(req.params.id);
                userRepository = connectionConfig_1.myConnection.getRepository(User_1.User);
                return [4 /*yield*/, userRepository.findOneBy({ id: userID })];
            case 1:
                foundUser = _a.sent();
                if (!foundUser) return [3 /*break*/, 3];
                return [4 /*yield*/, userRepository.delete(foundUser)];
            case 2:
                _a.sent();
                return [2 /*return*/, res.status(204).send()];
            case 3: return [2 /*return*/, res
                    .status(404)
                    .json({ message: "User can be found with this id" })];
            case 4: return [3 /*break*/, 6];
            case 5:
                error_5 = _a.sent();
                return [2 /*return*/, res.status(500).json({ message: error_5.message })];
            case 6: return [2 /*return*/];
        }
    });
}); };
var UserController = {
    getAll: getAll,
    getUserById: getUserById,
    addUser: addUser,
    editUser: editUser,
    deleteUser: deleteUser,
};
exports.default = UserController;
//# sourceMappingURL=UserController.js.map