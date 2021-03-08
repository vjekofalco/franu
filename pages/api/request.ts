import { NextApiRequest, NextApiResponse } from 'next'

import { connectToDatabase } from '../../util/mongodb'
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
    appliances?: string[],
    termsAndConditions: boolean
}

// Supports only POST
const requestApi = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        const { db } = await connectToDatabase()
        const newRequest: RequestData = req.body
        try {
            const slug = slugCreator(newRequest.email)
            const kitchenRequest = {
                slug,
                userData: {
                    firstName: newRequest.firstName,
                    lastName: newRequest.lastName,
                    email: newRequest.email,
                    phone: newRequest.phoneNumber,
                    termsAndConditions: newRequest.termsAndConditions
                },
                requestInfo: {
                    appliances: newRequest.appliances,
                    kitchenShape: newRequest.kitchenShape
                }
            }

            if (newRequest.address) {
                kitchenRequest.userData['address'] = `${newRequest.address} ${newRequest.number || ''} ${newRequest.zip || ''} ${newRequest.city || ''}`
            }

            const newKitchenRequest: Request = await db.collection('requests').insertOne(kitchenRequest)

            res.status(201)
            res.json(newKitchenRequest)
        }
        catch (error) {
            console.log(error)
            res.status(500)
            res.json({ error })
        }
    } else {
        return res.status(404)
    }
}

export default requestApi
