import Joi from 'joi';

export const projectSchema = Joi.object({
  title: Joi.string().min(3).max(50).required(),
  description: Joi.string().min(10).required(),
  techStack: Joi.array().items(Joi.string().min(1)).required(),
  liveLink: Joi.string().uri().optional(),
  repoLink: Joi.string().uri().required(),
});
