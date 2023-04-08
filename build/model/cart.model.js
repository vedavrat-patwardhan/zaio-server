"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const CartSchema = new mongoose_1.Schema({
    uid: {
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
    checkedOut: {
        type: Boolean,
        default: false,
    },
    lastUpdated: {
        type: Date,
        default: Date.now,
    },
}, { timestamps: true, versionKey: false });
const Cart = (0, mongoose_1.model)('Cart', CartSchema);
exports.default = Cart;
//# sourceMappingURL=cart.model.js.map