import Joi from 'joi';

export const experienceSchema = Joi.object({
  companyName: Joi.string().required(),
  role: Joi.string().required(),
  startDate: Joi.date().required(),
  endDate: Joi.date().optional(),
  description: Joi.string().min(10).max(500).required(),
});
