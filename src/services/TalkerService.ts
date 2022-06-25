import { ISpectator, ITalker } from '../interfaces';
// import TalkerModel, * as talkerRepository from '../models/TalkerModels';
import TalkerModel from '../models/TalkerModels';

// import * as spectatorRepository from '../models/SpectatorModels';
import * as validators from '../utils';
import connection from '../models/connection';

// Talkers

export default class TalkerService {
  public model: TalkerModel;

  constructor(model: TalkerModel) {
    this.model = model;
  }

  getTalker = async (id: number): Promise<ITalker | validators.error > => {
    const talker = await this.model.find(id);
   
    if (!talker) {
      return({ error: 'Talker not found', statusCode: 404 })
    }
    return talker;
  }
}

// export const createTalker = async (talkerInfo: Pick<ITalker, 'name' | 'age'>, displayOrder: ITalker['displayOrder']): Promise<{ id: number } | validators.error> => {
//   const { name, age } = talkerInfo;
//   const validPerson = validators.validatePerson(name, age);

//   if (validPerson) return validPerson;

//   const validDisplayOrder = await validators.validateTalkerDisplayOrder(displayOrder);

//   if (validDisplayOrder) return validDisplayOrder;
  
//   const newTalker = await talkerRepository.create({name, age, displayOrder});

//   return { id: newTalker }
// }

// export const getTalker = async (id: number): Promise<ITalker | validators.error > => {
//   const talker = await talkerRepository.find(id);
 
//   if (!talker) {
//     return({ error: 'Talker not found', statusCode: 404 })
//   }
//   return talker;
// }

// export const updateTalker = async (id: number, displayOrder: ITalker['displayOrder']): Promise<void | validators.error>  => {
//   const validId = await validators.validateTalkerId(id);

//   if (validId) return validId;
  
//   const validDisplayOrder = await validators.validateTalkerDisplayOrder(displayOrder);

//   if (validDisplayOrder) return validDisplayOrder;
  
//   await talkerRepository.update({ id, displayOrder });
// }

// export const deleteTalker = async (id: number): Promise<void | validators.error> => {
//   const validId = await validators.validateTalkerId(id);

//   if (validId) return validId;

//   talkerRepository.destroy(id);
// }

// // Spectators

// export const createSpectator = async (spectatorInfo: Pick<ITalker, 'name' | 'age'>, position: ISpectator['position']) => {
//   const { name, age } = spectatorInfo;
//   const validPerson = validators.validatePerson(name, age);

//   if (validPerson) return validPerson;

//   const validPosition = await validators.validateSpectator(position);

//   if (validPosition) return validPosition;
  
//   const id = await spectatorRepository.create({ name, age, position });

//   return { id };
// }

// export const getSpectator = async (id: number): Promise<ISpectator | validators.error> => {
//   const spectator = await spectatorRepository.find(id);

//   if (!spectator) {
//     return({ error: 'Spectator not found', statusCode: 404 })
//   }

//   return spectator;
// }

// export const updateSpectator = async (id: number, position: ISpectator['position']): Promise<void | validators.error> => {
//   const validId = await validators.validateSpectatorId(id);
  
//   if (validId) return validId;

//   const validPosition = await validators.validateSpectator(position);

//   if (validPosition) return validPosition;
  
//   spectatorRepository.update({ id, position });
// }

// export const deleteSpectator = async (id: number): Promise<void | validators.error>  => {
//   const validId = await validators.validateSpectatorId(id);

//   if (validId) return validId;
  
//   spectatorRepository.destroy(id);
// }