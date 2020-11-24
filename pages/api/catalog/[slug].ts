import { NextApiRequest, NextApiResponse } from 'next'

import { getCatalogItemData } from '../../../services/catalog'

const catalogItemApi = async (req: NextApiRequest, res: NextApiResponse) => {
    if(req.method === 'GET') {
        try {
            const slug: string = req.query.slug[0]

            const catalogItem = getCatalogItemData(slug)
            return res.status(200).json(catalogItem)
        }
        catch (e) {
            res.status(500)
        }
    }

    return res.status(404)
}

export default catalogItemApi
