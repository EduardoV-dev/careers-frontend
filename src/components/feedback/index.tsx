import cn from 'classnames';
import React from 'react';
import ReactLottie, { Options } from 'react-lottie';

import styles from './index.module.scss';

interface Props {
    children?: React.ReactNode;
    lottie: any;
    subtitle: string;
    title: string;
}

/**
 * Component that can be used when something does not work as intended, an error occurs or simply
 * tell something to the user, Feedback component displays two titles; one on top of another,
 * below titles a lottie animation that is specified with lottie (prop) file path, finally, extra
 * components could be displayed below all of these elements.
 */
export const Feedback = ({ children, lottie, subtitle, title }: Props): JSX.Element => {
    const lottieOptions: Options = {
        loop: true,
        autoplay: true,
        animationData: lottie,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    return (
        <section className={cn('content-wrapper', styles.container)}>
            <h1 className="section-title text-center">{title}</h1>
            <h2 className="section-subtitle text-center">{subtitle}</h2>

            <div className={styles.container__lottie}>
                <ReactLottie options={lottieOptions} />
            </div>

            {children}
        </section>
    );
};
