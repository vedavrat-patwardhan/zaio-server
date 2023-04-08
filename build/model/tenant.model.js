"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenantModel = void 0;
const mongoose_1 = require("mongoose");
const TenantSchema = new mongoose_1.Schema({
    phoneNo: { type: Number, unique: true },
    countryCode: Number,
    email: { type: String, unique: true },
    password: String,
    primaryName: String,
    ownersName: String,
    primaryEmail: String,
    ownersEmail: String,
    ownersPhone: String,
    primaryPhone: String,
    businessModel: String,
    osmType: String,
    warehousePincode: String,
    WarehouseGstin: String,
    warehouseAddress: String,
    warehouseCity: String,
    warehouseState: String,
    warehouseCountry: String,
    warehouseEmail: String,
    warehousePhone: String,
    startTimings: String,
    endTimings: String,
    processingCapacity: String,
    accountHolder: String,
    accountNumber: String,
    accountType: String,
    ifsc: String,
    bank: String,
    cheque: String,
    brandCount: String,
    declared: String,
}, { versionKey: false });
const TenantModel = (0, mongoose_1.model)('Tenant', TenantSchema);
exports.TenantModel = TenantModel;
//# sourceMappingURL=tenant.model.js.map