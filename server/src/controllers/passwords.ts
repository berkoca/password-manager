import { Request, Response } from "express";
import httpStatus from "http-status";
import { Database } from "../database";
import { GeneratePassword } from "../library/GeneratePassword";
import { Password } from "../models/Password";

export class PasswordsController {
    public async getPasswords(req: Request, res: Response) {
        try {
            const passwordsRepository = Database.connection.getRepository(Password);
            const passwords = await passwordsRepository.find();
            return res.status(httpStatus.OK).json({ data: passwords });
        } catch (error) {
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: (error as any).message });
        }
    }
    
    public async getPassword(req: Request, res: Response) {
        try {
            const passwordsRepository = Database.connection.getRepository(Password);
            const password = await passwordsRepository.findOne({ where: { id: req.params.id } });
            if (!password) {
                return res.status(httpStatus.NOT_FOUND).json({ message: `Password with id "${req.params.id}" has not been found.` });
            }
            return res.status(httpStatus.OK).json({ data: password });
        } catch (error) {
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: (error as any).message });
        }
    }
    
    public async newPassword(req: Request, res: Response) {
        try {
            const passwordsRepository = Database.connection.getRepository(Password);
            if (!req.body.password.useNumbers && !req.body.password.useSymbols && !req.body.password.useLowercaseLetters && !req.body.password.useUppercaseLetters) return res.status(httpStatus.BAD_REQUEST).json({ message: "You must send true value of one of useNumbers, useSymbols, useLowercaseLetters or useUppercaseLetters field in password object in request body object." });
            const generatePassword = new GeneratePassword(req.body.password);
            const password = passwordsRepository.create({ application: req.body.application, username: req.body.username, password: generatePassword.new() });
            await passwordsRepository.save(password);
            return res.status(httpStatus.OK).json({ data: password });
        } catch (error) {
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: (error as any).message });
        }
    }
    
    public async deletePassword(req: Request, res: Response) {
        try {
            const passwordsRepository = Database.connection.getRepository(Password);
            const password = await passwordsRepository.findOne({ where: { id: req.params.id } });
            if (!password) {
                return res.status(httpStatus.NOT_FOUND).json({ message: `Password with id "${req.params.id}" has not been found.` });
            }
            await passwordsRepository.remove(password);
            return res.status(httpStatus.OK).json({ message: `Password with id "${req.params.id}" has been deleted successfully.` });
        } catch (error) {
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: (error as any).message });
        }
    }
    
    public async editPassword(req: Request, res: Response) {
        try {
            const passwordsRepository = Database.connection.getRepository(Password);
            const password = await passwordsRepository.findOne({ where: { id: req.params.id } });
            if (!password) {
                return res.status(httpStatus.NOT_FOUND).json({ message: `Password with id "${req.params.id}" has not been found.` });
            }
            await passwordsRepository.update({ id: password.id }, req.body);
            const copy = JSON.parse(JSON.stringify(password));
            for (const field in req.body) {
                copy[field] = req.body[field];
            }
            return res.status(httpStatus.OK).json({ data: copy, message: "Changes has been saved!" });
        } catch (error) {
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: (error as any).message });
        }
    }
}