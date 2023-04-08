"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateToNextMonday = exports.isWeekend = void 0;
const isWeekend = (date) => {
    const dayOfWeek = new Date(date).getDay();
    return dayOfWeek === 6 || dayOfWeek === 0;
};
exports.isWeekend = isWeekend;
const updateToNextMonday = (date) => {
    const dayOfWeek = new Date(date).getUTCDay();
    if (dayOfWeek === 6) {
        new Date(date).setUTCDate(new Date(date).getUTCDate() + 2);
    }
    else if (dayOfWeek === 0) {
        new Date(date).setUTCDate(new Date(date).getUTCDate() + 1);
    }
    return new Date(date);
};
exports.updateToNextMonday = updateToNextMonday;
//# sourceMappingURL=event.service.js.map