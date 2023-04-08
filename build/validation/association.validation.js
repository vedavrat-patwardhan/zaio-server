"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateAssociationSchema = exports.createAssociationSchema = void 0;
const tslib_1 = require("tslib");
const joi_1 = (0, tslib_1.__importDefault)(require("joi"));
exports.createAssociationSchema = joi_1.default.object({
    user: joi_1.default.string().required(),
    tenant: joi_1.default.string().required(),
    approval: joi_1.default.boolean().default(false),
});
exports.updateAssociationSchema = joi_1.default.object({
    approval: joi_1.default.boolean().required(),
});
//# sourceMappingURL=association.validation.js.map