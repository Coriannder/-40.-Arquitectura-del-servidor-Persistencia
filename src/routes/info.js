import compression from 'compression'

import { Router } from 'express';
import { getInfoController, getInfoZipController } from '../controller/info.js';

export const info = Router();

info.get('/info', getInfoController )
info.get('/zip' , compression() , getInfoZipController )



