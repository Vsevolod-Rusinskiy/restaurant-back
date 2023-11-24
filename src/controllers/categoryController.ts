
import { Request, Response } from 'express';
import * as CategoryService from '../services/categoryService';

export const getAllCategories = async (req: Request, res: Response) => {
    try {
        const categories = await CategoryService.getAllCategories();
        res.json(categories);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving categories', error });
    }
};

export const createCategory = async (req: Request, res: Response) => {
    try {
        const data = req.body;
        const newCategory = await CategoryService.createCategory(data);
        res.json(newCategory);
    } catch (error) {
        res.status(500).json({ message: 'Error creating category', error });
    }
};

export const getCategoryById = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id);
        const category = await CategoryService.getCategoryById(id);
        if (category) {
            res.json(category);
        } else {
            res.status(404).json({ message: 'Category not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving category', error });
    }
};

export const getAllCategoriesWithItems = async (req: Request, res: Response) => {
    try {
        const categories = await CategoryService.getAllCategoriesWithItems();
        res.json(categories);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving categories with items', error });
    }
};

export const updateCategory = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id);
        const newData = req.body;
        const updatedCategory = await CategoryService.updateCategory(id, newData);
        res.json(updatedCategory);
    } catch (error) {
        res.status(500).json({ message: 'Error updating category', error });
    }
};

export const deleteCategory = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id);
        await CategoryService.deleteCategory(id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: 'Error deleting category', error });
    }
};