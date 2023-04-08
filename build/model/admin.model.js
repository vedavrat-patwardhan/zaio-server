"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminModel = void 0;
const mongoose_1 = require("mongoose");
const AdminSchema = new mongoose_1.Schema({
    username: { type: String, unique: true },
    firstName: { type: String },
    lastName: { type: String },
    phoneNo: { type: Number, unique: true },
    email: { type: String, unique: true },
    passwordHash: { type: String },
    token: { type: String },
    approved: { type: Boolean, default: false },
    emailVerified: { type: Boolean, default: false },
    role: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Role' },
});
const AdminModel = (0, mongoose_1.model)('Admin', AdminSchema, 'Admin');
exports.AdminModel = AdminModel;
//# sourceMappingURL=admin.model.js.map