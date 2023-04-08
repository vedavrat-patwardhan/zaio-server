"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const attributeSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    description: { type: String },
    slug: { type: String, required: true },
}, { timestamps: true, versionKey: false });
const AttributeModel = (0, mongoose_1.model)('Attribute', attributeSchema);
exports.default = AttributeModel;
//# sourceMappingURL=attribute.model.js.map