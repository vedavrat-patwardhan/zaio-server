"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const helmet_1 = tslib_1.__importDefault(require("helmet"));
const xss_clean_1 = tslib_1.__importDefault(require("xss-clean"));
const cors_1 = tslib_1.__importDefault(require("cors"));
const express_mongo_sanitize_1 = tslib_1.__importDefault(require("express-mongo-sanitize"));
const compression_1 = tslib_1.__importDefault(require("compression"));
const apiError_1 = require("./utils/apiError");
const rateLimiter_1 = require("./utils/rateLimiter");
const config_1 = tslib_1.__importDefault(require("./config/config"));
const logger_1 = tslib_1.__importDefault(require("./utils/logger"));
const morgan_1 = require("./config/morgan");
const routes_1 = tslib_1.__importDefault(require("./routes/v1/routes"));
const app = (0, express_1.default)();
if (config_1.default.env !== 'test') {
    app.use(morgan_1.successHandler);
    app.use(morgan_1.errorHandler);
}
app.use((0, helmet_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, xss_clean_1.default)());
app.use((0, express_mongo_sanitize_1.default)());
app.use((0, compression_1.default)());
app.use((0, cors_1.default)({ origin: true, optionsSuccessStatus: 200 }));
if (config_1.default.env === 'production') {
    app.use('/v1/public/*', rateLimiter_1.rateLimiter);
}
app.use('/v1', routes_1.default);
app.get('/favicon.ico', (req, res) => res.status(204));
app.get('/images/icons/gear.png', (req, res) => res.status(204));
app.use((err, _req, res, _next) => {
    if (err instanceof apiError_1.ApiError) {
        apiError_1.ApiError.handle(err, res);
    }
    else {
        if (config_1.default.env === 'development') {
            logger_1.default.info(err);
        }
        apiError_1.ApiError.handle(new apiError_1.InternalError('Route does not exist'), res);
    }
});
exports.default = app;
//# sourceMappingURL=app.js.map