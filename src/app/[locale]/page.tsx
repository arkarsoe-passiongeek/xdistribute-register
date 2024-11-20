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
        <div className="container max-w-[1420px] px-[17px] md:px-[40px] mx-auto">
            <div className="bg-white-1 rounded mb-[24px] p-[20px] lg:p-[40px] shadow">
                <RegisterForm />
            </div>
        </div>
    );
}

export default Home