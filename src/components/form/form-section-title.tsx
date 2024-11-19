interface FormSectionTitleProps {
    children: React.ReactNode;
}

const FormSectionTitle = ({ children }: FormSectionTitleProps) => {
    return (
        <div>
            <p className="text-primary text-lg lg:text-xl capitalize font-medium mb-[15px]">{children}</p>
        </div>
    )
}

export default FormSectionTitle