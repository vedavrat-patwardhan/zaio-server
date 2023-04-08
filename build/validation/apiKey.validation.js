"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateApiKeySchema = exports.createApiKeySchema = void 0;
const tslib_1 = require("tslib");
const joi_1 = (0, tslib_1.__importDefault)(require("joi"));
exports.createApiKeySchema = joi_1.default.object({
    tenant: joi_1.default.string().required(),
    APIKey: joi_1.default.string().required(),
    status: joi_1.default.boolean(),
    validTill: joi_1.default.date(),
});
exports.updateApiKeySchema = joi_1.default.object({
    tenant: joi_1.default.string(),
    APIKey: joi_1.default.string(),
    status: joi_1.default.boolean(),
    validTill: joi_1.default.date(),
});
//# sourceMappingURL=apiKey.validation.js.map