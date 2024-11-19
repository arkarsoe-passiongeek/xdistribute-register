"use client";

import { useEffect, useState } from "react";
import { Button, ButtonProps } from "../ui/button";

interface CBaseButtonProps extends ButtonProps {
    children: React.ReactNode;
}


const CBaseButton: React.FC<CBaseButtonProps> = ({ children, ...rest }) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <Button {...rest}>
            {children}
        </Button>
    );
}

export default CBaseButton;