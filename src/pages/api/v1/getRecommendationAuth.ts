import { NextApiRequest, NextApiResponse } from "next"
import { db } from "@/lib/db"
import { withMethods } from "@/lib/api-middlewares/with-methods"

const validResponse = 200
const internalError = 500

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const apiKey = await db.apiKey.findFirst({
            where: { id: "recommedationsForm" },
        })
        return res.status(validResponse).json({ apiKey: apiKey?.key })
    } catch (error) {
        return res.status(internalError).json({ apiKey: null })
    }
}

export default withMethods(["GET"], handler)
