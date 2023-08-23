"use client"

import { FC, FormEventHandler, forwardRef, useState } from "react"
import { Input } from "@/ui/Input"
import { Button, buttonVariants } from "@/ui/Button"
import { cn } from "@/lib/utils"
import MediaSelection from "@/ui/MediaSelection"
import GenreMultiSelect from "@/ui/GenreMultiSelect"
import Slider from "@/ui/Slider"
import axios from "axios"

export interface SearchFormProps
    extends React.FormHTMLAttributes<HTMLFormElement> {
    inputList: any[]
    fixed: boolean
}

const SearchForm: FC<SearchFormProps> = ({
    className,
    inputList,
    fixed,
}: SearchFormProps) => {
    const [genreResults, setGenreResults] = useState([]) // used to get information from GenreMultiSelect components
    let sliderVals = [] as { label: string, value: number }[]

    const handleSubmit: FormEventHandler = async (e: any) => { // submits the form to backend
        e.preventDefault()
        const genreList = genreResults 

        for (let i = 1; i < inputList.length; i++) {
            sliderVals.push({label: inputList[i].id, value: e.target[i].value })
        }

        // todo: update this later in production 
        const url = "http://localhost:3000/api/v1/querySpotify"

        try {
            const results = await axios.post(url, {
                genreList: genreList, 
                sliders: sliderVals
            })
            console.log(results.data);
        } catch (error) {
            console.log(error)
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
            {/* todo: refactor this code into a react select */}
            {fixed ? <MediaSelection results={setGenreResults} /> : null}
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
