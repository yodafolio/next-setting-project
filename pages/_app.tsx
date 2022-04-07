import Head from 'next/head';
import { CacheProvider } from '@emotion/react';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { createEmotionCache } from '../utils/create-emotion-cache';
import { theme } from '../theme';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

const queryClient = new QueryClient();

const clientSideEmotionCache = createEmotionCache();

const App = (props) => {
    const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

    const getLayout = Component.getLayout ?? ((page) => page);

    return (
        <CacheProvider value={emotionCache}>
            <Head>
                <title>ABM</title>
                <meta name="viewport" content="initial-scale=1, width=device-width" />
            </Head>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    {getLayout(
                        <QueryClientProvider client={queryClient}>
                            <Component {...pageProps} />
                            <ReactQueryDevtools initialIsOpen={true} />
                        </QueryClientProvider>,
                    )}
                </ThemeProvider>
            </LocalizationProvider>
        </CacheProvider>
    );
    // return <Component {...pageProps} />;
};

export default App;

// import '../styles/globals.css';

// const App = ({ Component, pageProps }) => {
//     return <Component {...pageProps} />;
// };

// // function MyApp({ Component, pageProps }) {
// //     return <Component {...pageProps} />;
// // }

// export default App;
