"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ProductImportsSchema = new mongoose_1.Schema({
    type: {
        type: String,
        required: true,
    },
    skus: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'SKU',
        },
    ],
    skuIds: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'SKU',
        },
    ],
    tenant: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Tenant',
        required: true,
    },
    product: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
    },
    status: {
        type: Boolean,
        default: false,
    },
    override: {
        type: mongoose_1.Schema.Types.Mixed,
        default: null,
    },
}, { timestamps: true, versionKey: false });
const ProductImports = (0, mongoose_1.model)('ProductImports', ProductImportsSchema);
exports.default = ProductImports;
//# sourceMappingURL=productsImport.model.js.map