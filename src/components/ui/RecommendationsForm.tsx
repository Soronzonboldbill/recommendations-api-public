"use client"

import { FC, FormEventHandler, useState } from "react"
import { Button, buttonVariants } from "@/ui/Button"
import { cn } from "@/lib/utils"
import axios from "axios"
import { Input } from "@/ui/Input"
import GenreMultiSelect from "./GenreMultiSelect"
import Slider from "@/ui/Slider"
import { toast } from "@/ui/toast"
import { useRouter } from "next/navigation"

interface RecommendationsFormProps {
    inputList: any[]
}

const RecommendationsForm: FC<RecommendationsFormProps> = ({ inputList }) => {
    const [genreResults, setGenreResults] = useState([]) // used to get information from GenreMultiSelect components
    const sliderVals = [] as { label: string; value: number }[]
    const { push } = useRouter()

    const handleSubmit: FormEventHandler = async (e: any) => {
        e.preventDefault()

        if (genreResults.length == 0) {
            toast({
                title: "Error Submitting Form",
                message: "Please Select At Least One Genre",
                type: "error",
            })
            return
        }

        for (let i = 1; i < inputList.length; i++) {
            if (e.target[i].value != 0) {
                sliderVals.push({
                    label: inputList[i].id,
                    value: e.target[i].value,
                })
            }
        }

        if (sliderVals.length == 0) {
            toast({
                title: "Error Submitting Form",
                message: "Please Select At Least One Criteria",
                type: "error",
            })

            return
        }

        // todo: update this later in production
        const url = "http://localhost:3000/api/v1/querySpotify"

        try {
            const results = await axios.post(url, {
                genreList: genreResults,
                sliders: sliderVals,
            })
            toast({
                title: "Success",
                message: "Taking You To Your Results",
                type: "default",
            })
            // console.log(results.data)
            sliderVals.length = 0
            window.name = JSON.stringify(results.data)
            push("/recommendations/results")
        } catch (error) {
            toast({
                title: "Something Went Wrong",
                message: "Please Try Again Later.",
                type: "error",
            })
            console.log(error)
            sliderVals.length = 0
        }
    }

    return (
        <form
            className="flex flex-col items-center gap-4 dark:bg-slate-700 px-8 py-4 w-full max-w-3xl bg-slate-200 rounded-md mb-20"
            onSubmit={(e: any) => handleSubmit(e)}
            id="recommendations-form"
        >
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
                            <label className="text-slate-900 dark:text-slate-50 flex flex-col">
                                {item.label}
                            </label>
                            <div className="flex justify-between items-center content-between gap-x-2">
                                <Slider id={item.id} />
                            </div>
                        </div>
                    )
                }
            })}
            <Button
                className={cn(buttonVariants({ variant: "outline" }), "w-20")}
            >
                Submit
            </Button>
        </form>
    )
}

export default RecommendationsForm
