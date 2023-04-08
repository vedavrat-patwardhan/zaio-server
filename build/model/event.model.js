"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const eventSchema = new mongoose_1.Schema({
    id: { type: Number, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    type: { type: String, required: true },
    duration: { type: Number, required: true },
    date: { type: Date, required: true },
}, { versionKey: false });
const EventModel = (0, mongoose_1.model)('event', eventSchema);
exports.default = EventModel;
//# sourceMappingURL=event.model.js.map