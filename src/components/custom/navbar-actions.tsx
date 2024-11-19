"use client";

import { useEffect, useState } from "react";
import CBaseButton from "@/components/custom/c-base-button";
import Image from "next/image";
import languageButtonLogo from "../../../public/assets/images/logo/language-button-logo.png"
import { Copy } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CLanguageSelectRadio } from "../form/c-language-select-radio";

const LanguageSelectDialog = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <CBaseButton variant="outline" className="border-primary px-4 h-auto py-[6px] hover:bg-c-hover">
                    <Image width={21} height={16} src={languageButtonLogo} alt="language button logo" />
                    <p className="mb-0 text-sm md:text-base">မြန်မာ</p>
                </CBaseButton>
            </DialogTrigger>
            <DialogContent className={"w-[80%] lg:max-w-screen-lg rounded border-c-contrast overflow-y-scroll max-h-screen"}>
                <DialogHeader>
                    <DialogTitle>Choose Language</DialogTitle>
                </DialogHeader>
                <div className="">
                    <CLanguageSelectRadio />
                </div>
            </DialogContent>
        </Dialog >
    )
}


const NavbarActions = () => {
    const [isMounted, setIsMounted] = useState(false);
    const [languageSelectOpen, setLanguageSelectOpen] = useState(false)

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <div className="ml-auto flex items-center gap-x-4">
            <LanguageSelectDialog />
        </div>
    );
}

export default NavbarActions;