import { usuariosDao } from '../daos/index.js';

import { Router } from 'express';
import { getIndexController } from '../controller/index.js';
export const index = Router();

index.get('/', getIndexController )