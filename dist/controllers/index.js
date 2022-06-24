"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteSpectator = exports.updateSpectator = exports.getSpectator = exports.createSpectator = exports.deleteTalker = exports.updateTalker = exports.getTalker = exports.createTalker = void 0;
const service = __importStar(require("../services"));
//talker
const createTalker = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, age, displayOrder } = req.body;
    const newTalker = yield service.createTalker({ name, age }, displayOrder);
    if ('error' in newTalker) {
        return res.status(newTalker.statusCode).json({ error: newTalker.error });
        ;
    }
    return res.status(201).json({ response: `Talker with id ${newTalker.id} successfully registered` });
});
exports.createTalker = createTalker;
const getTalker = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const talker = yield service.getTalker(Number(id));
    if ('error' in talker) {
        return res.status(talker.statusCode).json({ message: talker.error });
    }
    return res.status(200).json({ response: talker });
});
exports.getTalker = getTalker;
const updateTalker = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { displayOrder } = req.body;
    const { id } = req.params;
    const talker = yield service.updateTalker(Number(id), displayOrder);
    if (talker) {
        return res.status(talker.statusCode).json({ error: talker.error });
        ;
    }
    return res.status(200).json({ response: `Talker with id ${id} successfully updated` });
});
exports.updateTalker = updateTalker;
const deleteTalker = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const talker = yield service.deleteTalker(Number(id));
    if (talker) {
        return res.status(talker.statusCode).json({ error: talker.error });
    }
    return res.status(204).end();
});
exports.deleteTalker = deleteTalker;
//spectator
const createSpectator = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, age, position } = req.body;
    const newSpectator = yield service.createSpectator({ name, age }, position);
    if ('error' in newSpectator) {
        return res.status(newSpectator.statusCode).json({ error: newSpectator.error });
        ;
    }
    return res.status(201).json({ response: `Spectator with id ${newSpectator.id} successfully registered` });
});
exports.createSpectator = createSpectator;
const getSpectator = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const spectator = yield service.getSpectator(Number(id));
    if ('error' in spectator) {
        return res.status(spectator.statusCode).json({ message: spectator.error });
    }
    return res.status(200).json({ response: spectator });
});
exports.getSpectator = getSpectator;
const updateSpectator = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { position } = req.body;
    const { id } = req.params;
    const spectator = yield service.updateSpectator(Number(id), position);
    if (spectator) {
        return res.status(spectator.statusCode).json({ error: spectator.error });
    }
    return res.status(200).json({ response: `Spectator with id ${id} successfully updated` });
});
exports.updateSpectator = updateSpectator;
const deleteSpectator = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const spectator = yield service.deleteSpectator(Number(id));
    if (spectator) {
        return res.status(spectator.statusCode).json({ error: spectator.error });
    }
    return res.status(204).end();
});
exports.deleteSpectator = deleteSpectator;
