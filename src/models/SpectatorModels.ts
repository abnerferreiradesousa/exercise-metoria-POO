// import { ResultSetHeader, RowDataPacket } from 'mysql2';
// import { ISpectator } from '../interfaces';
// import conn from './connection';

// export const find = async (id: ISpectator['id']): Promise<ISpectator> => {
//   const query = 'SELECT * FROM exercises.spectator WHERE ID=?';
//   const [talker] = await conn.execute<RowDataPacket[]>(query, [id]);

//   return talker[0] as ISpectator;
// }

// export const findPosition =  async (position: ISpectator['position']): Promise<ISpectator> => {
//   const query = 'SELECT * FROM exercises.spectator WHERE position=?';
//   const [[result]] = await conn.execute<RowDataPacket[]>(query, [position]);

//   return result as ISpectator;
// }

// export const create = async ({ name, age, position }: ISpectator): Promise<number> => {
//   const query = 'INSERT INTO exercises.spectator (name, age, position) VALUES(?, ?, ?)'
//   const [newSpectator] = await conn.execute<ResultSetHeader>(query, [name, age, position]);

//   return newSpectator.insertId;
// }

// export const update = async ({ id, position}: Omit<ISpectator, 'name' | 'age'>): Promise<void> => {
//   const query = 'UPDATE exercises.spectator SET position = ? WHERE id=?';
//   await conn.execute<ResultSetHeader>(query, [position, id])
// }

// export const destroy = async (id: number): Promise<void> => {
//   const query = 'DELETE FROM exercises.spectator WHERE id=?';
//   await conn.execute<ResultSetHeader>(query, [id]);
// }