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
import CFormLabel from "./c-form-label"

interface CBaseSelectProps {
    items: {
        value: string,
        label: string
    }[],
    placeholder: string;
    onValueChange: (...event: any[]) => void;
    defaultValue: string;
}

export function CBaseSelect({ items, placeholder, ...rest }: CBaseSelectProps) {
    return (
        <Select {...rest}>
            <SelectTrigger>
                <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup className="p-1">
                    <SelectLabel className="p-0 mb-3">{placeholder}</SelectLabel>
                    {
                        items.map(item => {
                            return (
                                <SelectItem key={item.value} value={item.value}>{item.label}</SelectItem>
                            )
                        })
                    }
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}
