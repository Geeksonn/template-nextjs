import type { AppProps } from 'next/app';
import Head from 'next/head';

import '../styles/globals.css';
import { inter, nunito, number } from '@fonts';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>App Title</title>
            </Head>
            <main className={`${inter.variable} ${nunito.variable} ${number.variable}`}>
                <Component {...pageProps} />
            </main>
        </>
    );
}
