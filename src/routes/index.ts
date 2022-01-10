import loginRoutes from './loginRoutes';
import gameRoutes from './gameRoutes';
import { Express } from 'express';

export default (app: Express) => {
	app.use('/login', loginRoutes);
	app.use('/game', gameRoutes);
};
