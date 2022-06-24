export interface ReqPerson {
  name: string,
  age: number;
}

export interface NewPerson extends ReqPerson{
  role: string;
}

export interface Person extends NewPerson {
  id: string;
}

export interface Spectator {
  id?: number;
  name: string;
  age: number;
  position: number;
}

export interface Talker {
  id?: number;
  name: string;
  age: number;
  displayOrder: number;
}