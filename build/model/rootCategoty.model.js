"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainCategoryModel = void 0;
const mongoose_1 = require("mongoose");
const rootCategorySchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    description: { type: String },
    slug: { type: String, required: true },
    children: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'MainCategory' }],
}, { timestamps: true, versionKey: false });
const MainCategoryModel = (0, mongoose_1.model)('RootCategory', rootCategorySchema, 'RootCategory');
exports.MainCategoryModel = MainCategoryModel;
//# sourceMappingURL=rootCategoty.model.js.map