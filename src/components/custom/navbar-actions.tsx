"use client";

import React, { useEffect, useState } from "react";
import CBaseButton from "@/components/custom/c-base-button";
import Image from "next/image";
import languageButtonLogo from "../../../public/assets/images/logo/language-button-logo.png"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { CLanguageSelectRadio } from "../form/c-language-select-radio";
import { useRouter, usePathname } from '@/i18n/routing';


const LanguageSelectDialog = ({ params: { locale } }: { params: { locale: string } }) => {

    const router = useRouter();
    const pathname = usePathname();

    const languages =
        [
            { value: "en", label: "English" },
            { value: "mm", label: "Myanmar" },
            { value: "my", label: "Malaysia" },
            { value: "sg", label: "Singapore" }
        ]

    const getSelectedLanguage = () => {
        return languages.filter(each => each.value === locale)[0] || languages[0]
    }

    const onLanguageSelect = (value: string) => {
        router.replace(pathname, { locale: value });
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <CBaseButton variant="outline" className="border-primary px-4 h-auto py-[6px] hover:bg-c-hover">
                    <Image className="w-[21px] h-[16px]" src={languageButtonLogo} alt="language button logo" />
                    <p className="mb-0 text-base">{getSelectedLanguage().label}</p>
                </CBaseButton>
            </DialogTrigger>
            <DialogContent className={"w-[80%] lg:max-w-screen-md rounded border-c-contrast overflow-y-scroll max-h-screen items-start gap-[15px] lg:gap-[30px]"}>
                <DialogHeader>
                    <DialogTitle className="font-medium">Choose Language</DialogTitle>
                </DialogHeader>
                <div className="">
                    <CLanguageSelectRadio languages={languages} selectedLanguage={getSelectedLanguage().value} onLanguageSelect={onLanguageSelect} />
                </div>
            </DialogContent>
        </Dialog >
    )
}


const NavbarActions = ({ params: { locale } }: { params: { locale: string } }) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <div className="ml-auto flex items-center gap-x-4">
            <LanguageSelectDialog params={{ locale }} />
        </div>
    );
}

export default NavbarActions;