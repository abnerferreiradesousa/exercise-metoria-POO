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
exports.validateSpectator = exports.validateSpectatorId = exports.validateTalkerId = exports.validateTalkerDisplayOrder = exports.validatePerson = void 0;
const TalkerRepository = __importStar(require("../models/TalkerRepository"));
const SpectatorRepository = __importStar(require("../models/SpectatorRepository"));
const validatePerson = (name, age) => {
    if (!name || typeof name !== 'string') {
        return ({ error: 'The property name must be a string', statusCode: 400 });
    }
    if (!age || typeof age !== 'number') {
        return ({ error: 'The property age must be a number', statusCode: 400 });
    }
    if (age <= 0)
        return ({ error: 'The property age must be greater than 0', statusCode: 400 });
};
exports.validatePerson = validatePerson;
const validateTalkerDisplayOrder = (displayOrder) => __awaiter(void 0, void 0, void 0, function* () {
    if (!displayOrder || typeof displayOrder !== 'number') {
        return ({ error: 'The property displayOrder must be a number', statusCode: 400 });
    }
    const displayOrderOccupied = yield TalkerRepository.findDisplayOrder(displayOrder);
    if (displayOrderOccupied)
        return ({ error: 'This display order is occupied', statusCode: 400 });
});
exports.validateTalkerDisplayOrder = validateTalkerDisplayOrder;
const validateTalkerId = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const talker = yield TalkerRepository.find(id);
    if (!talker) {
        return ({ error: 'Talker not found', statusCode: 404 });
    }
});
exports.validateTalkerId = validateTalkerId;
const validateSpectatorId = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const idExist = yield SpectatorRepository.find(id);
    if (!idExist)
        return ({ error: 'This id does not exist', statusCode: 400 });
});
exports.validateSpectatorId = validateSpectatorId;
const validateSpectator = (position) => __awaiter(void 0, void 0, void 0, function* () {
    if (!position || typeof position !== 'number') {
        return ({ error: 'The property position must be a number', statusCode: 400 });
    }
    const positionOccupied = yield SpectatorRepository.findPosition(position);
    if (positionOccupied)
        return ({ error: 'This position is occupied', statusCode: 400 });
});
exports.validateSpectator = validateSpectator;
