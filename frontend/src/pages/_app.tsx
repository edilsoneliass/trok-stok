import AppProvider from 'hooks';
import { AppProps } from 'next/app';
import { GlobalStyles } from 'styles';
import { GlobalStyles as MuiGlobalStyles } from '@mui/material';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <AppProvider>
                <GlobalStyles />
                <MuiGlobalStyles styles={{ html: { fontFamily: 'Poppins' } }} />
                <Component {...pageProps} />
            </AppProvider>
        </>
    );
}

export default MyApp;
