import Aos from 'aos';
import { appWithTranslation } from 'next-i18next';
import React from 'react';
import { ToastContainer } from 'react-toastify';

import type { AppProps } from 'next/app';

import 'aos/dist/aos.css';
import 'react-toastify/dist/ReactToastify.css';

import '@/styles/app.scss';

const MyApp = ({ Component, pageProps }: AppProps) => {
    React.useEffect(() => {
        Aos.init({ duration: 700 });
    }, []);

    return (
        <>
            <Component {...pageProps} />;
            <ToastContainer closeOnClick pauseOnHover position="top-right" autoClose={3000} />
        </>
    );
};

export default appWithTranslation(MyApp);
