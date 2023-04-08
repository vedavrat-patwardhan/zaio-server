"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const tenant_controller_1 = require("../../controller/tenant.controller");
const auth_1 = (0, tslib_1.__importDefault)(require("../../middleware/auth"));
const validate_1 = (0, tslib_1.__importDefault)(require("../../middleware/validate"));
const tenant_validation_1 = require("../../validation/tenant.validation");
const express_1 = require("express");
const tenantRouter = (0, express_1.Router)();
tenantRouter.post('/register', (0, validate_1.default)({ body: tenant_validation_1.createTenantSchema }), tenant_controller_1.createTenant);
tenantRouter.post('/login', (0, validate_1.default)({ body: tenant_validation_1.loginTenantSchema }), tenant_controller_1.loginTenant);
tenantRouter.get('/', auth_1.default, tenant_controller_1.getAllTenants);
tenantRouter.get('/:id', auth_1.default, tenant_controller_1.getTenant);
tenantRouter.patch('/:id', auth_1.default, (0, validate_1.default)({ body: tenant_validation_1.updateTenantSchema }), tenant_controller_1.updateTenant);
tenantRouter.delete('/:id', auth_1.default, tenant_controller_1.deleteTenant);
exports.default = tenantRouter;
//# sourceMappingURL=tenant.route.js.map