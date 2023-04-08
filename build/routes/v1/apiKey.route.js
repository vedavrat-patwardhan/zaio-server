"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const tslib_1 = require("tslib");
const validate_1 = (0, tslib_1.__importDefault)(require("../../middleware/validate"));
const apiKey_model_1 = (0, tslib_1.__importDefault)(require("../../model/apiKey.model"));
const apiKey_validation_1 = require("../../validation/apiKey.validation");
const express_1 = (0, tslib_1.__importDefault)(require("express"));
const router = express_1.default.Router();
exports.router = router;
router.post('/apiKeys', (0, validate_1.default)({ body: apiKey_validation_1.createApiKeySchema }), (req, res, next) => (0, tslib_1.__awaiter)(void 0, void 0, void 0, function* () {
    try {
        const { tenant, APIKey, status, validTill } = req.body;
        const apiKey = yield apiKey_model_1.default.create({ tenant, APIKey, status, validTill });
        res.status(201).json(apiKey);
    }
    catch (error) {
        next(error);
    }
}));
router.get('/apiKeys', (req, res, next) => (0, tslib_1.__awaiter)(void 0, void 0, void 0, function* () {
    try {
        const apiKeys = yield apiKey_model_1.default.find();
        res.json(apiKeys);
    }
    catch (error) {
        next(error);
    }
}));
router.get('/apiKeys/:id', (req, res, next) => (0, tslib_1.__awaiter)(void 0, void 0, void 0, function* () {
    try {
        const apiKey = yield apiKey_model_1.default.findById(req.params.id);
        if (!apiKey) {
            return res.status(404).json({ message: 'ApiKey not found' });
        }
        res.json(apiKey);
    }
    catch (error) {
        next(error);
    }
}));
router.put('/apiKeys/:id', (0, validate_1.default)({ body: apiKey_validation_1.updateApiKeySchema }), (req, res, next) => (0, tslib_1.__awaiter)(void 0, void 0, void 0, function* () {
    try {
        const apiKey = yield apiKey_model_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!apiKey) {
            return res.status(404).json({ message: 'ApiKey not found' });
        }
        res.json(apiKey);
    }
    catch (error) {
        next(error);
    }
}));
router.delete('/apiKeys/:id', (req, res, next) => (0, tslib_1.__awaiter)(void 0, void 0, void 0, function* () {
    try {
        const apiKey = yield apiKey_model_1.default.findByIdAndDelete(req.params.id);
        if (!apiKey) {
            return res.status(404).json({ message: 'ApiKey not found' });
        }
        res.json({ message: 'ApiKey deleted successfully' });
    }
    catch (error) {
        next(error);
    }
}));
//# sourceMappingURL=apiKey.route.js.map