"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

const MainNav = () => {

    const routes = [
        { href: "/", label: "Home", active: false },
        // { href: "/about", label: "About", active: false },
        // { href: "/contact", label: "Contact", active: false },
    ]

    return (
        <nav
            className="mx-6 flex items-center space-x-4 lg:space-x-6"
        >
            {routes.map((route) => (
                <Link
                    key={route.href}
                    href={route.href}
                    className={cn(
                        "text-sm font-medium transition-colors hover:text-black",
                        route.active ? "text-black" : "text-neutral-500"
                    )}
                >
                    {route.label}
                </Link>
            ))}
        </nav>
    );
}

export default MainNav;