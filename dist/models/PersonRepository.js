"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.destroy = exports.update = exports.create = exports.find = void 0;
const uuid_1 = require("uuid");
let persons = [];
const find = (id) => {
    const response = persons.find((person) => person.id === id);
    return response;
};
exports.find = find;
const create = (data) => {
    const id = (0, uuid_1.v4)();
    persons.push(Object.assign({ id }, data));
    return id;
};
exports.create = create;
const update = ({ id, name, age, role }) => {
    persons.forEach((person) => {
        if (person.id === id) {
            person.name = name;
            person.age = age;
            person.role = role;
        }
    });
};
exports.update = update;
const destroy = (id) => {
    persons = persons.filter(person => id !== person.id);
};
exports.destroy = destroy;
