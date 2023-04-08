"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const OtpSchema = new mongoose_1.Schema({
    otp: { type: String, required: true, select: false },
    userType: { type: String, required: true, enum: ["admin", "tenant", "user"] },
    userId: { type: String, required: true },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 900,
    },
}, { versionKey: false });
exports.default = (0, mongoose_1.model)('Otp', OtpSchema);
//# sourceMappingURL=otp.model.js.map