import { Request, Response } from 'express';

// import * as service from '../services'
import TalkerService from '../services/TalkerService';

//talker

export default class TalkerController {
  constructor(public service: TalkerService) {
    this.service = service;
  }

  getTalker = async (req: Request, res: Response) => {
    const { id } = req.params;
    const talker = await this.service.getTalker(Number(id));
  
    if ('error' in talker) {
      return res.status(talker.statusCode).json({ error: talker.error })
    }
  
    return res.status(200).json({ response: talker });
  }
}
// export const createTalker = async (req: Request, res: Response) => {
//   const { name, age, displayOrder } = req.body;
//   const newTalker = await service.createTalker({ name, age }, displayOrder);

//   if ('error' in newTalker) {
//     return res.status(newTalker.statusCode).json({ error: newTalker.error });;
//   }
  
//   return res.status(201).json({ response: `Talker with id ${newTalker.id} successfully registered` });
// }

// export const getTalker = async (req: Request, res: Response) => {
//   const { id } = req.params;
//   const talker = await service.getTalker(Number(id));

//   if ('error' in talker) {
//     return res.status(talker.statusCode).json({ error: talker.error })
//   }

//   return res.status(200).json({ response: talker });
// }

// export const updateTalker = async (req: Request, res: Response) => {
//   const { displayOrder } = req.body;
//   const { id } = req.params;
//   const talker = await service.updateTalker(Number(id), displayOrder);

//   if (talker) {
//     return res.status(talker.statusCode).json({ error: talker.error });;
//   }

//   return res.status(200).json({ response: `Talker with id ${id} successfully updated` });
// }

// export const deleteTalker = async (req: Request, res: Response) => {
//   const { id } = req.params;
//   const talker = await service.deleteTalker(Number(id));

//   if (talker) {
//     return res.status(talker.statusCode).json({ error: talker.error });
//   }

//   return res.status(204).end();
// }

// //spectator
// export const createSpectator = async (req: Request, res: Response) => {
//   const { name, age, position } = req.body;
//   const newSpectator = await service.createSpectator({name, age}, position);

//   if ('error' in newSpectator) {
//     return res.status(newSpectator.statusCode).json({ error: newSpectator.error });;
//   }

//   return res.status(201).json({ response: `Spectator with id ${newSpectator.id} successfully registered` });
// }

// export const getSpectator = async (req: Request, res: Response) => {
//   const { id } = req.params;
//   const spectator = await service.getSpectator(Number(id));

//   if ('error' in spectator) {
//     return res.status(spectator.statusCode).json({ error: spectator.error })
//   }

//   return res.status(200).json({ response: spectator });
// }

// export const updateSpectator = async (req: Request, res: Response) => {
//   const { position } = req.body;
//   const { id } = req.params;
//   const spectator = await service.updateSpectator(Number(id), position);

//   if (spectator) {
//     return res.status(spectator.statusCode).json({ error: spectator.error });
//   }

//   return res.status(200).json({ response: `Spectator with id ${id} successfully updated` });
// }

// export const deleteSpectator = async (req: Request, res: Response) => {
//   const { id } = req.params;
//   const spectator = await service.deleteSpectator(Number(id));

//   if (spectator) {
//     return res.status(spectator.statusCode).json({ error: spectator.error });
//   }

//   return res.status(204).end();
// }