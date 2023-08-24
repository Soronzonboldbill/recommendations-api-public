import { FC } from "react"
import { Metadata } from "next"
import TrackResults from "@/ui/TrackResults"
import LargeHeading from "@/ui/LargeHeading"
import Paragraph from "@/ui/Paragraph"
import Icons from "@/components/Icons"
import { Button, buttonVariants } from "@/ui/Button"
import { cn } from "@/lib/utils"
import Link from "next/link"

export const metadata: Metadata = {
    title: "Music Finder | Results",
    description: "Free & Open Source Music Finder Using Spotify API",
}

const page: FC = ({}) => {
    return (
        <div className="container max-w-7xl mx-auto">
            <div className="flex flex-col items-center justify-center gap-6">
                <LargeHeading>Spotify Query Results</LargeHeading>
                <Paragraph className="flex gap-3">
                    <Icons.Heart className="text-red-500" /> Enjoy!{" "}
                    <Icons.Heart className="text-red-500" />
                </Paragraph>
                <TrackResults />
                <Button className={cn(buttonVariants({ variant: "outline" }))}>
                    <Link href="/recommendations">Make Another Query </Link>
                </Button>
            </div>
        </div>
    )
}

export default page
