// Dependencies: pnpm install react-phone-number-input lucide-react

"use client";

import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import React, { forwardRef, useState, type InputHTMLAttributes } from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import mm from "../../../public/assets/images/countries/mm.png"
import gb from "../../../public/assets/images/countries/gb.png"
import Image from "next/image";

interface CPhoneNumberInput extends React.InputHTMLAttributes<HTMLInputElement> {
    placeholder: string
    onValueChange: (...event: any[]) => void
    defaultValue: string
}

export default function CPhoneNumberInput({ placeholder, onValueChange }: CPhoneNumberInput) {
    const [inputValue, setInputValue] = useState("");
    const [dialogOpen, setDialogOpen] = useState(false)
    const [selectedCountry, setSelectedCountry] = useState({
        flag: mm,
        name: "မြန်မာ",
        number: 95
    },)

    const phoneNumbers = [
        {
            flag: mm,
            name: "မြန်မာ",
            number: 95
        },
        {
            flag: gb,
            name: "United Kingdom",
            number: 111
        }
    ]

    const onCountrySelect = (country: any) => {
        setSelectedCountry(country)
        setDialogOpen(false)
        onValueChange(country.number + inputValue)
    }

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
        onValueChange(selectedCountry.number + e.target.value)
    }

    return (
        <div className="space-y-2" dir="ltr">
            <div className="flex justify-between border border-input rounded px-[8px] h-full">
                <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                    <DialogTrigger asChild>
                        <div className="flex flex-nowrap items-center w-[50px] shrink-0">
                            <Image src={selectedCountry.flag} height={16} width={24} alt="country flag" className="cursor-pointer" />
                            <span className="text-[#000] text-sm">+{selectedCountry.number}</span>
                        </div>
                    </DialogTrigger>
                    <DialogContent className={"w-[80%] lg:max-w-screen-lg rounded border-c-contrast overflow-y-scroll max-h-screen"}>
                        <DialogHeader>
                            <DialogTitle>Pick Country Code</DialogTitle>
                        </DialogHeader>
                        <div>
                            {phoneNumbers.map(each => {
                                return (
                                    <div key={each.number} onClick={() => onCountrySelect(each)} className={`p-[8px] rounded flex justify-between hover:bg-primary ${selectedCountry.number === each.number ? 'bg-c-primary' : ''}`}>
                                        {/* <Image src={each.flag} height={16} width={30} alt="country flag" /> */}
                                        <span className={`text-base ${selectedCountry.number === each.number ? 'text-white-1' : ''}`}>{each.name}</span>
                                        <span className={`text-base ${selectedCountry.number === each.number ? 'text-white-1' : ''}`}>{each.number}</span>
                                    </div>
                                )
                            })}
                        </div>
                    </DialogContent>
                </Dialog>
                <div className="w-[1px] my-2 mx-[8px] h-[25px] bg-c-contrast shrink-0">
                </div>
                <Input
                    className="!text-base border-0 outline-none focus:ring-0 w-full focus-visible:ring-0 focus-visible:ring-offset-0 p-0 h-10 placeholder:text-c-contrast"
                    placeholder={placeholder}
                    onChange={onInputChange}
                    defaultValue={inputValue}
                />

            </div>
        </div>
    );
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> { }

const PhoneInput = forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => {
    return (
        <Input
            className={cn("-ms-px shadow-none focus-visible:z-10", className)}
            ref={ref}
            {...props}
        />
    );
});

PhoneInput.displayName = "PhoneInput";