import cn from 'classnames';
import { useTranslation } from 'next-i18next';

import { Button } from '@/components/button';

import styles from './index.module.scss';

export const CareersHero = (): JSX.Element => {
    const { t } = useTranslation('careers');

    return (
        <section className={styles.hero}>
            <div data-aos="zoom-in-down" className="content-wrapper section-container">
                <h2>{t('hero-title')}</h2>
                <h1>{t('hero-subtitle')}</h1>

                <h3>
                    <strong>{t('hero-text-bold')}</strong> {t('hero-text')}
                </h3>

                <div className={cn('flex-group', styles['hero__button-group'])}>
                    <Button color="reddish">{t('hero-button-join')}</Button>
                    <Button color="white-outlined">{t('hero-button-culture')}</Button>
                </div>
            </div>
        </section>
    );
};
