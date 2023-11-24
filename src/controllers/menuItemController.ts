import { Request, Response } from 'express';
import * as MenuItemService from '../services/menuItemService';

export const createMenuItem = async (req: Request, res: Response) => {
    try {
        const createdItem = await MenuItemService.createMenuItem(req.body, req.file, req);
        res.json(createdItem);
    } catch (error) {
        res.status(500).json({ message: 'Error creating menu item', error });
    }
};

export const updateMenuItem = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id);
        const updatedItem = await MenuItemService.updateMenuItem(id, req.body, req.file, req);
        res.json(updatedItem);
    } catch (error) {
        res.status(500).json({ message: 'Error updating menu item', error });
    }
};

export const getMenuItems = async (_: Request, res: Response) => {
    try {
        const items = await MenuItemService.getMenuItems();
        res.json(items);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving menu items', error });
    }
};

export const getMenuItem = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id);
        const item = await MenuItemService.getMenuItem(id);
        if (item) {
            res.json(item);
        } else {
            res.status(404).json({ message: 'Item not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving menu item', error });
    }
};

export const deleteMenuItem = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id);
        await MenuItemService.deleteMenuItem(id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: 'Error deleting menu item', error });
    }
};
