import * as React from "react"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

interface CBaseSelectProps {
    items: {
        value: string,
        label: string
    }[],
    placeholder: string;
    onValueChange: (...event: any[]) => void;
    defaultValue: string;
}

export function CBaseSelect({ items, placeholder, defaultValue, ...rest }: CBaseSelectProps) {
    return (
        <Select {...rest}>
            <SelectTrigger className={`text-base ${defaultValue ? '' : 'text-c-contrast'}`}>
                <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup className="p-[15px]">
                    <SelectLabel className="p-0 mb-[15px] text-lg font-medium">{placeholder}</SelectLabel>
                    <div className="space-y-[10px]">
                        {
                            items.map(item => {
                                return (
                                    <SelectItem className="text-base" key={item.value} value={item.value}>{item.label}</SelectItem>
                                )
                            })
                        }
                    </div>
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}
