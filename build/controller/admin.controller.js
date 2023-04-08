"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAdminById = exports.updateAdmin = exports.getAdminById = exports.getAllAdmins = exports.loginAdmin = exports.createAdmin = void 0;
const tslib_1 = require("tslib");
const admin_model_1 = require("../model/admin.model");
const apiError_1 = require("../utils/apiError");
const apiResponse_1 = require("../utils/apiResponse");
const catchAsync_1 = (0, tslib_1.__importDefault)(require("../utils/catchAsync"));
const jsonwebtoken_1 = (0, tslib_1.__importDefault)(require("jsonwebtoken"));
const bcrypt_1 = (0, tslib_1.__importDefault)(require("bcrypt"));
const config_1 = (0, tslib_1.__importDefault)(require("../config/config"));
exports.createAdmin = (0, catchAsync_1.default)((req, res, next) => (0, tslib_1.__awaiter)(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const existingAdmin = yield admin_model_1.AdminModel.findOne({ email }).lean().exec();
    if (existingAdmin) {
        throw next(new apiError_1.BadRequestError('Admin with this email already exists'));
    }
    const saltRounds = 10;
    const passwordHash = yield bcrypt_1.default.hash(password, saltRounds);
    const admin = new admin_model_1.AdminModel(Object.assign(Object.assign({}, req.body), { password: passwordHash }));
    yield admin.save();
    return new apiResponse_1.SuccessResponse('Admin created successfully', {
        data: admin,
    }).send(res);
}));
exports.loginAdmin = (0, catchAsync_1.default)((req, res) => (0, tslib_1.__awaiter)(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const admin = yield admin_model_1.AdminModel.findOne({ email }).lean().exec();
    if (!admin) {
        throw new apiError_1.NotFoundError(`Admin with ${email} not found`);
    }
    const validPassword = yield bcrypt_1.default.compare(password, admin.passwordHash);
    if (!validPassword) {
        throw new apiError_1.AuthFailureError(`Invalid password`);
    }
    const token = jsonwebtoken_1.default.sign({ _id: admin._id }, config_1.default.jwt.secret, {
        expiresIn: config_1.default.jwt.accessExpirationMinutes,
    });
    return new apiResponse_1.SuccessResponse('success', { token, admin }).send(res);
}));
exports.getAllAdmins = (0, catchAsync_1.default)((_req, res, next) => (0, tslib_1.__awaiter)(void 0, void 0, void 0, function* () {
    const admins = yield admin_model_1.AdminModel.find().lean().exec();
    if (!admins) {
        throw next(new apiError_1.InternalError('No admins found'));
    }
    return new apiResponse_1.SuccessResponse('success', { data: admins }).send(res);
}));
exports.getAdminById = (0, catchAsync_1.default)((req, res, next) => (0, tslib_1.__awaiter)(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const admin = yield admin_model_1.AdminModel.findById(id).populate('role').lean().exec();
    if (!admin) {
        throw next(new apiError_1.NotFoundError('Admin not found'));
    }
    return new apiResponse_1.SuccessResponse('success', { data: admin }).send(res);
}));
exports.updateAdmin = (0, catchAsync_1.default)((req, res, next) => (0, tslib_1.__awaiter)(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const admin = yield admin_model_1.AdminModel.findByIdAndUpdate(id, req.body, { new: true })
        .lean()
        .exec();
    if (!admin) {
        throw next(new apiError_1.NotFoundError('Admin not found'));
    }
    return new apiResponse_1.SuccessResponse('Admin updated successfully', {
        data: admin,
    }).send(res);
}));
exports.deleteAdminById = (0, catchAsync_1.default)((req, res, next) => (0, tslib_1.__awaiter)(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const admin = yield admin_model_1.AdminModel.findByIdAndDelete(id).lean().exec();
    if (!admin) {
        throw next(new apiError_1.NotFoundError('Admin not found'));
    }
    return new apiResponse_1.SuccessResponse('success', {
        message: 'Admin deleted successfully',
    }).send(res);
}));
//# sourceMappingURL=admin.controller.js.map