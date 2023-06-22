"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUser = void 0;
var express_validator_1 = require("express-validator");
// Middleware function for validating user entity attributes
exports.validateUser = [
    (0, express_validator_1.body)('firstName')
        .notEmpty().withMessage('First name is required')
        .isString().withMessage('First name must be a string')
        .isLength({ max: 10 }).withMessage('First name should not exceed 10 characters')
        .matches(/^[a-zA-Z\s]+$/).withMessage('First name should only contain letters and spaces')
        .custom(function (value) { return value.trim().length !== 0; }).withMessage('First name cannot be just whitespace'),
    (0, express_validator_1.body)('lastName')
        .notEmpty().withMessage('Last name is required')
        .isString().withMessage('Last name must be a string')
        .isLength({ max: 10 }).withMessage('Last name should not exceed 10 characters')
        .matches(/^[a-zA-Z\s]+$/).withMessage('Last name should only contain letters and spaces')
        .custom(function (value) { return value.trim().length !== 0; }).withMessage('Last name cannot be just whitespace'),
    (0, express_validator_1.body)('gnder')
        .notEmpty().withMessage('Gender is required')
        .isString().withMessage('Gender must be a string')
        .isIn(['male', 'female', 'other']).withMessage('Gender should be one of: male, female, other'),
    function (req, res, next) {
        var errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];
//# sourceMappingURL=userMiddleware.js.map