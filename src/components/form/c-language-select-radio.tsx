import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

interface CLanguageSelectRadioProps {
    languages: {
        label: string,
        value: string
    }[],
    selectedLanguage: string,
    onLanguageSelect: (value: string) => void
}

export function CLanguageSelectRadio({ languages, selectedLanguage, onLanguageSelect }: CLanguageSelectRadioProps) {
    return (
        <div>
            <RadioGroup onValueChange={onLanguageSelect} defaultValue={selectedLanguage} className="flex flex-col md:flex-row justify-between md:items-start md:h-[100px]">
                {
                    languages.map(language => {
                        return (
                            <div key={language.value} className="flex items-center space-x-2">
                                <RadioGroupItem value={language.value} id={language.value} />
                                <Label htmlFor={language.value}>{language.label}</Label>
                            </div>
                        )
                    })
                }
            </RadioGroup>
        </div>
    )
}
