"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const event_route_1 = require("./event.route");
const router = (0, express_1.Router)();
router.use('/event', event_route_1.eventRouter);
exports.default = router;
//# sourceMappingURL=routes.js.map