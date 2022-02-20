import Joi from "joi";

export const PasswordValidationSchema = {
    NewPassword: Joi.object({
        application: Joi.string().min(1).required(),
        username: Joi.string().min(1).required(),
        password: Joi.object().keys({
            length: Joi.number().required(),
            useNumbers: Joi.boolean().required(),
            useSymbols: Joi.boolean().required(),
            useLowercaseLetters: Joi.boolean().required(),
            useUppercaseLetters: Joi.boolean().required(),
        }).required()
    }),
    EditPassword: Joi.object({
        application: Joi.string().min(1),
        username: Joi.string().min(1),
        password: Joi.string().min(1)
    })
}