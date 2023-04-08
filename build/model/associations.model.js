"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const AssociationSchema = new mongoose_1.Schema({
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        unique: true,
    },
    tenant: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Tenant',
        required: true,
    },
    approval: {
        type: Boolean,
        default: false,
    },
}, { timestamps: true, versionKey: false });
const Association = (0, mongoose_1.model)('Association', AssociationSchema);
exports.default = Association;
//# sourceMappingURL=associations.model.js.map