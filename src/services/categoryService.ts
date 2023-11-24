import { prisma } from '../prismaClient';

export const getAllCategories = async () => {
    return prisma.category.findMany();
};

export const createCategory = async (data: any) => {
    return prisma.category.create({ data });
};

export const getCategoryById = async (id: number) => {
    return prisma.category.findUnique({
        where: { id },
        include: { items: true }
    });
};

export const getAllCategoriesWithItems = async () => {
    return prisma.category.findMany({
        include: { items: true }
    });
};

export const updateCategory = async (id: number, newData: any) => {
    return prisma.category.update({
        where: { id },
        data: newData
    });
};

export const deleteCategory = async (id: number) => {
    return prisma.category.delete({ where: { id } });
};
