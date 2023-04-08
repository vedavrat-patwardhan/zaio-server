"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = exports.successHandler = void 0;
const tslib_1 = require("tslib");
const logger_1 = (0, tslib_1.__importDefault)(require("../utils/logger"));
const morgan_1 = (0, tslib_1.__importDefault)(require("morgan"));
const config_1 = (0, tslib_1.__importDefault)(require("./config"));
morgan_1.default.token('message', (req, res) => res.locals.errorMessage || '');
const getIpFormat = () => config_1.default.env === 'production' ? ':remote-addr - ' : '';
const successResponseFormat = `${getIpFormat()}:method :url :status - :response-time ms`;
const errorResponseFormat = `${getIpFormat()}:method :url :status - :response-time ms - message: :message`;
const successHandler = (0, morgan_1.default)(successResponseFormat, {
    skip: (req, res) => res.statusCode >= 400,
    stream: {
        write: (message) => logger_1.default.info(message.trim()),
    },
});
exports.successHandler = successHandler;
const errorHandler = (0, morgan_1.default)(errorResponseFormat, {
    skip: (req, res) => res.statusCode < 400,
    stream: {
        write: (message) => logger_1.default.error(message.trim()),
    },
});
exports.errorHandler = errorHandler;
//# sourceMappingURL=morgan.js.map