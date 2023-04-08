"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateOtp = exports.createOtp = void 0;
const tslib_1 = require("tslib");
const bcrypt_1 = (0, tslib_1.__importDefault)(require("bcrypt"));
const catchAsync_1 = (0, tslib_1.__importDefault)(require("../utils/catchAsync"));
const otp_model_1 = (0, tslib_1.__importDefault)(require("../model/otp.model"));
const apiResponse_1 = require("../utils/apiResponse");
const admin_model_1 = require("../model/admin.model");
const tenant_model_1 = require("../model/tenant.model");
const user_model_1 = require("../model/user.model");
const apiError_1 = require("../utils/apiError");
const saltRounds = 10;
exports.createOtp = (0, catchAsync_1.default)((req, res, next) => (0, tslib_1.__awaiter)(void 0, void 0, void 0, function* () {
    const { phoneNo, email, userType } = req.body;
    let user;
    switch (userType) {
        case 'admin':
            user = yield admin_model_1.AdminModel.findOne({
                $or: [{ phoneNo }, { email }],
            })
                .lean()
                .exec();
            if (!user) {
                user = yield admin_model_1.AdminModel.create({ phoneNo, email });
            }
            break;
        case 'tenant':
            user = yield tenant_model_1.TenantModel.findOne({
                $or: [{ phoneNo }, { email }],
            })
                .lean()
                .exec();
            if (!user) {
                user = yield tenant_model_1.TenantModel.create({ phoneNo, email });
            }
            break;
        case 'user':
            user = yield user_model_1.UserModel.findOne({
                $or: [{ phoneNo }, { email }],
            })
                .lean()
                .exec();
            if (!user) {
                user = yield user_model_1.UserModel.create({ phoneNo, email });
            }
            break;
        default:
            throw next(new apiError_1.BadRequestError('Invalid userType'));
    }
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    console.log('otp', otp);
    const hashedOtp = yield bcrypt_1.default.hash(otp, saltRounds);
    const newOtp = yield otp_model_1.default.create({
        userId: user._id,
        userType,
        otp: hashedOtp,
        expiresAt: new Date(Date.now() + 15 * 60 * 1000),
    });
    return new apiResponse_1.SuccessResponse('OTP sent successfully', newOtp).send(res);
}));
exports.validateOtp = (0, catchAsync_1.default)((req, res) => (0, tslib_1.__awaiter)(void 0, void 0, void 0, function* () {
    const { userType, userId, otp } = req.body;
    const existingOtp = yield otp_model_1.default.findOne({ userType, userId })
        .select('+otp')
        .exec();
    if (!existingOtp) {
        return res.status(400).json({ message: 'OTP not found' });
    }
    const isMatch = yield bcrypt_1.default.compare(otp, existingOtp.otp);
    if (!isMatch) {
        return res.status(400).json({ message: 'Invalid OTP' });
    }
    yield existingOtp.delete();
    return new apiResponse_1.SuccessMsgResponse('OTP validated successfully').send(res);
}));
//# sourceMappingURL=otp.controller.js.map