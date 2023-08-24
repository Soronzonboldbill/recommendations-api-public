import axios from "axios"
import qs from "qs"

const clientID = process.env.SPOTIFY_URL
const clientSecret = process.env.SPOTIFY_SECRET

export default async function getAuth(): Promise<any> {
    try {
        const url = "https://accounts.spotify.com/api/token"
        const data = qs.stringify({ grant_type: "client_credentials" })

        const authToken = Buffer.from(
            `${clientID}:${clientSecret}`,
            "utf-8"
        ).toString("base64")

        const response = await axios.post(url, data, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                Authorization: `Basic ${authToken}`,
            },
        })

        return response.data
    } catch (error) {
        throw new Error("Unable To Fetch Access Token")
    }
}

