"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const categorySchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    description: { type: String },
    slug: { type: String, required: true },
    root: { type: Boolean, default: false },
    parentCategoryId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Category' },
    children: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'Category' }],
    productIds: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'Product' }],
    skuIds: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'SKU' }],
}, { timestamps: true, versionKey: false });
const CategoryModel = (0, mongoose_1.model)('Category', categorySchema);
exports.default = CategoryModel;
//# sourceMappingURL=category.model.js.map