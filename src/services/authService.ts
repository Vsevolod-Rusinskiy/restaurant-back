import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import {prisma} from '../prismaClient';

export const registerUser = async (username: string, password: string) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    return prisma.user.create({
        data: {
            username,
            password: hashedPassword,
        },
        select: {
            id: true,
            username: true,
        }
    });
};

export const loginUser = async (username: string, password: string) => {
    const user = await prisma.user.findUnique({ where: { username } });
    if (user && await bcrypt.compare(password, user.password)) {
        return jwt.sign(
            {id: user.id, username: user.username},
            process.env.JWT_SECRET as string,
            {expiresIn: '24h'}
        );
    }
    return null;
};
