import Joi from 'joi';

export const createEventSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  type: Joi.string().required(),
  duration: Joi.number().required(),
  date: Joi.date().required(),
});

export const fetchEventSchema = Joi.object({
  month: Joi.date().required(),
});
