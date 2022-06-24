"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.destroy = exports.update = exports.create = exports.findDisplayOrder = exports.find = void 0;
const connection_1 = __importDefault(require("./connection"));
const find = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const query = 'SELECT * FROM exercices.talker WHERE ID=?';
    const [talker] = yield connection_1.default.execute(query, [id]);
    return talker[0];
});
exports.find = find;
const findDisplayOrder = (displayOrder) => __awaiter(void 0, void 0, void 0, function* () {
    const query = 'SELECT * FROM exercices.talker WHERE display_order=?';
    const [[result]] = yield connection_1.default.execute(query, [displayOrder]);
    return result;
});
exports.findDisplayOrder = findDisplayOrder;
const create = ({ name, age, displayOrder }) => __awaiter(void 0, void 0, void 0, function* () {
    const query = 'INSERT INTO exercises.talker (name, age, display_order) VALUES(?, ?, ?)';
    const [newTalker] = yield connection_1.default.execute(query, [name, age, displayOrder]);
    return newTalker.insertId;
});
exports.create = create;
const update = ({ id, displayOrder }) => __awaiter(void 0, void 0, void 0, function* () {
    const query = 'UPDATE exercices.talker SET display_order = ? WHERE id=?';
    yield connection_1.default.execute(query, [displayOrder, id]);
});
exports.update = update;
const destroy = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const query = 'DELETE FROM exercices.talker WHERE id=?';
    yield connection_1.default.execute(query, [id]);
});
exports.destroy = destroy;
