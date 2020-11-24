import { PrismaClient, Catalog } from '@prisma/client'

export const getCatalogItemData = async (slug: string) => {
    const prisma = new PrismaClient({ log: ["query"] })

    try {
        const catalogItem: Catalog = await prisma.catalog.findOne({
            where: {
                slug
            }
        })

        return { ...catalogItem, createdAt: JSON.stringify(catalogItem.createdAt), updatedAt: JSON.stringify(catalogItem.updatedAt)}
    } catch (e) {
        throw e
    } finally {
        await prisma.$disconnect()
    }
}

