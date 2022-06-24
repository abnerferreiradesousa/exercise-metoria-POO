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
const talkerRepository = __importStar(require("../models/TalkerRepository"));
const spectatorRepository = __importStar(require("../models/SpectatorRepository"));
const validators = __importStar(require("../utils"));
// Talkers
const createTalker = (talkerInfo, displayOrder) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, age } = talkerInfo;
    const validPerson = validators.validatePerson(name, age);
    if (validPerson)
        return validPerson;
    const validDisplayOrder = yield validators.validateTalkerDisplayOrder(displayOrder);
    if (validDisplayOrder)
        return validDisplayOrder;
    const newTalker = yield talkerRepository.create({ name, age, displayOrder });
    return { id: newTalker };
});
exports.createTalker = createTalker;
const getTalker = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const talker = yield talkerRepository.find(id);
    if (!talker) {
        return ({ error: 'Talker not found', statusCode: 404 });
    }
    return talker;
});
exports.getTalker = getTalker;
const updateTalker = (id, displayOrder) => __awaiter(void 0, void 0, void 0, function* () {
    const validId = validators.validateTalkerId(id);
    if (validId)
        return validId;
    const validDisplayOrder = yield validators.validateTalkerDisplayOrder(displayOrder);
    if (validDisplayOrder)
        return validDisplayOrder;
    yield talkerRepository.update({ id, displayOrder });
});
exports.updateTalker = updateTalker;
const deleteTalker = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const validId = validators.validateTalkerId(id);
    if (validId)
        return validId;
    talkerRepository.destroy(id);
});
exports.deleteTalker = deleteTalker;
// Spectators
const createSpectator = (spectatorInfo, position) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, age } = spectatorInfo;
    const validPerson = validators.validatePerson(name, age);
    if (validPerson)
        return validPerson;
    const validPosition = yield validators.validateSpectator(position);
    if (validPosition)
        return validPosition;
    const id = yield spectatorRepository.create({ name, age, position });
    return { id };
});
exports.createSpectator = createSpectator;
const getSpectator = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const spectator = yield spectatorRepository.find(id);
    if (!spectator) {
        return ({ error: 'Spectator not found', statusCode: 404 });
    }
    return spectator;
});
exports.getSpectator = getSpectator;
const updateSpectator = (id, position) => __awaiter(void 0, void 0, void 0, function* () {
    const validId = yield validators.validateSpectatorId(id);
    if (validId)
        return validId;
    const validPosition = yield validators.validateSpectator(position);
    if (validPosition)
        return validPosition;
    spectatorRepository.update({ id, position });
});
exports.updateSpectator = updateSpectator;
const deleteSpectator = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const validId = yield validators.validateSpectatorId(id);
    if (validId)
        return validId;
    spectatorRepository.destroy(id);
});
exports.deleteSpectator = deleteSpectator;
