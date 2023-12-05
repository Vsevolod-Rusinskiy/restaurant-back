import jwt from 'jsonwebtoken'
import { Response, NextFunction } from 'express'
import { UserDto } from '../dtos/userDto'
import { ExtendedRequest } from '../interfaces/express-extensions.interface'

const authenticateTokenMiddleware = (req: ExtendedRequest, res: Response, next: NextFunction) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if (token == null) return res.sendStatus(401)

    jwt.verify(token, process.env.JWT_SECRET || 'your_jwt_secret', (err, decodedToken) => {
        if (err) return res.sendStatus(403)

        const payload = decodedToken as UserDto
        req.user = payload

        next()
    })
}
export default authenticateTokenMiddleware
