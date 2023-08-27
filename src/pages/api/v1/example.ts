import { NextApiRequest, NextApiResponse } from "next"
import { withMethods } from "@/lib/api-middlewares/with-methods"


const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        return res.status(200).json({ data: "success" }) 
    } catch (error) {
        return res.status(500).json({ data: "error" })        
    }
}  

export default withMethods(["GET"], handler)
