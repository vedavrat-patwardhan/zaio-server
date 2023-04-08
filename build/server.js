"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const mongoose_1 = tslib_1.__importDefault(require("mongoose"));
const app_1 = tslib_1.__importDefault(require("./app"));
const config_1 = tslib_1.__importDefault(require("./config/config"));
const logger_1 = tslib_1.__importDefault(require("./utils/logger"));
let server;
mongoose_1.default.set('strictQuery', config_1.default.mongoose.strictQuery);
mongoose_1.default.connect(config_1.default.mongoose.url, config_1.default.mongoose.options).then(() => {
    logger_1.default.info('Connected to MongoDB');
    server = app_1.default.listen(config_1.default.port, () => {
        logger_1.default.info(`Listening to port ${config_1.default.port}`);
    });
});
const exitHandler = () => {
    if (server) {
        server.close(() => {
            logger_1.default.info('Server closed');
            process.exit(1);
        });
    }
    else {
        process.exit(1);
    }
};
const unexpectedErrorHandler = (error) => {
    logger_1.default.error(error);
    exitHandler();
};
process.on('uncaughtException', unexpectedErrorHandler);
process.on('unhandledRejection', unexpectedErrorHandler);
process.on('SIGTERM', () => {
    logger_1.default.info('SIGTERM received');
    if (server) {
        server.close();
    }
});
//# sourceMappingURL=server.js.map