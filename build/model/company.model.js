"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyModel = void 0;
const mongoose_1 = require("mongoose");
const CompanySchema = new mongoose_1.Schema({
    name: { type: String },
    description: { type: String },
    gstNumber: { type: String, unique: true },
    gstCertificate: { type: String },
    panNumber: { type: String, unique: true },
    panCard: { type: String },
    aadharNumber: { type: String, unique: true },
    aadharCard: { type: String },
    adminApproval: { type: Boolean, default: false },
    owner: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User' },
    ownerId: { type: mongoose_1.Schema.Types.ObjectId, unique: true },
    tenant: { type: mongoose_1.Schema.Types.Mixed },
}, { timestamps: true, versionKey: false });
const CompanyModel = (0, mongoose_1.model)('Company', CompanySchema);
exports.CompanyModel = CompanyModel;
//# sourceMappingURL=company.model.js.map