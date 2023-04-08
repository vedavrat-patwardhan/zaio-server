import EventModel from '@src/model/event.model';
import { isWeekend, updateToNextMonday } from '@src/services/event.service';
import { NotFoundError } from '@src/utils/apiError';
import { SuccessResponse } from '@src/utils/apiResponse';
import catchAsync from '@src/utils/catchAsync';

export const createEvent = catchAsync(async (req, res, _next) => {
  let { date } = req.body;
  if (isWeekend(date)) {
    date = updateToNextMonday(date);
  }
  const id = (await EventModel.countDocuments().exec()) + 1;

  // Create new admin document
  const event = new EventModel({
    ...req.body,
    id,
    date,
  });

  // Save admin document to database
  await event.save();

  // Return success response
  return new SuccessResponse('Event created successfully', event).send(res);
});

export const monthlyEvents = catchAsync(async (req, res, next) => {
  const { month } = req.params;
  const events = await EventModel.find({
    $expr: {
      $eq: [{ $month: '$date' }, month],
    },
  })
    .lean()
    .exec();

  if (!events) {
    throw next(new NotFoundError('Event not found'));
  }

  return new SuccessResponse(
    'success',
    events.map((event) => ({
      title: event.title,
      description: event.description,
      type: event.type,
      duration: event.duration,
      start: event.date,
      end: event.date,
    })),
  ).send(res);
});
