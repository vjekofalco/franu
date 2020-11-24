import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

const catalogItemsApi = async (req: NextApiRequest, res: NextApiResponse) => {
    if(req.method === 'GET') {
        const prisma = new PrismaClient({ log: ["query"] })

        try {
            const catalogItems = await prisma.catalog.findMany({
                orderBy: [{ createdAt: 'desc' }]
            })
            return res.status(200).json(catalogItems)
        }
        catch (e) {
            res.status(500)
        }
        finally {
            await prisma.$disconnect()
        }
    }

    return res.status(404)
}

export default catalogItemsApi
