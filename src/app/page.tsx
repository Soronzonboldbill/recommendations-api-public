import Image from "next/image"
import Link from "next/link"
import LargeHeading from "@/components/ui/LargeHeading"
import Paragraph from "@/components/ui/Paragraph"

import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Music Finder | Home",
    description: "Free & Open Source Music Finder Using Spotify API",
}

export default function Home() {
    return (
        <div className="relative h-screen flex items-center justify-center overflow-x-hidden">
            <div className="container pt-32 max-w-7xl w-full mx-auto h-full">
                <div className="h-full gap-6 flex flex-col justify-start lg:justify-center items-center lg:items-start">
                <LargeHeading
                        size="lg"
                        className="three-d text-black dark:text-white"
                    >
                        Music Finder
                    </LargeHeading>

                    <Paragraph className="max-w-xl lg:text-left">
                        Easily Find Information About Your Favorite Songs Using{" "}
                        <Link
                            className="text-black underline underline-offset-2 dark:text-white"
                            href="/login"
                        >
                            Our API
                        </Link>
                    </Paragraph>

                    <div className="relative w-full max-w-xl lg:max-w-3xl lg:left-1/2 aspect-square lg:absolute">
                        <Image
                            priority
                            className="img-shadow "
                            quality={100}
                            style={{ objectFit: "contain" }}
                            fill
                            src="/headphones.png"
                            alt="headphones"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
