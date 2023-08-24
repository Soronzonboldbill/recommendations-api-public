"use client"

import { nodejs, python } from "@/helpers/documentation-code"
import { FC } from "react"
import SimpleBar from "simplebar-react"
import Code from "@/ui/Code"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/ui/Tabs"
import Paragraph from "@/ui/Paragraph"
import Link from "next/link"
import { Button, buttonVariants } from "@/ui/Button"
import { cn } from "@/lib/utils"

const DocumentationTabs: FC = () => {
    return (
        <Tabs defaultValue="nodejs" className="max-w-2xl w-full">
            <TabsContent value="nodejs">
                <SimpleBar forceVisible="y">
                    <Code code={nodejs} language="javascript" show />
                </SimpleBar>
            </TabsContent>
            <div className="p-10 flex flex-col gap-6 max-w-4xl">
                <Paragraph className="text-start">
                    To see all available genres, refer to:{" "}
                    <Button
                        className={cn(buttonVariants({ variant: "outline" }))}
                    >
                        <Link href=" https://developer.spotify.com/documentation/web-api/reference/get-recommendation-genres">
                            Genres Link
                        </Link>
                    </Button>{" "}
                    and press the try it button on the console to the right
                </Paragraph>
                <Paragraph className="text-start">
                    For sliders, format your search terms into the object
                    template:{" "} <br />
                    <code className="text-sm">
                        &#123;label: "yourSearchTerm", value: number (between 0
                        and 1)&#125;
                    </code> <br />
                    {" "}and put them into the array as needed
                </Paragraph>
                <Paragraph className="text-start">
                    To see all available search terms: refer to:{" "}
                    <Button
                        className={cn(buttonVariants({ variant: "outline" }))}
                    >
                        <Link href="https://developer.spotify.com/documentation/web-api/reference/get-recommendations">
                            Criteria Link
                        </Link>
                    </Button>{" "}
                    and scroll past seed tracks. This API only uses
                    target_searchTerm to make it's queries
                </Paragraph>
            </div>
        </Tabs>
    )
}

export default DocumentationTabs
