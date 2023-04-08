import { Router } from 'express';
import { eventRouter } from './event.route';
const router = Router();

router.use('/event', eventRouter);

export default router;
