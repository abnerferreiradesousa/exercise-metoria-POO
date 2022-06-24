import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { Talker } from '../interfaces';
import conn from './connection';

export const find = async (id: number): Promise<Talker> => {
  const query = 'SELECT * FROM exercises.talker WHERE ID=?';
  const [talker] = await conn.execute<RowDataPacket[]>(query, [id]);

  return talker[0] as Talker;
}

export const findDisplayOrder =  async (displayOrder: number): Promise<Talker> => {
  const query = 'SELECT * FROM exercises.talker WHERE display_order=?';
  const [[result]] = await conn.execute<RowDataPacket[]>(query, [displayOrder]);

  return result as Talker;
}

export const create = async ({ name, age, displayOrder }: Talker): Promise<number> => {
  const query = 'INSERT INTO exercises.talker (name, age, display_order) VALUES(?, ?, ?)'
  const [newTalker] = await conn.execute<ResultSetHeader>(query, [name, age, displayOrder]);

  return newTalker.insertId;
}

export const update = async ({ id, displayOrder}: { id: number, displayOrder: number}): Promise<void> => {
  const query = 'UPDATE exercises.talker SET display_order=? WHERE id=?';
  await conn.execute<ResultSetHeader>(query, [displayOrder, id])
}

export const destroy = async (id: number): Promise<void> => {
  const query = 'DELETE FROM exercises.talker WHERE id=?';
  await conn.execute<ResultSetHeader>(query, [id]);
}