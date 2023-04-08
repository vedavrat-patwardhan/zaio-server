"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const joi_1 = tslib_1.__importDefault(require("joi"));
const validate = (schema) => (req, res, next) => {
    const options = {
        abortEarly: false,
        allowUnknown: true,
    };
    const { error } = joi_1.default.object(schema).validate(req, options);
    if (error) {
        const errors = error.details.map((detail) => detail.message);
        return res.status(400).json({ message: errors.join(', ') });
    }
    return next();
};
exports.default = validate;
//# sourceMappingURL=validate.js.map