import React from 'react';

import { Footer } from '../footer';
import { Header } from '../header';
import { SEO, SEOProps } from '../seo';

import styles from './index.module.scss';

interface Props {
    children: React.ReactNode;
    seo: SEOProps;
}

export const Layout = ({ children, seo }: Props): JSX.Element => (
    <div className={styles.layout}>
        <SEO {...seo} />
        <Header />
        <main>{children}</main>
        <Footer />
    </div>
);
