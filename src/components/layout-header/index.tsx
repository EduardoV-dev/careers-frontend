import cn from 'classnames';
import Link from 'next/link';
import React from 'react';

import styles from './index.module.scss';
import { Navbar } from './navbar';

export const LayoutHeader = (): JSX.Element => (
    <header className={styles.container}>
        <div className={cn('content-wrapper', styles.content)}>
            <section className={styles['content__logo-container']}>
                <Link href="/">
                    <h1>
                        <span>J</span>
                        LR
                    </h1>
                </Link>
            </section>

            <Navbar />
        </div>
    </header>
);
