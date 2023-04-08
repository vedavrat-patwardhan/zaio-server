"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateOtpSchema = exports.createOtpSchema = void 0;
const tslib_1 = require("tslib");
const joi_1 = (0, tslib_1.__importDefault)(require("joi"));
exports.createOtpSchema = joi_1.default.object({
    userType: joi_1.default.string().valid('admin', 'tenant', 'user').required(),
    userId: joi_1.default.string().optional(),
    phoneNo: joi_1.default.number(),
    email: joi_1.default.string().email(),
}).or('phoneNo', 'email');
exports.validateOtpSchema = joi_1.default.object({
    otp: joi_1.default.string().required(),
    userType: joi_1.default.string().valid('admin', 'tenant', 'user').required(),
    userId: joi_1.default.string().required(),
});
//# sourceMappingURL=otp.validation.js.map