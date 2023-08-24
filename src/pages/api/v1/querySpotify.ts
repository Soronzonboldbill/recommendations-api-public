import { NextApiRequest, NextApiResponse } from "next"
import { withMethods } from "@/lib/api-middlewares/with-methods"
import axios from "axios"
import getAuth from "./connectSpotify"
import { db } from "@/lib/db"

const validResponse = 200
const internalError = 500

const querySpotify = async (
    spotifyToken: any,
    genreList: string[],
    sliders: { label: string; value: number }[]
) => {
    const genreString =
        "&seed_genres=" +
        genreList.reduce((acc, genre) => acc + genre + ",", "").slice(0, -1)
    const paramString = sliders.reduce(
        (acc, currItem) =>
            acc + "&target_" + currItem.label + "=" + currItem.value,
        ""
    )

    var options: any = {
        method: "GET",
        url: `https://api.spotify.com/v1/recommendations?${genreString}${paramString}`,
        headers: {
            Authorization: `Bearer ${spotifyToken.access_token}`,
        },
    }

    try {
        const resultsFromQuery = await axios.request(options)

        return resultsFromQuery.data
    } catch (error) {
        console.log(error)
        throw new Error("Could Not Query Spotify")
    }
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const genreList = req.body.genreList
    const sliderList = req.body.sliders
    const apiKey = req.headers.authorization

    if (!apiKey) {
        return res.status(401).json({ error: "Unauthorized" })
    }

    if (genreList.length === 0 || genreList.length > 5) {
        return res
            .status(400)
            .json({ error: "Either Genrelist is empty or exceeds 5 items" })
    }

    try {
        // validates api key
        const validApiKey = await db.apiKey.findFirst({
            where: {
                key: apiKey,
                enabled: true,
            },
        })

        if (!validApiKey) {
            return res.status(401).json({ error: "Unauthorized" })
        }

        const spotifyToken = await getAuth()
        const results = await querySpotify(spotifyToken, genreList, sliderList)

        return res
            .status(validResponse)
            .json({ spotifyToken: spotifyToken, queryResults: results })
    } catch (error: any) {
        console.log(error)
        return res
            .status(internalError)
            .json({ error: (error as Error).message })
    }
}

export default withMethods(["POST"], handler)
