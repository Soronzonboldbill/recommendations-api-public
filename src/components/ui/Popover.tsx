"use client"

import React from "react"
import * as PopoverPrimitive from "@radix-ui/react-popover"
import Icons from "@/components/Icons"

interface PopoverProps {
    label: string
}

const Popover: React.FC<PopoverProps> = ({ label }) => {
    const [isOpen, setIsOpen] = React.useState<boolean>(false) 
    return (
        <PopoverPrimitive.Root defaultOpen={false} open={isOpen} onOpenChange={() => {setIsOpen(!isOpen)}}>
            <PopoverPrimitive.Trigger asChild>
                <button className="w-[30px] h-[30px] rounded-md hover:bg-slate-300 inline-flex items-center justify-center cursor-default outline-none dark:text-white">
                    <Icons.Info size={18} />
                </button>
            </PopoverPrimitive.Trigger>
            <PopoverPrimitive.Anchor />
            <PopoverPrimitive.Portal className="transition ease-in">
                <PopoverPrimitive.Content align="center">
                    <div className=" bg-white p-5 w-[260px] rounded-md mt-5">
                        Click on the slider to exclude <span className="font-bold">{label}</span> from
                        being processed in your search
                    </div>
                    <PopoverPrimitive.Close />
                    {/* <PopoverPrimitive.Arrow /> */}
                </PopoverPrimitive.Content>
            </PopoverPrimitive.Portal>
        </PopoverPrimitive.Root>
    )
}

export default Popover
