import { Router } from 'express';
import validate from '@src/middleware/validate';
import {
  createEventSchema,
  fetchEventSchema,
} from '@src/validation/event.validate';
import { createEvent, monthlyEvents } from '@src/controller/event.controller';

export const eventRouter: Router = Router();

//*POST ROUTE
eventRouter.post('/create', validate({ body: createEventSchema }), createEvent);

//*GET ROUTE
eventRouter.get(
  '/:month',
  validate({ params: fetchEventSchema }),
  monthlyEvents,
);
