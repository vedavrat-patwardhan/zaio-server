"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChildCategoryModel = void 0;
const mongoose_1 = require("mongoose");
const mainCategorySchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    description: { type: String },
    slug: { type: String, required: true },
    parentCategoryId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'MainCategory' },
    productIds: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'Product' }],
}, { timestamps: true, versionKey: false });
const ChildCategoryModel = (0, mongoose_1.model)('ChildCategory', mainCategorySchema, 'ChildCategory');
exports.ChildCategoryModel = ChildCategoryModel;
//# sourceMappingURL=childCategory.mode.js.map