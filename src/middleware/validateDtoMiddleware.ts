import { Request, Response, NextFunction } from 'express'
import { validate } from 'class-validator'

const validateDto = (dtoClass: new () => any) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        const validationObj = Object.assign(new dtoClass(), req.body)
        const errors = await validate(validationObj)

        if (errors.length > 0) {
            res.status(400).json({ errors })
        } else {
            next()
        }
    }
}

export default validateDto
