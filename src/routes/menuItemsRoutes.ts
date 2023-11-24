import {Router} from 'express';
import validateDto from '../middleware/validateDtoMiddleware';
import {CreateMenuItemDto, UpdateMenuItemDto} from '../dtos/menuItemDto';
import convertPriceAndCategoryId from '../middleware/convertMenuItemDataMiddleware'


import {
    createMenuItem,
    getMenuItems,
    getMenuItem,
    updateMenuItem,
    deleteMenuItem
} from '../controllers/menuItemController';
import upload from "../middleware/multerMiddleware";
import authenticateTokenMiddleware from "../middleware/authenticateTokenMiddleware";

const router = Router();




router.get('/', getMenuItems);
router.get('/:id', getMenuItem);


router.post('/', upload.single('image'), authenticateTokenMiddleware, convertPriceAndCategoryId, validateDto(CreateMenuItemDto), createMenuItem);
router.put('/:id', upload.single('image'), authenticateTokenMiddleware, convertPriceAndCategoryId, validateDto(UpdateMenuItemDto), updateMenuItem);
router.delete('/:id', authenticateTokenMiddleware, deleteMenuItem);

export default router;




