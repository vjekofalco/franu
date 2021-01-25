import { NextApiResponse, NextApiRequest } from 'next'

import { connectToDatabase } from '../../util/mongodb'

const storedRequestsApi = async (req: NextApiRequest, res: NextApiResponse) => {
    if(req.method === 'GET') {
        const { db } = await connectToDatabase()

        try {
            const requests = await db.collection('requests')
                .find({})
                .limit(100)
                .toArray()

            return res.status(200).json(requests)
        }
        catch (e) {
            console.log(e)
            res.status(500)
        }
    }

    return res.status(404)
}

export default storedRequestsApi
