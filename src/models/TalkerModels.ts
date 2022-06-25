// import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { Pool, RowDataPacket } from 'mysql2/promise';
import { ITalker } from '../interfaces';
import conn from './connection';

export default class TalkerModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public find = async (id: number): Promise<ITalker> => {
    const query = 'SELECT * FROM exercises.talker WHERE ID=?';
    const [talker] = await conn.execute<RowDataPacket[]>(query, [id]);
  
    return talker[0] as ITalker;
  }
}


// export const findDisplayOrder =  async (displayOrder: number): Promise<ITalker> => {
//   const query = 'SELECT * FROM exercises.talker WHERE display_order=?';
//   const [[result]] = await conn.execute<RowDataPacket[]>(query, [displayOrder]);

//   return result as ITalker;
// }

// export const create = async ({ name, age, displayOrder }: ITalker): Promise<number> => {
//   const query = 'INSERT INTO exercises.talker (name, age, display_order) VALUES(?, ?, ?)'
//   const [newTalker] = await conn.execute<ResultSetHeader>(query, [name, age, displayOrder]);

//   return newTalker.insertId;
// }

// export const update = async ({ id, displayOrder}: { id: number, displayOrder: number}): Promise<void> => {
//   const query = 'UPDATE exercises.talker SET display_order=? WHERE id=?';
//   await conn.execute<ResultSetHeader>(query, [displayOrder, id])
// }

// export const destroy = async (id: number): Promise<void> => {
//   const query = 'DELETE FROM exercises.talker WHERE id=?';
//   await conn.execute<ResultSetHeader>(query, [id]);
// }