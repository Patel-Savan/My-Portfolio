import Joi from 'joi'

export const skillSchema = Joi.object({
  name : Joi.string().required(),
  category : Joi.string().required()  
})