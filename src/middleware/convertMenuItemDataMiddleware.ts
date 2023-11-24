import {NextFunction, Request, Response} from "express";


const convertPriceAndCategoryId = (req: Request, res: Response, next: NextFunction) => {
    if (req.body.price) {
        req.body.price = parseFloat(String(req.body.price))
    }
    if (req.body.categoryId) {
        req.body.categoryId = parseInt(String(req.body.categoryId), 10);
    }
    next();
};

export default convertPriceAndCategoryId