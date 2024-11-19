
import Link from "next/link";
import NavbarActions from "@/components/custom/navbar-actions";
import Image from "next/image";
import logoImage from '../../../public/assets/images/logo/xdistribute-main-logo.png'

export const revalidate = 0;

const Navbar = async ({ params: { locale } }: { params: { locale: string } }) => {
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
                    <NavbarActions params={{ locale }} />
                </div>
            </div>
        </div >
    );
}

export default Navbar;