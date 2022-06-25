export interface IPerson {
  id?: number;
  name: string;
  age: number;
}

export interface ISpectator extends IPerson {
  position: number;
}

export interface ITalker extends IPerson {
  displayOrder: number;
}
