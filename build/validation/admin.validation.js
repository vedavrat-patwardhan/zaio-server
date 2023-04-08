"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.idSchema = exports.updateAdminSchema = exports.loginSchema = exports.createAdminSchema = void 0;
const tslib_1 = require("tslib");
const joi_1 = (0, tslib_1.__importDefault)(require("joi"));
const mongoose_1 = require("mongoose");
exports.createAdminSchema = joi_1.default.object({
    username: joi_1.default.string().required(),
    firstName: joi_1.default.string().required(),
    lastName: joi_1.default.string().required(),
    phone: joi_1.default.number().required(),
    email: joi_1.default.string().email().required(),
    password: joi_1.default.string().min(8).required(),
    role: joi_1.default.string().required(),
});
exports.loginSchema = joi_1.default.object({
    email: joi_1.default.string().email().required(),
    password: joi_1.default.string().required(),
});
exports.updateAdminSchema = joi_1.default.object({
    username: joi_1.default.string(),
    firstName: joi_1.default.string(),
    lastName: joi_1.default.string(),
    phone: joi_1.default.number(),
    email: joi_1.default.string().email(),
    password: joi_1.default.string().min(6),
    role: joi_1.default.string(),
});
exports.idSchema = joi_1.default.object({
    id: joi_1.default.string()
        .custom((value, helpers) => {
        if (!(0, mongoose_1.isValidObjectId)(value)) {
            return helpers.error('any.invalid');
        }
        return value;
    })
        .required(),
});
//# sourceMappingURL=admin.validation.js.map