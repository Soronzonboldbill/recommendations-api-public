import SearchForm from "@/ui/SearchForm"
import LargeHeading from "@/ui/LargeHeading"
import Paragraph from "@/ui/Paragraph"
import { Metadata } from "next"
import { inputSchema } from "@/types/input-types"

export const metadata: Metadata = {
    title: "Music Finder | Search",
    description: "Free & Open Source Music Finder Using Spotify API",
}

const page = ({}) => {
    const inputArr = [
        {
            name: "Name",
            value: "",
            type: "text",
            id: "name",
            label: "Search Term",
            placeholder: "Search Term",
            disabled: false,
        },
    ] as unknown as (typeof inputSchema)[]

    return (
        <div className="container max-w-7xl mx-auto mt-12">
            <div className="flex flex-col items-center justify-center gap-6">
                <LargeHeading>Search Spotify</LargeHeading>
                <Paragraph>
                    Search For Your Favorite Songs And Find Out More About Them
                </Paragraph>
                <SearchForm inputList={inputArr}></SearchForm>
            </div>
        </div>
    )
}

export default page
