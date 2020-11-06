import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

const storedRequestsApi = async (req: NextApiRequest, res: NextApiResponse) => {
    if(req.method === 'GET') {
        const prisma = new PrismaClient({ log: ["query"] })

        try {
            const requests = await prisma.request.findMany({
                orderBy: [{ createdAt: 'desc' }]
            })
            return res.status(200).json(requests)
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

export default storedRequestsApi
