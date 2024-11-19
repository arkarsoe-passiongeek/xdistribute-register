import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import gb from "../../../public/assets/images/countries/gb.png"
import mm from "../../../public/assets/images/countries/mm.png"
import my from "../../../public/assets/images/countries/my.png"
import sg from "../../../public/assets/images/countries/sg.png"
import th from "../../../public/assets/images/countries/th.png"
import Image from "next/image";
import CFormLabel from "./c-form-label";

const countries = [
    {
        continent: "Global",
        items: [
            { value: "gb", label: "United Kingdom", flag: gb },
            { value: "mm", label: "Myanmar", flag: mm },
            { value: "th", label: "Thailand", flag: th },
            { value: "my", label: "Malaysia", flag: my },
            { value: "sg", label: "Singapore", flag: sg }
        ],
    },
    // {
    //     continent: "America",
    //     items: [
    //         { value: "s1", label: "United States", flag: "🇺🇸" },
    //         { value: "s2", label: "Canada", flag: "🇨🇦" },
    //         { value: "s3", label: "Mexico", flag: "🇲🇽" },
    //     ],
    // },
    // {
    //     continent: "Africa",
    //     items: [
    //         { value: "s4", label: "South Africa", flag: "🇿🇦" },
    //         { value: "s5", label: "Nigeria", flag: "🇳🇬" },
    //         { value: "s6", label: "Morocco", flag: "🇲🇦" },
    //     ],
    // },
    // {
    //     continent: "Asia",
    //     items: [
    //         { value: "s7", label: "China", flag: "🇨🇳" },
    //         { value: "s8", label: "Japan", flag: "🇯🇵" },
    //         { value: "s9", label: "India", flag: "🇮🇳" },
    //     ],
    // },
    // {
    //     continent: "Europe",
    //     items: [
    //         { value: "s10", label: "United Kingdom", flag: "🇬🇧" },
    //         { value: "s11", label: "France", flag: "🇫🇷" },
    //         { value: "s12", label: "Germany", flag: "🇩🇪" },
    //     ],
    // },
    // {
    //     continent: "Oceania",
    //     items: [
    //         { value: "s13", label: "Australia", flag: "🇦🇺" },
    //         { value: "s14", label: "New Zealand", flag: "🇳🇿" },
    //     ],
    // },
];

interface CCountrySelectInputProps {
    placeholder: string;
    onValueChange: (...event: any[]) => void;
    defaultValue: string;
}

export default function CCountrySelectInput({ placeholder, ...rest }: CCountrySelectInputProps) {
    return (
        <Select {...rest}>
            <SelectTrigger
                id="select-country"
                className="[&>span]:flex [&>span]:items-center [&>span]:gap-2 [&>span_svg]:shrink-0 [&>span_svg]:text-muted-foreground/80"
            >
                <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent className="[&_*[role=option]>span>svg]:shrink-0 [&_*[role=option]>span>svg]:text-muted-foreground/80 [&_*[role=option]>span]:end-2 [&_*[role=option]>span]:start-auto [&_*[role=option]>span]:flex [&_*[role=option]>span]:items-center [&_*[role=option]>span]:gap-2 [&_*[role=option]]:pe-8 [&_*[role=option]]:ps-2">
                {countries.map((continent) => (
                    <SelectGroup className="p-1" key={continent.continent}>
                        <SelectLabel className="p-0 mb-3">Select Your Country</SelectLabel>
                        {continent.items.map((item) => (
                            <SelectItem key={item.value} value={item.value}>
                                <Image src={item.flag} width={27} height={18} alt="country flag" />
                                <span className="truncate">{item.label}</span>
                            </SelectItem>
                        ))}
                    </SelectGroup>
                ))}
            </SelectContent>
        </Select>
    );
}
