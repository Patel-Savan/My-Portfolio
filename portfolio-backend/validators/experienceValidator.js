import Joi from 'joi';

export const experienceSchema = Joi.object({
  title: Joi.string().required(),
  company: Joi.string().required(),
  timePeriod: Joi.string().required(),
  location: Joi.string().required(),
  responsibilities: Joi.array().items(Joi.string().min(1)).required(),
});
