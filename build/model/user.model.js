"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
    username: { type: String, unique: true },
    firstName: { type: String },
    lastName: { type: String },
    phoneNo: { type: Number, unique: true },
    email: { type: String, unique: true },
    passwordHash: { type: String },
    token: { type: String },
    email_verified: { type: Boolean, default: false },
    verificationCode: { type: String },
    verificationExpiry: { type: Date },
    associations: { type: mongoose_1.Schema.Types.Mixed },
    company: { type: mongoose_1.Schema.Types.Mixed },
    role: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Role' },
    roleId: { type: mongoose_1.Schema.Types.ObjectId },
}, { timestamps: true, toJSON: { virtuals: true }, versionKey: false });
UserSchema.virtual('fullName').get(function () {
    return `${this.firstName} ${this.lastName}`;
});
const UserModel = (0, mongoose_1.model)('User', UserSchema);
exports.UserModel = UserModel;
//# sourceMappingURL=user.model.js.map