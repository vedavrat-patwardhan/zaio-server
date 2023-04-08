"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMail = void 0;
const tslib_1 = require("tslib");
const mail_1 = (0, tslib_1.__importDefault)(require("@sendgrid/mail"));
const config_1 = (0, tslib_1.__importDefault)(require("../config/config"));
const sendMail = (to, subject, html, text, attachments) => (0, tslib_1.__awaiter)(void 0, void 0, void 0, function* () {
    mail_1.default.setApiKey(config_1.default.email.sendgridApi);
    const msg = {
        to,
        from: config_1.default.email.from,
        subject,
        html,
        text,
        attachments,
    };
    const sentMsg = yield mail_1.default.send(msg);
    return sentMsg;
});
exports.sendMail = sendMail;
//# sourceMappingURL=sendMail.js.map