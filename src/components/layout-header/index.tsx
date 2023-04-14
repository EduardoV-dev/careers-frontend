import cn from 'classnames';
import Link from 'next/link';
import React from 'react';
import { throttle } from 'throttle-debounce';

import styles from './index.module.scss';
import { Navbar } from './navbar';

const THROTTLE_DELAY_IN_MS = 200;
const SCROLL_Y_VALUE_TO_STYLE_HEADER = 100;

export const LayoutHeader = (): JSX.Element => {
    const [doStyleBasedOnScrollY, setDoStyleBasedOnScrollY] =
        React.useState<boolean>(false);

    React.useEffect(() => {
        const updateUserScrollState = (): void =>
            setDoStyleBasedOnScrollY(
                window.scrollY >= SCROLL_Y_VALUE_TO_STYLE_HEADER,
            );

        const throttledFunction = throttle(
            THROTTLE_DELAY_IN_MS,
            updateUserScrollState,
        );

        window.addEventListener('scroll', throttledFunction);
        return () => window.removeEventListener('scroll', throttledFunction);
    }, []);

    /* React Render */

    const headerClasses: string = cn(styles.container, {
        [styles.scrolled]: doStyleBasedOnScrollY,
    });

    return (
        <header className={headerClasses}>
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
};
