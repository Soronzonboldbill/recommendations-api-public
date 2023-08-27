"use client"

import { nodejs } from "@/helpers/documentation-code"
import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/ui/Button"
import Code from "@/ui/Code"
import Paragraph from "@/ui/Paragraph"
import { Tabs, TabsContent } from "@/ui/Tabs"
import Link from "next/link"
import { FC } from "react"
import SimpleBar from "simplebar-react"

const DocumentationTabs: FC = () => {
    return (
        <Tabs defaultValue="nodejs" className="max-w-2xl w-full">
            <TabsContent value="nodejs">
                <SimpleBar forceVisible="y">
                    <Code code={nodejs} language="javascript" show />
                </SimpleBar>
            </TabsContent>
            <div className="p-10 flex flex-col gap-6">
                <Paragraph>
                    <strong>Note:</strong> The API is rate limited to 25
                    requests per hour
                </Paragraph>
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
                    template: <br />
                    <code className="text-sm">
                        &#123;label: &quot;yourSearchTerm&quot;, value: number
                        (between 0 and 1)&#125;
                    </code>{" "}
                    <br /> and put them into the array as needed
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
                    target_searchTerm to make it&apos;s queries
                </Paragraph>
            </div>
        </Tabs>
    )
}

export default DocumentationTabs
