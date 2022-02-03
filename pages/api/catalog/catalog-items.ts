import { NextApiRequest, NextApiResponse } from "next"

import { connectToDatabase } from "../../../util/mongodb"

const catalogItemsApi = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const { db } = await connectToDatabase()

    try {
      const catalogItems = await db
        .collection("catalogue")
        .find({})
        .limit(100)
        .toArray()

      return res.status(200).json(catalogItems)
    } catch (e) {
      res.status(500)
    }
  }

  return res.status(404)
}

export default catalogItemsApi
