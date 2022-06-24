import express from 'express';

import * as Controller from './controllers';

const app = express();

app.use(express.json());

const { PORT } = process.env;

app.post('/talker', Controller.createTalker);
app.get('/talker/:id', Controller.getTalker);
app.put('/talker/:id', Controller.updateTalker);
app.delete('/talker/:id',Controller.deleteTalker);

app.post('/spectator', Controller.createSpectator);
app.get('/spectator/:id', Controller.getSpectator);
app.put('/spectator/:id', Controller.updateSpectator);
app.delete('/spectator/:id', Controller.deleteSpectator);

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});