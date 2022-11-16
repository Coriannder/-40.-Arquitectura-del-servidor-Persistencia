import { Router } from 'express';
import { getNoImplementRoutesController } from '../controller/noImplementRoutes.js';
export const noImplementRoutes = Router();



noImplementRoutes.get('/', getNoImplementRoutesController)