import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

// Supports only POST
const requestApi = async (req: NextApiRequest, res: NextApiResponse) => {
    const prisma = new PrismaClient({ log: ["query"] })

    if (req.method === 'POST') {
        try {
            const { body } = req
            const slug = body.email + '-' + Date.now()
            const kitchenRequest = {
                slug,
                userData: {
                    firstName: body.firstName,
                    lastName: body.lastName,
                    email: body.email,
                    phone: body.phoneNumber
                }
            }

            const newKitchenRequest = await prisma.request.create({
                data: kitchenRequest
            })

            res.status(201)
            res.json(newKitchenRequest)
        }
        catch (error) {
            console.log(error)
            res.status(500)
            res.json({ error })
        }
        finally {
            await prisma.$disconnect()
        }
    } else {
        return res.status(404)
    }
}

export default requestApi
