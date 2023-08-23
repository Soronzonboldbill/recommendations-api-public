"use client"

import React from "react"
import * as SwitchPrimitive from "@radix-ui/react-switch"

interface SwitchProps {
    isDisabled: boolean
    setDisabled: Function
}

const Switch: React.FC<SwitchProps> = ({ isDisabled, setDisabled }) => {
    const [isChecked, setIsChecked] = React.useState<boolean>(true)
    const [changeValue, setChangeValue] = React.useState<string>("on")

    React.useEffect(() => {
        if (isChecked) {
            setChangeValue("on")
        } else {
            setChangeValue("off")
        }
    }, [isChecked])

    return (
        <div className="flex flex-col">
            <SwitchPrimitive.Root
                id="switch-comp"
                className="w-[42px] h-[25px] bg-slate-500 rounded-full data-[state=checked]:bg-blue-500 outline-none cursor-default"
                checked={isChecked}
                onCheckedChange={() => {
                    setIsChecked(!isChecked)
                    setDisabled(!isDisabled)
                }}
                value={changeValue} 
            >
                <SwitchPrimitive.Thumb className="block w-[21px] h-[21px] bg-white rounded-full transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]" />
            </SwitchPrimitive.Root>
        </div>
    )
}

export default Switch
