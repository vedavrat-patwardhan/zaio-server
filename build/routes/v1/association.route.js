"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.associationRouter = void 0;
const tslib_1 = require("tslib");
const auth_1 = (0, tslib_1.__importDefault)(require("../../middleware/auth"));
const validate_1 = (0, tslib_1.__importDefault)(require("../../middleware/validate"));
const associations_model_1 = (0, tslib_1.__importDefault)(require("../../model/associations.model"));
const association_validation_1 = require("../../validation/association.validation");
const express_1 = (0, tslib_1.__importDefault)(require("express"));
const associationRouter = express_1.default.Router();
exports.associationRouter = associationRouter;
associationRouter.post('/associations', auth_1.default, (0, validate_1.default)({ body: association_validation_1.createAssociationSchema }), (req, res, next) => (0, tslib_1.__awaiter)(void 0, void 0, void 0, function* () {
    try {
        const { user, tenant, approval } = req.body;
        const association = yield associations_model_1.default.create({ user, tenant, approval });
        res.status(201).json({ association });
    }
    catch (error) {
        next(error);
    }
}));
associationRouter.get('/associations/:id', auth_1.default, (req, res, next) => (0, tslib_1.__awaiter)(void 0, void 0, void 0, function* () {
    try {
        const association = yield associations_model_1.default.findById(req.params.id);
        if (!association) {
            return res.status(404).send();
        }
        res.json({ association });
    }
    catch (error) {
        next(error);
    }
}));
associationRouter.patch('/associations/:id', auth_1.default, (0, validate_1.default)({ body: association_validation_1.updateAssociationSchema }), (req, res, next) => (0, tslib_1.__awaiter)(void 0, void 0, void 0, function* () {
    try {
        const association = yield associations_model_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!association) {
            return res.status(404).send();
        }
        res.json({ association });
    }
    catch (error) {
        next(error);
    }
}));
associationRouter.delete('/associations/:id', auth_1.default, (req, res, next) => (0, tslib_1.__awaiter)(void 0, void 0, void 0, function* () {
    try {
        const association = yield associations_model_1.default.findByIdAndDelete(req.params.id);
        if (!association) {
            return res.status(404).send();
        }
        res.json({ association });
    }
    catch (error) {
        next(error);
    }
}));
//# sourceMappingURL=association.route.js.map