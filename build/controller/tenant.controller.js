"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTenant = exports.updateTenant = exports.loginTenant = exports.createTenant = exports.getTenant = exports.getAllTenants = void 0;
const tslib_1 = require("tslib");
const bcrypt_1 = (0, tslib_1.__importDefault)(require("bcrypt"));
const apiResponse_1 = require("../utils/apiResponse");
const catchAsync_1 = (0, tslib_1.__importDefault)(require("../utils/catchAsync"));
const tenant_model_1 = require("../model/tenant.model");
const apiError_1 = require("../utils/apiError");
const jsonwebtoken_1 = (0, tslib_1.__importDefault)(require("jsonwebtoken"));
const config_1 = (0, tslib_1.__importDefault)(require("../config/config"));
const saltRounds = 10;
exports.getAllTenants = (0, catchAsync_1.default)((_req, res) => (0, tslib_1.__awaiter)(void 0, void 0, void 0, function* () {
    const tenants = yield tenant_model_1.TenantModel.find().lean().exec();
    if (!tenants || tenants.length === 0) {
        throw new apiError_1.NotFoundError('No tenants found');
    }
    return new apiResponse_1.SuccessResponse('success', tenants).send(res);
}));
exports.getTenant = (0, catchAsync_1.default)((req, res) => (0, tslib_1.__awaiter)(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const tenant = yield tenant_model_1.TenantModel.findById(id).lean().exec();
    if (!tenant) {
        throw new apiError_1.NotFoundError(`Tenant with id ${id} not found`);
    }
    return new apiResponse_1.SuccessResponse('success', { data: tenant }).send(res);
}));
exports.createTenant = (0, catchAsync_1.default)((req, res) => (0, tslib_1.__awaiter)(void 0, void 0, void 0, function* () {
    const { email, phoneNo, password } = req.body;
    const existingTenant = yield tenant_model_1.TenantModel.findOne({
        $or: [{ email }, { phoneNo }],
    })
        .lean()
        .exec();
    if (existingTenant) {
        throw new apiError_1.BadRequestError('Email or phone number is already registered');
    }
    const hashedPassword = yield bcrypt_1.default.hash(password, saltRounds);
    const tenant = yield tenant_model_1.TenantModel.create({
        email,
        phoneNo,
        password: hashedPassword,
    });
    return new apiResponse_1.SuccessResponse('success', tenant).send(res);
}));
exports.loginTenant = (0, catchAsync_1.default)((req, res) => (0, tslib_1.__awaiter)(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const tenant = yield tenant_model_1.TenantModel.findOne({ email }).lean().exec();
    if (!tenant) {
        throw new apiError_1.NotFoundError(`Tenant with ${email} not found`);
    }
    const validPassword = yield bcrypt_1.default.compare(password, tenant.password);
    if (!validPassword) {
        throw new apiError_1.AuthFailureError(`Invalid password`);
    }
    const token = jsonwebtoken_1.default.sign({ _id: tenant._id }, config_1.default.jwt.secret, {
        expiresIn: config_1.default.jwt.accessExpirationMinutes,
    });
    return new apiResponse_1.SuccessResponse('success', { token, tenant }).send(res);
}));
exports.updateTenant = (0, catchAsync_1.default)((req, res) => (0, tslib_1.__awaiter)(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { name, description, companyId, associations, product, sku, location, productImports, apiKey, } = req.body;
    const tenant = yield tenant_model_1.TenantModel.findByIdAndUpdate(id, {
        name,
        description,
        companyId,
        Associations: associations,
        Product: product,
        SKU: sku,
        Location: location,
        productImports,
        ApiKey: apiKey,
    }, { new: true })
        .lean()
        .exec();
    if (!tenant) {
        throw new apiError_1.NotFoundError(`Tenant with id ${id} not found`);
    }
    return new apiResponse_1.SuccessResponse('success', { data: tenant }).send(res);
}));
exports.deleteTenant = (0, catchAsync_1.default)((req, res) => (0, tslib_1.__awaiter)(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const tenant = yield tenant_model_1.TenantModel.findByIdAndDelete(id).lean().exec();
    if (!tenant) {
        throw new apiError_1.NotFoundError(`Tenant with id ${id} not found`);
    }
    return new apiResponse_1.SuccessResponse('success', {
        message: 'Tenant deleted successfully',
    }).send(res);
}));
//# sourceMappingURL=tenant.controller.js.map