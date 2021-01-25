import { NextApiRequest, NextApiResponse } from 'next'

import { connectToDatabase } from '../../../util/mongodb'
import { slugCreator } from '../../../helpers/slug-creator'

type Functionality = {
    name: string,
    value: string
}

type NewCatalogItemRequest = {
    category: string,
    brand: string,
    name: string,
    source: string,
    price: string,
    images: string,
    description: string,
    distributor: string,
    energyEfficiency?: string,
    functionalities?: Array<Functionality>
}

const catalogApi = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        const { db, client } = await connectToDatabase()
        try {
            const request: NewCatalogItemRequest = req.body
            const slug = slugCreator(request.brand)
            const images = {
                list: request.images.split(',')
            }
            const functionalities = {
                list: request.functionalities
            }
            const catalogItem = {
                slug,
                category: request.category,
                brand: request.brand,
                name: request.name,
                source: request.source,
                price: Number(request.price),
                images,
                distributor: request.distributor,
                description: request.description,
                energyEfficiency: request.energyEfficiency,
                functionalities
            }
            const newCatalogItem = await db.collection('catalogue').insertOne(catalogItem)
            res.status(201)
            res.json(newCatalogItem)
        }
        catch (e) {
            console.log(e)
            res.status(500)
        }
    } else {
        return res.status(404)
    }
}

export default catalogApi
