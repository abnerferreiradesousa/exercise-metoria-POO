import * as TalkerRepository from '../models/TalkerRepository';
import * as SpectatorRepository from '../models/SpectatorRepository';

export interface error {
  error: string;
  statusCode: number;
}

export const validatePerson = (name: string, age: number): error | undefined => {
  if (!name || typeof name !== 'string') {
    return ({ error: 'The property name must be a string', statusCode: 400 });
  }

  if (!age || typeof age !== 'number') {
    return ({ error: 'The property age must be a number', statusCode: 400 });
  }

  if (age <= 0) return ({ error: 'The property age must be greater than 0', statusCode: 400 });
}

export const validateTalkerDisplayOrder =  async (displayOrder: number): Promise<error | undefined> => {
  if (!displayOrder || typeof displayOrder !== 'number') {
    return ({ error: 'The property displayOrder must be a number', statusCode: 400 });
  }

  const displayOrderOccupied = await TalkerRepository.findDisplayOrder(displayOrder);

  if (displayOrderOccupied) return ({ error: 'This display order is occupied', statusCode: 400 });
}

export const validateTalkerId = async (id: number) => {
  const talker = await TalkerRepository.find(id);
 
  if (!talker) {
    return({ error: 'Talker not found', statusCode: 404 })
  }
}

export const validateSpectatorId = async (id: number): Promise<error | undefined> => {
  const idExist = await SpectatorRepository.find(id);

  if (!idExist) return ({ error: 'This id does not exist', statusCode: 400 });
}

export const validateSpectator = async (position: number): Promise<error | undefined> => {
  if (!position || typeof position !== 'number') {
    return ({ error: 'The property position must be a number', statusCode: 400 });
  }

  const positionOccupied = await SpectatorRepository.findPosition(position);

  if (positionOccupied) return({ error: 'This position is occupied', statusCode: 400 })
}