"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const skuSchema = new mongoose_1.Schema({
    slug: { type: String, required: true },
    quantity: { type: Number, default: 0 },
    productId: { type: mongoose_1.Schema.Types.ObjectId, required: true, ref: 'Product' },
    supplierId: { type: mongoose_1.Schema.Types.ObjectId, required: true, ref: 'Tenant' },
    published: { type: Boolean, default: false },
    attributes: { type: mongoose_1.Schema.Types.Mixed },
    categoryIds: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'Category' }],
    price: { type: Number, required: true },
    discountedPrice: { type: Number },
    productImportIds: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'ProductImports' }],
    featureImage: { type: String },
    gallery: [{ type: String }],
    cartIds: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'Cart' }],
}, { timestamps: true, versionKey: false });
const SKUModule = (0, mongoose_1.model)('SKU', skuSchema);
exports.default = SKUModule;
//# sourceMappingURL=sku.model.js.map