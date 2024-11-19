import CImageDropZone from "@/components/custom/c-image-dronzone";
import { RegisterForm } from "@/components/page/registerForm"
import { routing } from '@/i18n/routing';
import { getTranslations, setRequestLocale } from 'next-intl/server';

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }>; }) {
    const { locale } = await params
    const t = await getTranslations({ locale, namespace: 'Metadata' });

    return {
        title: t('title')
    };
}


const Home = async ({ params }: { params: Promise<{ locale: string }> }) => {
    const { locale } = await params

    // Enable static rendering
    setRequestLocale(locale);

    return (
        <div className="container px-[17px] md:px-[20px] mx-auto">
            <div className="bg-white-1 rounded my-[24px] p-[20px] lg:p-[40px] shadow">
                <div className="w-[655px] h-[300px] border rounded flex justify-center items-center">
                    <CImageDropZone />
                </div>
                <RegisterForm />
            </div>
        </div>
    );
}

export default Home