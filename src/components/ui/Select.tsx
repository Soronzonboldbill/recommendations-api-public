"use client"

import React from "react"
import * as SelectPrimitive from "@radix-ui/react-select"
import Icons from "@/components/Icons"
import { cn } from "@/lib/utils"

const Select = SelectPrimitive.Root
const SelectTrigger = SelectPrimitive.Trigger
const SelectValue = SelectPrimitive.Value
const SelectIcon = SelectPrimitive.Icon
const SelectPortal = SelectPrimitive.Portal
const SelectGroup = SelectPrimitive.Group
const SelectLabel = SelectPrimitive.Label
const SelectContent = SelectPrimitive.Content
const SelectViewport = SelectPrimitive.Viewport

const SelectItem = React.forwardRef<
    React.ElementRef<typeof SelectPrimitive.Item>,
    React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ children, className, ...props }, forwardedRef) => (
    <SelectPrimitive.Item
        className={cn(
            "p-2 text-sm leading-none text-violet11 rounded-lg flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1",
            className
        )}
        {...props}
        ref={forwardedRef}
    >
        <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
        <SelectPrimitive.ItemIndicator className="absolute left-0 w-[25px] inline-flex items-center justify-center">
            <Icons.Check size={15}/>
        </SelectPrimitive.ItemIndicator>
    </SelectPrimitive.Item>
))

export {
    Select,
    SelectTrigger,
    SelectValue,
    SelectIcon,
    SelectPortal,
    SelectGroup,
    SelectLabel,
    SelectItem,
    SelectContent, 
    SelectViewport
}