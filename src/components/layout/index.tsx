import React from 'react';

import { Footer } from '../footer';
import { Header } from '../header';

import styles from './index.module.scss';

interface Props {
    children: React.ReactNode;
}

export const Layout = ({ children }: Props): JSX.Element => (
    <div className={styles.layout}>
        <Header />
        <main>{children}</main>
        <Footer />
    </div>
);
