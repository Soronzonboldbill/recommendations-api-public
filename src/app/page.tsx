import Image from "next/image"
import Link from "next/link"
import LargeHeading from "@/components/ui/LargeHeading"
import Paragraph from "@/components/ui/Paragraph"
import DocumentationTabs from "@/components/DocumentationTabs"

import type { Metadata } from "next"
import { Button, buttonVariants } from "@/ui/Button"
import { cn } from "@/lib/utils"

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
                        className="text-black dark:text-white three-d"
                    >
                        Recommendations API
                    </LargeHeading>

                    <Paragraph className="max-w-xl lg:text-left">
                        Find New Songs Through{" "}
                        <Link
                            className="text-black underline underline-offset-2 dark:text-white"
                            href="/login"
                        >
                            Our API
                        </Link>{" "}
                        Or Through Our Convenient{" "}
                        <Link
                            className="text-black underline underline-offset-2 dark:text-white"
                            href="/recommendations"
                        >
                            Form
                        </Link>
                    </Paragraph>

                    <div className="relative w-full max-w-xl lg:max-w-3xl lg:left-1/2 aspect-square lg:absolute">
                        <Image
                            priority
                            className="img-shadow scale-75"
                            quality={100}
                            style={{ objectFit: "contain" }}
                            fill
                            src="/headphones.png"
                            alt="headphones"
                        />
                    </div>
                </div>
                <div className="bg-slate-200/75 max-w-7xl w-full max-auto h-auto pb-10 mb-10 dark:bg-slate-800/75 rounded-md">
                    <div className="flex flex-col justify-center items-center h-auto">
                        <LargeHeading className="flex justify-center m-10">
                            {" "}
                            Quick Start: Link Hub{" "}
                        </LargeHeading>
                        <div className="flex flex-row h-auto gap-6">
                            <Link href="/recommendations">
                                <Button
                                    className={cn(
                                        buttonVariants({ variant: "subtle" }),
                                        "h-72 w-64 text-3xl"
                                    )}
                                >
                                    Find New Songs
                                </Button>
                            </Link>

                            <Link href="/documentation">
                                <Button
                                    className={cn(
                                        buttonVariants({ variant: "subtle" }),
                                        "h-72 w-64 text-3xl"
                                    )}
                                >
                                    Get Connected
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
