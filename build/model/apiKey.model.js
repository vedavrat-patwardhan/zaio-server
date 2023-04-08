"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ApiKeySchema = new mongoose_1.Schema({
    tenant: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Tenant',
        required: true,
    },
    APIKey: {
        type: String,
        required: true,
    },
    status: {
        type: Boolean,
        default: true,
    },
    validTill: {
        type: Date,
        default: null,
    },
}, { timestamps: true, versionKey: false });
const ApiKey = (0, mongoose_1.model)('ApiKey', ApiKeySchema);
exports.default = ApiKey;
//# sourceMappingURL=apiKey.model.js.map