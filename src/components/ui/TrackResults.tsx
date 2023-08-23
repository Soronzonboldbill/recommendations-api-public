"use client"
import { FC, useEffect, useState } from "react"
import TrackDisplay from "@/ui/TrackDisplay"

interface TrackResultsProps {}

const TrackResults: FC<TrackResultsProps> = ({}) => {
    const [data, setData] = useState({} as unknown)
    useEffect(() => {
        const queryData = JSON.parse(window.name)
        setData(queryData)
    }, [])

    console.log(data);

    return (
        <div className="container max-w-7xl mx-auto mt-12">
            <div className="grid grid-cols-3 items-center">
                
            </div>
        </div>
    )
}

export default TrackResults
