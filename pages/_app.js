import { Provider } from 'react-redux'
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
// import { CacheProvider } from '@emotion/react';

import theme from '../src/theme';
// import createEmotionCache from '../src/createEmotionCache';
import store from '../store'

export default function MyApp({ Component, pageProps }) {
  return(
    // <CacheProvider value={emotionCache}>
       <Provider store={store}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    // </CacheProvider>
  )
}