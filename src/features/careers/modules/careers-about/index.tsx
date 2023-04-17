import cn from 'classnames';
import { useTranslation } from 'next-i18next';
import ReactLottie from 'react-lottie';

import careerLottie from '../../assets/lotties/career-guiadance.json';

import styles from './index.module.scss';

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: careerLottie,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
    },
};

export const CareersAbout = (): JSX.Element => {
    const { t } = useTranslation('careers');

    return (
        <section className="section-container bg-white-darkened">
            <div data-aos="zoom-in-down" className={cn('content-wrapper', styles.content)}>
                <section>
                    <h3 className="section-subtitle">{t('about-subtitle')}</h3>
                    <h2 className="section-title">{t('about-title')}</h2>
                    <p className="section-text">{t('about-text-1')}</p>
                    <p className="section-text">{t('about-text-2')}</p>
                </section>

                <section className={styles['lottie-container']}>
                    <ReactLottie options={defaultOptions} />
                </section>
            </div>
        </section>
    );
};
