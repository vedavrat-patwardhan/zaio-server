"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchEventSchema = exports.createEventSchema = void 0;
const tslib_1 = require("tslib");
const joi_1 = tslib_1.__importDefault(require("joi"));
exports.createEventSchema = joi_1.default.object({
    title: joi_1.default.string().required(),
    description: joi_1.default.string().required(),
    type: joi_1.default.string().required(),
    duration: joi_1.default.number().required(),
    date: joi_1.default.date().required(),
});
exports.fetchEventSchema = joi_1.default.object({
    month: joi_1.default.date().required(),
});
//# sourceMappingURL=event.validate.js.map