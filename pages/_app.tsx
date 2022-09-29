import '../styles/globals.css'
import { AppProps } from 'next/app'
import { CacheProvider, EmotionCache } from '@emotion/react';
import theme from '../styles/theme';
import CssBaseline from '@mui/material/CssBaseline';
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import createEmotionCache from '../styles/createEmotionCashe';
import Head from 'next/head';

const clientSideEmotionCache = createEmotionCache();
interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}
function MyApp(props:MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <StyledEngineProvider injectFirst>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Component {...pageProps} />
        </StyledEngineProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp
