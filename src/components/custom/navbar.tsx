
import Link from "next/link";
import NavbarActions from "@/components/custom/navbar-actions";
import Image from "next/image";
import logoImage from '../../../public/assets/images/logo/xdistribute-main-logo.png'

export const revalidate = 0;

const Navbar = async ({ params: { locale } }: { params: { locale: string } }) => {
    return (
        <div className="fixed top-0 shadow-sm bg-white-1 w-full max-w-full mx-auto">
            <div className="container max-w-[1420px] px-[25px] md:-[20px] lg:px-[46px] mx-auto">
                <div className="relative w-full py-[18px] flex items-center justify-center">
                    <Link href="/">
                        <Image
                            src={logoImage}
                            className="w-[91px] h-[40px]"
                            width={91}
                            height={40}
                            sizes="(max-width: 91px) 100vw, 50vw"  // Dynamic width based on screen size
                            quality={75}
                            alt="Logo of the company"
                        />
                    </Link>
                    <NavbarActions params={{ locale }} />
                </div>
            </div>
        </div>
    );
}

export default Navbar;