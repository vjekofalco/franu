import { connectToDatabase } from "../../util/mongodb"

export const getCatalogItemData = async (slug: string) => {
  const { db } = await connectToDatabase()

  try {
    const catalogItem = await db.collection("catalogue").findOne({
      slug,
    })

    return { ...catalogItem, _id: JSON.stringify(catalogItem._id) }
  } catch (e) {
    throw e
  }
}
