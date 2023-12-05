import { prisma } from '../prismaClient'
import { Request } from 'express'

export const createMenuItem = async (data: any, file: Express.Multer.File | undefined, req: Request) => {
    let imageUrl = null
    if (file) {
        imageUrl = `${req.protocol}://${req.get('host')}/uploads/${file.filename}`
    }

    return prisma.menuItem.create({
        data: {
            name: data.name,
            description: data.description,
            price: data.price,
            imageUrl: imageUrl,
            category: {
                connect: { id: data.categoryId },
            },
        },
    })
}

export const updateMenuItem = async (id: number, data: any, file: Express.Multer.File | undefined, req: Request) => {
    let imageUrl = data.imageUrl
    if (file) {
        imageUrl = `${req.protocol}://${req.get('host')}/uploads/${file.filename}`
    }

    return prisma.menuItem.update({
        where: { id: id },
        data: {
            name: data.name,
            description: data.description,
            price: data.price,
            categoryId: data.categoryId,
            imageUrl: imageUrl,
        },
    })
}

export const getMenuItems = async () => {
    return prisma.menuItem.findMany()
}

export const getMenuItem = async (id: number) => {
    return prisma.menuItem.findUnique({
        where: { id: id },
    })
}

export const deleteMenuItem = async (id: number) => {
    return prisma.menuItem.delete({
        where: { id: id },
    })
}
