import cn from 'classnames';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import React from 'react';

import styles from './index.module.scss';

const Navbar = dynamic(() => import('./navbar').then((modules) => modules.Navbar));

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
