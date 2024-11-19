import { Input } from "@/components/ui/input";
import { InputHTMLAttributes } from "react";
import CFormLabel from "./c-form-label";

type CBaseInputProp = {
    id: string
    label: string
} & InputHTMLAttributes<HTMLInputElement>


export default function CBaseInput({ id, label, ...rest }: CBaseInputProp) {
    return (
        <div className="space-y-2">
            <CFormLabel id={id}>{label}</CFormLabel>
            <Input className="text-sm lg:text-base" id={id} {...rest} />
        </div>
    );
}