"use client"

import React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

interface SliderProps {
    id: string
}

const Slider: React.FC<SliderProps> = ({ id }) => {
    return (
        <SliderPrimitive.Root
            className="relative flex items-center select-none touch-none w-full h-5"
            defaultValue={[0]}
            max={1}
            min={0}
            id={id}
            step={0.01}
        >
            <SliderPrimitive.Track className="relative grow rounded-full h-[3px] bg-slate-900/75" >
                <SliderPrimitive.Range className="absolute bg-blue-500 rounded-full h-full" />
            </SliderPrimitive.Track>
            <SliderPrimitive.Thumb
                className="block w-5 h-5 bg-white rounded-[10px] hover:bg-slate-900 focus:outline-none"
                aria-label="Volume"
            />
        </SliderPrimitive.Root>
    )
}

export default Slider
