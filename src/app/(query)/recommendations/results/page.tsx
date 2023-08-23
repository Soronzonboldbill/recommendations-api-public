import { FC, useEffect } from "react"
import { Metadata } from "next"
import TrackResults from "@/ui/TrackResults"

export const metadata: Metadata = {
    title: "Music Finder | Results",
    description: "Free & Open Source Music Finder Using Spotify API",
}

const page: FC = ({}) => {
    return<TrackResults />
}

export default page
