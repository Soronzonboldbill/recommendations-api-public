import { FC } from "react"
import LargeHeading from "@/ui/LargeHeading"
import Paragraph from "@/ui/Paragraph"
import { Metadata } from "next"
import RecommendationsForm from "@/ui/RecommendationsForm"
import { inputSchema } from "@/types/input-types"
import { genreList } from "@/helpers/genreList"

export const metadata: Metadata = {
    title: "Music Finder | Recommendations",
    description: "Free & Open Source Music Finder Using Spotify API",
}

const page: FC = ({}) => {
    const inputs = [
        {
            placeholder: "Genre",
            value: "",
            type: "combo",
            contentList: genreList,
            id: "genreId",
            name: "genre",
            disabled: false,
            label: "Genre",
        },
        {
            type: "slider",
            name: "Danceability",
            label: "Danceability",
            id: "danceability",
            placeholder: "Danceability",
            disabled: false,
        },
        {
            type: "slider",
            name: "Acoustics",
            label: "Acoustics",
            id: "acousticness",
            placeholder: "Acoustics",
            disabled: false,
        },
        {
            type: "slider",
            name: "Energy",
            label: "Energy",
            id: "energy",
            placeholder: "Energy",
            disabled: false,
        },
        {
            type: "slider",
            name: "Instrumentalness",
            label: "Instrumentalness",
            id: "instrumentalness",
            placeholder: "Instrumentalness",
            disabled: false,
        },
        {
            type: "slider",
            name: "Liveness",
            label: "Liveness",
            id: "liveness",
            placeholder: "Liveness",
            disabled: false,
        },
        {
            type: "slider",
            name: "Tempo",
            label: "Tempo",
            id: "tempo",
            placeholder: "Tempo",
            disabled: false,
        },
        {
            type: "slider",
            name: "Valence",
            label: "Valence",
            id: "valence",
            placeholder: "Valence",
            disabled: false,
        },
    ] as unknown as (typeof inputSchema)[]
    return (
        <div className="container max-w-7xl mx-auto mt-12">
            <div className="flex flex-col gap-6 items-center">
                <LargeHeading>Spotify Recommendations</LargeHeading>
                <Paragraph>
                    Craving a new musical sound? You're in the right place,
                    search below for your specific tastes
                </Paragraph>
                <RecommendationsForm inputList={inputs} />
            </div>
        </div>
    )
}

export default page
