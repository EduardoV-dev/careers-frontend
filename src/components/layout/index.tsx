import React from 'react';

import { LayoutFooter } from '../layout-footer';
import { LayoutHeader } from '../layout-header';

import styles from './index.module.scss';

interface Props {
    children: React.ReactNode;
}

export const Layout = ({ children }: Props): JSX.Element => (
    <div className={styles.layout}>
        <LayoutHeader />
        <main>{children}</main>
        <LayoutFooter />
    </div>
);
