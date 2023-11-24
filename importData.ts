import { PrismaClient } from '@prisma/client';
import * as fs from 'fs';

const prisma = new PrismaClient();

async function main() {
    const data = JSON.parse(fs.readFileSync('data.json', 'utf8'));
    console.log(data)

    for (const categoryData of data.menuItems) {
        const category = await prisma.category.create({
            data: {
                name: categoryData.category,
                items: {
                    create: categoryData.items.map((item: any) => ({
                        name: item.name,
                        description: item.description,
                        price: item.price,
                    })),
                },
            },
        });

        console.log(`Created category with id: ${category.id}`);
    }
}

main()
    .catch((e) => {
        throw e;
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
