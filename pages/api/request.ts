import { PrismaClient, Request } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

import { slugCreator } from '../../helpers/slug-creator'

type RequestData = {
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: string,
    address?: string,
    number?: string,
    zip?: string,
    city?: string,
    message?: string,
    kitchenShape?: string,
    appliances?: string[]
}

// Supports only POST
const requestApi = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        const prisma = new PrismaClient({ log: ["query"] })
        const newRequest: RequestData = req.body
        try {
            const slug = slugCreator(newRequest.email)
            const kitchenRequest = {
                slug,
                userData: {
                    firstName: newRequest.firstName,
                    lastName: newRequest.lastName,
                    email: newRequest.email,
                    phone: newRequest.phoneNumber
                },
                requestInfo: {
                    appliances: newRequest.appliances,
                    kitchenShape: newRequest.kitchenShape
                }
            }

            if (newRequest.address) {
                kitchenRequest.userData['address'] = `${newRequest.address} ${newRequest.number || ''} ${newRequest.zip || ''} ${newRequest.city || ''}`
            }

            const newKitchenRequest: Request = await prisma.request.create({
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
