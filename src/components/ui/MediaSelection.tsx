"use client"

import React, { FC } from "react"
import { colorStyles } from "@/styles/select-styles"
import Select from "react-select"
import makeAnimated from "react-select/animated"

const animatedComponents = makeAnimated()

const options = [
    { label: "Album", value: "album" },
    { label: "Artist", value: "artist" },
    { label: "Playlist", value: "playlist" },
    { label: "Song", value: "track" },
    { label: "Show", value: "show" },
    { label: "Episode", value: "episode" },
    { label: "Audio Book", value: "audiobook" },
]

interface MediaSelectionProps {
    results: Function
}

const MediaSelection: FC<MediaSelectionProps> = ({ results }) => {
    const handleChange = (selectedOptions: any) => {
        results(selectedOptions.value)
        console.log(selectedOptions)
    }

    return (
        <label
            htmlFor="media-select"
            className="text-slate-900 dark:text-slate-50 mt-5 w-full flex flex-col gap-2"
        >
            Media Selection
            <Select
                id="media-select"
                inputId="media-select-input"
                components={animatedComponents}
                styles={colorStyles}
                options={options}
                placeholder="Select A Media Type"
                onChange={(e: any) => {
                    handleChange(e)
                }}
            />
        </label>
    )
}

export default MediaSelection
