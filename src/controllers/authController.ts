import { Request, Response } from 'express';
import * as AuthService from '../services/authService';

export const register = async (req: Request, res: Response) => {
    const { username, password } = req.body;

    try {
        const user = await AuthService.registerUser(username, password);
        res.status(201).json({ message: "User created successfully", user });
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: 'Error creating user', error: error.message });
        } else {
            res.status(500).json({ message: 'Unknown error' });
        }
    }
};

export const login = async (req: Request, res: Response) => {
    const { username, password } = req.body;

    try {
        const token = await AuthService.loginUser(username, password);

        if (token) {
            res.json({ token });
        } else {
            res.status(401).json({ message: 'Неверные учетные данные' });
        }
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: 'Ошибка при входе в систему', error: error.message });
        } else {
            res.status(500).json({ message: 'Неизвестная ошибка' });
        }
    }
};
