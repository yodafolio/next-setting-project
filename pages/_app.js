import Head from 'next/head';
import { CacheProvider } from '@emotion/react';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { createEmotionCache } from '../utils/create-emotion-cache';
import { theme } from '../theme';

const clientSideEmotionCache = createEmotionCache();

const App = (props) => {
    const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
    // console.log('Component', Component);
    // console.log('pageProps', pageProps);
    console.log('props====== ', props);

    const getLayout = Component.getLayout ?? ((page) => page);
    console.log('Component ==0', Component);
    console.log('getLayout ==0', getLayout);

    return (
        <CacheProvider value={emotionCache}>
            <Head>
                <title>ABM</title>
                <meta name="viewport" content="initial-scale=1, width=device-width" />
            </Head>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    {getLayout(<Component {...pageProps} />)}
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
