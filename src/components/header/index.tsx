import cn from 'classnames';
import Link from 'next/link';
import React from 'react';

import styles from './index.module.scss';
import { Navbar } from './navbar';

export const Header = (): JSX.Element => (
    <header className={styles.container}>
        <div className={cn('content-wrapper', styles.content)}>
            <section className={styles['content__logo-container']}>
                <Link href="/">
                    <h5>
                        <span>J</span>
                        LR
                    </h5>
                </Link>
            </section>

            <Navbar />
        </div>
    </header>
);
