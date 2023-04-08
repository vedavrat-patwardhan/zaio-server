"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const otp_controller_1 = require("../../controller/otp.controller");
const validate_1 = (0, tslib_1.__importDefault)(require("../../middleware/validate"));
const otp_validation_1 = require("../../validation/otp.validation");
const express_1 = require("express");
const otpRouter = (0, express_1.Router)();
otpRouter.post('/create', (0, validate_1.default)({ body: otp_validation_1.createOtpSchema }), otp_controller_1.createOtp);
otpRouter.post('/validate', (0, validate_1.default)({ body: otp_validation_1.validateOtpSchema }), otp_controller_1.validateOtp);
exports.default = otpRouter;
//# sourceMappingURL=otp.route.js.map