"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eventRouter = void 0;
const tslib_1 = require("tslib");
const express_1 = require("express");
const validate_1 = tslib_1.__importDefault(require("../../middleware/validate"));
const event_validate_1 = require("../../validation/event.validate");
const event_controller_1 = require("../../controller/event.controller");
exports.eventRouter = (0, express_1.Router)();
exports.eventRouter.post('/create', (0, validate_1.default)({ body: event_validate_1.createEventSchema }), event_controller_1.createEvent);
exports.eventRouter.get('/:month', (0, validate_1.default)({ params: event_validate_1.fetchEventSchema }), event_controller_1.monthlyEvents);
//# sourceMappingURL=event.route.js.map