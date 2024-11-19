
import Link from "next/link";

import Container from "@/components/custom/container";
import NavbarActions from "@/components/custom/navbar-actions";
import MainNav from "@/components/custom/main-nav";
import Image from "next/image";
import logoImage from '../../../public/assets/images/logo/xdistribute-main-logo.png'

export const revalidate = 0;

const Navbar = async () => {
    return (
        <div className="shadow-sm bg-white-1">
            <div className="container px-[25px] mx-auto">
                <div className="relative w-full py-[18px] flex items-center justify-center">
                    <Link href="/">
                        <Image
                            src={logoImage}
                            className="w-[91px] h-[40px]"
                            // layout="responsive"
                            alt="Logo of the company"
                        />
                    </Link>
                    {/* <MainNav /> */}
                    <NavbarActions />
                </div>
            </div>
        </div >
    );
}

export default Navbar;