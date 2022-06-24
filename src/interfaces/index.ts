export interface Person {
  id?: number;
  name: string;
  age: number;
}

export interface Spectator extends Person {
  position: number;
}

export interface Talker extends Person {
  displayOrder: number;
}