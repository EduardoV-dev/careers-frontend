import cn from 'classnames';
import React from 'react';
import ReactLottie from 'react-lottie';

import notFoundLottie from '../../assets/lotties/page-not-found.json';

import styles from './index.module.scss';

interface Props {
    children?: React.ReactNode;
    subtitle: string;
    title: string;
}

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: notFoundLottie,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
    },
};

export const ElementNotFound404 = ({ children, subtitle, title }: Props): JSX.Element => (
    <section className={cn('content-wrapper', styles.container)}>
        <h2 className="section-subtitle text-center">{subtitle}</h2>
        <h1 className="section-title text-center">{title}</h1>

        <div className={styles.container__lottie}>
            <ReactLottie options={defaultOptions} />
        </div>

        {children}
    </section>
);
