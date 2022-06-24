import { v4 as uuidv4 } from 'uuid';
  
import { NewPerson, Person } from '../interfaces';

let persons: Person[] = [];

export const find = (id: Person['id']): Person | undefined => {
  const response = persons.find((person) => person.id === id);

  return response;
}

export const create = (data: NewPerson): Person['id'] => {  
  const id = uuidv4();
  persons.push({ id, ...data });

  return id;
}

export const update = ({ id, name, age, role }: Person): void => {
  persons.forEach((person) => {
    if (person.id === id) {
      person.name = name;
      person.age = age;
      person.role = role;
    }
  });
}

export const destroy = (id: Person['id']): void => {
  persons = persons.filter(person => id !== person.id);
}