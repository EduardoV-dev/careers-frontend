import Aos from 'aos';
import { appWithTranslation } from 'next-i18next';
import React from 'react';

import type { AppProps } from 'next/app';

import 'aos/dist/aos.css';

import '@/styles/app.scss';

const MyApp = ({ Component, pageProps }: AppProps) => {
    React.useEffect(() => {
        Aos.init({ duration: 700 });
    }, []);

    return <Component {...pageProps} />;
};

export default appWithTranslation(MyApp);
