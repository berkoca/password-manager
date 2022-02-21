import { NextFunction, Request, Response } from "express";
import Joi from "joi";

export default function validator(schema: Joi.ObjectSchema) {
    return (req: Request, res: Response, next: NextFunction) => {
        const { error, value } = schema.validate(req.body, { abortEarly: false, allowUnknown: true, stripUnknown: true });
        if (error) {
            return res.status(400).json({
                success: false,
                message: `${error.details.map(x => x.message).join(', ')}.`
            });
        } else {
            req.body = value;
            next();
        }
    }
}