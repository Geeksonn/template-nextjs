import type { AppProps } from 'next/app';
import Head from 'next/head';

import '../styles/globals.css';
import { body, title } from '@fonts';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>App Title</title>
            </Head>
            <main className={`${body.variable} ${title.variable}`}>
                <Component {...pageProps} />
            </main>
        </>
    );
}
