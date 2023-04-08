"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateToNextMonday = exports.isWeekend = void 0;
const isWeekend = (date) => {
    const dayOfWeek = new Date(date).getDay();
    return dayOfWeek === 6 || dayOfWeek === 0;
};
exports.isWeekend = isWeekend;
const updateToNextMonday = (date) => {
    const dayOfWeek = new Date(date).getDay();
    const newDate = new Date(date);
    if (dayOfWeek === 6) {
        newDate.setDate(newDate.getDate() + 2);
    }
    else if (dayOfWeek === 0) {
        newDate.setDate(newDate.getDate() + 1);
    }
    return newDate;
};
exports.updateToNextMonday = updateToNextMonday;
//# sourceMappingURL=event.service.js.map