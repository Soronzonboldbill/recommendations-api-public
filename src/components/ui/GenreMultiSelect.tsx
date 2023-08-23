import { FC, useState } from "react"
import Select from "react-select"
import makeAnimated from "react-select/animated"
import { colorStyles } from "@/styles/select-styles"

const spotifyAPIGenreLimit = 5 
const animatedComponents = makeAnimated()

interface GenreMultiSelectProps {
    contentList: string[]
    results: Function // used to pass input info back to parent form
}


const GenreMultiSelect: FC<GenreMultiSelectProps> = ({
    contentList,
    results, 
}) => {
    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleChange = (selectedOptions: any) => {
        results(selectedOptions.map((option: {label: string, value: string}) => option.label)); 
        setSelectedOptions(selectedOptions)
    }

    return (
        <label
            htmlFor="select-genre"
            className="flex flex-col gap-2 w-full dark:text-slate-50 text-slate-900"
        >
            Genre Selection (max 5)
            <Select
                id="select-genre"
                inputId="genre-select-input"
                className="w-full z-30"
                components={animatedComponents}
                styles={colorStyles}
                options={contentList}
                isMulti
                placeholder="Select Genres"
                maxMenuHeight={400}
                isOptionDisabled={() => { return selectedOptions.length >= spotifyAPIGenreLimit}} // required to disable above 5 options
                value={selectedOptions}
                onChange={(o: any) => {
                    handleChange(o)
                }}
            />
        </label>
    )
}

export default GenreMultiSelect
