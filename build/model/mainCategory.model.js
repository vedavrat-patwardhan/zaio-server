"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainCategoryModel = void 0;
const mongoose_1 = require("mongoose");
const categorySchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    description: { type: String },
    slug: { type: String, required: true },
    parentCategoryId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'RootCategory' },
    children: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'ChildCategory' }],
}, { timestamps: true, versionKey: false });
const MainCategoryModel = (0, mongoose_1.model)('MainCategory', categorySchema, 'MainCategory');
exports.MainCategoryModel = MainCategoryModel;
//# sourceMappingURL=mainCategory.model.js.map