"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const productSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    description: { type: String },
    shortDescriptions: { type: String },
    slug: { type: String, required: true },
    quantity: { type: Number, default: 0 },
    supplier: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Tenant', required: true },
    published: { type: Boolean, default: false },
    attributes: { type: mongoose_1.Schema.Types.Mixed },
    categories: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'ChildCategory' }],
    SKU: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'SKU' }],
    manufacturer: { type: String },
    locations: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'Location' }],
    countryOfOrigin: { type: String },
    trending: { type: Boolean, default: false },
    featuredFrom: { type: Date },
    featuredTo: { type: Date },
    guestCheckout: { type: Boolean, default: false },
    private_product: { type: Boolean, default: false },
    marketPlace: { type: Boolean, default: false },
    ProductImports: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'ProductImports' }],
    reseller: { type: mongoose_1.Schema.Types.Mixed },
    featureImage: { type: String },
    gallery: [{ type: String }],
}, { versionKey: false });
exports.default = (0, mongoose_1.model)('Product', productSchema);
//# sourceMappingURL=product.model.js.map