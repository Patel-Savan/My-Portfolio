import Joi from 'joi'

export const skillSchema = Joi.object({
  name : Joi.string().required(),
  proficiency : Joi.number().integer().min(1).max(5).required()  
})