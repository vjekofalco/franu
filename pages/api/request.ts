import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

// Supports only POST
const requestApi = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        const prisma = new PrismaClient({ log: ["query"] })

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
                },
                requestInfo: {
                    appliances: body.appliances,
                    kitchenShape: body.kitchenShape
                }
            }

            if (body.address) {
                kitchenRequest.userData['address'] = `${body.address} ${body.number || ''} ${body.zip || ''} ${body.city || ''}`
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
