import { Label, LabelProps } from '@radix-ui/react-label'

interface CFormLabelProps extends LabelProps {
    children: React.ReactNode;
}



const CFormLabel = ({ children, className, ...rest }: CFormLabelProps) => {
    return (
        <Label {...rest} className={`text-base font-medium ${className}`}>{children}</Label>
    )
}

export default CFormLabel