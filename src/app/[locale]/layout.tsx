import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import Navbar from '@/components/custom/navbar';
import Footer from '@/components/custom/footer';
import { setRequestLocale } from 'next-intl/server';
import "./globals.css"

import { Poppins } from 'next/font/google'

const poppins = Poppins({
    weight: ['400', '500', '700'],
    subsets: ['latin'],
})

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
    children,
    params
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params

    // Ensure that the incoming `locale` is valid
    if (!routing.locales.includes(locale as any)) {
        notFound();
    }

    // Enable static rendering
    setRequestLocale(locale);

    // Providing all messages to the client
    // side is the easiest way to get started
    const messages = await getMessages();

    return (
        <html lang={locale}>
            <body className={poppins.className}>
                <NextIntlClientProvider messages={messages}>
                    <div className="flex flex-col justify-between">
                        <div className="bg-white-2 h-full w-full">
                            <div>
                                <Navbar params={{ locale }} />
                                <div className='mt-[94px] md:mt-[114px]'>
                                    {children}
                                </div>
                            </div>
                            <Footer />

                        </div>
                    </div>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}