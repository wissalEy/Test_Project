import { Request, Response, NextFunction } from 'express';
import { body, validationResult } from 'express-validator';

export const validateUser = [
  body('firstName')
    .notEmpty().withMessage('First name is required')
    .isString().withMessage('First name must be a string')
    .isLength({ max: 10 }).withMessage('First name should not exceed 10 characters')
    .matches(/^[a-zA-Z\s]+$/).withMessage('First name should only contain letters and spaces')
    .custom((value) => value.trim().length !== 0).withMessage('First name cannot be just whitespace'),

  body('lastName')
    .notEmpty().withMessage('Last name is required')
    .isString().withMessage('Last name must be a string')
    .isLength({ max: 10 }).withMessage('Last name should not exceed 10 characters')
    .matches(/^[a-zA-Z\s]+$/).withMessage('Last name should only contain letters and spaces')
    .custom((value) => value.trim().length !== 0).withMessage('Last name cannot be just whitespace'),

  body('gnder')
    .notEmpty().withMessage('Gender is required')
    .isString().withMessage('Gender must be a string')
    .isIn(['male', 'female', 'other']).withMessage('Gender should be one of: male, female, other'),

  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];
