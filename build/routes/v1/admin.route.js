"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminRouter = void 0;
const tslib_1 = require("tslib");
const express_1 = require("express");
const admin_validation_1 = require("../../validation/admin.validation");
const validate_1 = (0, tslib_1.__importDefault)(require("../../middleware/validate"));
const admin_controller_1 = require("../../controller/admin.controller");
exports.adminRouter = (0, express_1.Router)();
exports.adminRouter.post('/create', (0, validate_1.default)({ body: admin_validation_1.createAdminSchema }), admin_controller_1.createAdmin);
exports.adminRouter.post('/login', (0, validate_1.default)({ body: admin_validation_1.loginSchema }), admin_controller_1.loginAdmin);
exports.adminRouter.get('/', admin_controller_1.getAllAdmins);
exports.adminRouter.get('/:id', (0, validate_1.default)({ params: admin_validation_1.idSchema }), admin_controller_1.getAdminById);
exports.adminRouter.patch('/:id', (0, validate_1.default)({ body: admin_validation_1.updateAdminSchema, params: admin_validation_1.idSchema }), admin_controller_1.updateAdmin);
exports.adminRouter.delete('/:id', (0, validate_1.default)({ params: admin_validation_1.idSchema }), admin_controller_1.deleteAdminById);
//# sourceMappingURL=admin.route.js.map