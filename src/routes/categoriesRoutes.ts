import { Router } from 'express'
import {
    getAllCategories,
    createCategory,
    getCategoryById,
    updateCategory,
    deleteCategory,
    getAllCategoriesWithItems,
} from '../controllers/categoryController'
import authenticateTokenMiddleware from '../middleware/authenticateTokenMiddleware'
import { CreateCategoryDto, UpdateCategoryDto } from '../dtos/categoryDto'
import validateDto from '../middleware/validateDtoMiddleware'

const router = Router()

router.get('/', getAllCategories)
router.get('/with-items', getAllCategoriesWithItems)
router.get('/:id', getCategoryById)

router.post('/', authenticateTokenMiddleware, validateDto(CreateCategoryDto), createCategory)
router.put('/:id', authenticateTokenMiddleware, validateDto(UpdateCategoryDto), updateCategory)
router.delete('/:id', authenticateTokenMiddleware, deleteCategory)

export default router
