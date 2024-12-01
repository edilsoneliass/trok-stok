import AppProvider from 'hooks';
import { AppProps } from 'next/app';
import { GlobalStyles } from 'styles';
import { GlobalStyles as MuiGlobalStyles } from '@mui/material';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Trok Stok</title>
                <link rel="icon" href="/images/Favicon.png" />
            </Head>
            <AppProvider>
                <GlobalStyles />
                <MuiGlobalStyles styles={{ html: { fontFamily: 'Poppins' } }} />
                <Component {...pageProps} />
            </AppProvider>
        </>
    );
}

export default MyApp;
