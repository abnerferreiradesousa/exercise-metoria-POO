import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { Spectator } from '../interfaces';
import conn from './connection';

export const find = async (id: Spectator['id']): Promise<Spectator> => {
  const query = 'SELECT * FROM exercises.spectator WHERE ID=?';
  const [talker] = await conn.execute<RowDataPacket[]>(query, [id]);

  return talker[0] as Spectator;
}

export const findPosition =  async (position: Spectator['position']): Promise<Spectator> => {
  const query = 'SELECT * FROM exercises.spectator WHERE position=?';
  const [[result]] = await conn.execute<RowDataPacket[]>(query, [position]);

  return result as Spectator;
}

export const create = async ({ name, age, position }: Spectator): Promise<number> => {
  const query = 'INSERT INTO exercises.spectator (name, age, position) VALUES(?, ?, ?)'
  const [newSpectator] = await conn.execute<ResultSetHeader>(query, [name, age, position]);

  return newSpectator.insertId;
}

export const update = async ({ id, position}: Omit<Spectator, 'name' | 'age'>): Promise<void> => {
  const query = 'UPDATE exercises.spectator SET position = ? WHERE id=?';
  await conn.execute<ResultSetHeader>(query, [position, id])
}

export const destroy = async (id: number): Promise<void> => {
  const query = 'DELETE FROM exercises.spectator WHERE id=?';
  await conn.execute<ResultSetHeader>(query, [id]);
}