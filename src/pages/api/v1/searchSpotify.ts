import { NextApiRequest, NextApiResponse } from "next"
import { withMethods } from "@/lib/api-middlewares/with-methods"
import getAuth from "./connectSpotify"
import axios from "axios"
import qs from "qs"

const validResponse = 200
const internalError = 500

const searchSpotify = async (
    spotifyToken: any,
    criteriaList: { label: string; value: string }, 
    searchTerm: string
) => {
    const searchString = `q=remaster%20${criteriaList.value}&type=${searchTerm}`

    var options: any = {
        method: "GET", 
        url: `https://api.spotify.com/v1/search?${searchString}`, 
        headers: {
            Authorization: `Bearer ${spotifyToken.access_token}`,
        }
    }

    try {
        const resultsFromSearch = await axios.request(options)
        return resultsFromSearch.data
    } catch (error) {
        console.log(error)
        throw new Error("Could Not Search Spotify")
    }
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const criteriaList = req.body.mediaList
    const searchTerm = req.body.searchTerm

    try {
        const spotifyToken = await getAuth()
        const results = await searchSpotify(
            spotifyToken,
            criteriaList,
            searchTerm
        )
        return res
            .status(validResponse)
            .json({ spotifyToken: spotifyToken, searchResults: results })
    } catch (error) {
        console.log(error)
        return res
            .status(internalError)
            .json({ error: (error as Error).message })
    }
}

export default withMethods(["POST"], handler)
