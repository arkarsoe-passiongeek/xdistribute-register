import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export function CLanguageSelectRadio() {
    return (
        <div className="mt-[30px]">
            <RadioGroup defaultValue="mm" className="flex flex-col justify-between">
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="English" id="r1" />
                    <Label htmlFor="r1">English</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Myanmar" id="r2" />
                    <Label htmlFor="r2">မြန်မာ</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Singapore" id="r3" />
                    <Label htmlFor="r3">Singapore</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Malaysia" id="r4" />
                    <Label htmlFor="r4">Malaysia</Label>
                </div>
            </RadioGroup>
        </div>
    )
}
