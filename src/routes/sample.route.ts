import { Router } from 'express';
import { getSample, postSample } from '../controllers/sample.controller';

const router = Router();

router.get('/', getSample);

router.post('/', postSample);

export { router as sampleRouter };
