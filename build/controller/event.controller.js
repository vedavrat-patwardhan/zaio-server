"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.monthlyEvents = exports.createEvent = void 0;
const tslib_1 = require("tslib");
const event_model_1 = tslib_1.__importDefault(require("../model/event.model"));
const event_service_1 = require("../services/event.service");
const apiError_1 = require("../utils/apiError");
const apiResponse_1 = require("../utils/apiResponse");
const catchAsync_1 = tslib_1.__importDefault(require("../utils/catchAsync"));
exports.createEvent = (0, catchAsync_1.default)((req, res, _next) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    let { date } = req.body;
    if ((0, event_service_1.isWeekend)(date)) {
        date = (0, event_service_1.updateToNextMonday)(date);
    }
    const id = (yield event_model_1.default.countDocuments().exec()) + 1;
    const event = new event_model_1.default(Object.assign(Object.assign({}, req.body), { id,
        date }));
    yield event.save();
    return new apiResponse_1.SuccessResponse('Event created successfully', event).send(res);
}));
exports.monthlyEvents = (0, catchAsync_1.default)((req, res, next) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const { month } = req.params;
    const events = yield event_model_1.default.find({
        $expr: {
            $eq: [{ $month: '$date' }, month],
        },
    })
        .lean()
        .exec();
    if (!events) {
        throw next(new apiError_1.NotFoundError('Event not found'));
    }
    return new apiResponse_1.SuccessResponse('success', events.map((event) => ({
        title: event.title,
        description: event.description,
        type: event.type,
        duration: event.duration,
        start: event.date,
        end: event.date,
    }))).send(res);
}));
//# sourceMappingURL=event.controller.js.map