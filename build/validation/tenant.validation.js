"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTenantSchema = exports.createTenantSchema = exports.loginTenantSchema = void 0;
const tslib_1 = require("tslib");
const joi_1 = (0, tslib_1.__importDefault)(require("joi"));
exports.loginTenantSchema = joi_1.default.object({
    email: joi_1.default.string().email().required(),
    password: joi_1.default.string().required(),
});
exports.createTenantSchema = joi_1.default.object({
    email: joi_1.default.string().email().required(),
    phoneNo: joi_1.default.number().required(),
    password: joi_1.default.string()
        .min(8)
        .pattern(/^(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/)
        .required()
        .messages({
        'string.base': 'Password must be a string',
        'string.empty': 'Password is required',
        'string.min': 'Password must have at least {{#limit}} characters',
        'any.required': 'Password is required',
        'string.pattern.base': 'Password must contain at least 1 symbol, 1 lowercase letter, 1 uppercase letter and 1 number',
    }),
});
exports.updateTenantSchema = joi_1.default.object({
    name: joi_1.default.string().optional(),
    description: joi_1.default.string().allow('').optional(),
});
//# sourceMappingURL=tenant.validation.js.map