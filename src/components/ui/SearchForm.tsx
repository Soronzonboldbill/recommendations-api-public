"use client"

import { FC, FormEventHandler, useState } from "react"
import { Input } from "@/ui/Input"
import { Button, buttonVariants } from "@/ui/Button"
import { cn } from "@/lib/utils"
import MediaSelection from "@/ui/MediaSelection"
import GenreMultiSelect from "@/ui/GenreMultiSelect"
import Slider from "@/ui/Slider"
import axios from "axios"
import { toast } from "@/ui/toast"

export interface SearchFormProps
    extends React.FormHTMLAttributes<HTMLFormElement> {
    inputList: any[]
}

const SearchForm: FC<SearchFormProps> = ({
    className,
    inputList,
}: SearchFormProps) => {
    const [genreResults, setGenreResults] = useState([]) // used to get information from GenreMultiSelect components

    const handleSubmit: FormEventHandler = async (e: any) => {
        // submits the form to backend
        e.preventDefault()
        const searchTerm = e.target[1].value

        // error validation
        if (genreResults.length === 0) {
            toast({
                title: "Error Submitting Form",
                message: "Please Select At Least One Media Type",
                type: "error",
            })

            return
        }

        if (!searchTerm) {
            toast({
                title: "Error Submitting Form",
                message: "Please Input A Search Criteria",
                type: "error",
            })

            return
        }

        try {
            const url = "http://localhost:3000/api/v1/searchSpotify"
            const results = await axios.post(url, {
                mediaList: genreResults,
                searchTerm: searchTerm,
            })

            toast({
                title: "Success",
                message: "Taking You To Your Results",
                type: "default",
            })

            console.log(results)
        } catch (error) {
            toast({
                title: "Something Went Wrong",
                message: "Please Try Again Later",
                type: "error",
            })
        }
    }

    return (
        <form
            className={cn(
                "flex flex-col items-center gap-2 dark:bg-slate-700 px-8 py-4 w-full max-w-5xl bg-slate-200 rounded-md mb-20",
                className
            )}
            onSubmit={(e: any) => handleSubmit(e)}
            id="recommendations-form"
        >
            <MediaSelection results={setGenreResults} />
            {inputList.map((item, index) => {
                if (item.type === "text") {
                    return (
                        <div className="flex flex-col gap-2 items-start w-full">
                            <label
                                htmlFor={item.id}
                                className="text-slate-900 dark:text-slate-50"
                            >
                                {item.label}
                            </label>
                            <Input
                                className="bg-white dark:bg-white dark:text-black placeholder:text-slate-500"
                                placeholder={item.placeholder}
                                type={item.type}
                                id={item.id}
                                key={index}
                                disabled={item.disabled}
                            />
                        </div>
                    )
                }
                if (item.type === "combo") {
                    return (
                        <GenreMultiSelect
                            results={setGenreResults}
                            contentList={item.contentList}
                        />
                    )
                }
                if (item.type === "slider") {
                    return (
                        <div className="w-full mb-1">
                            <label className="text-slate-900 dark:text-slate-50 flex">
                                {item.label}
                            </label>
                            <Slider id={item.id} />
                        </div>
                    )
                }
            })}
            <Button
                className={cn(
                    buttonVariants({ variant: "outline" }),
                    "mt-5 w-20"
                )}
            >
                Submit
            </Button>
        </form>
    )
}

export default SearchForm
