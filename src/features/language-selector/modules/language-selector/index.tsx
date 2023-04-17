import cn from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import React from 'react';

import { Button } from '@/components/button';
import { Modal } from '@/components/modal';

import CheckIcon from '../../assets/svg/check.svg';
import ChevronDownIcon from '../../assets/svg/chevron-down.svg';
import GlobeIcon from '../../assets/svg/globe.svg';
import SpainFlagIcon from '../../assets/svg/spain-flag.svg';
import USAFlagIcon from '../../assets/svg/usa-flag.svg';

import styles from './index.module.scss';

interface LanguageItem {
    locale: string;
    icon: React.ReactNode;
    label: string;
}

export const LanguageSelector = (): JSX.Element => {
    const { t } = useTranslation('common');
    const router = useRouter();

    const [isModalVisible, setIsModalVisible] = React.useState<boolean>(false);

    const openModal = (): void => setIsModalVisible(true);
    const closeModal = (): void => setIsModalVisible(false);

    /* React Render */

    const supportedLanguages: LanguageItem[] = [
        {
            icon: <USAFlagIcon />,
            label: t('language-english'),
            locale: 'en',
        },
        {
            icon: <SpainFlagIcon />,
            label: t('language-spanish'),
            locale: 'es',
        },
    ];

    const getLanguageItemClasses = (locale: string): string =>
        cn(styles['choose-language-modal__item'], {
            [styles.active]: router.locale === locale,
        });

    const LanguageItems: JSX.Element[] = supportedLanguages.map((language) => (
        <Link href={router.asPath} locale={language.locale} key={language.locale + language.label}>
            <button className={getLanguageItemClasses(language.locale)} type="button">
                <div>
                    {language.icon}
                    <span>{language.label}</span>
                </div>

                <CheckIcon />
            </button>
        </Link>
    ));

    return (
        <>
            <Button color="reddish" onClick={openModal} className={styles.selector}>
                <GlobeIcon />
                <span>{t('language-selected')}</span>
                <ChevronDownIcon />
            </Button>

            <Modal
                className={styles['choose-language-modal']}
                close={closeModal}
                isOpen={isModalVisible}
                title={t('language-title')}
            >
                <section className={styles['choose-language-modal__group']}>
                    {LanguageItems}
                </section>

                <Button color="reddish" onClick={closeModal}>
                    {t('language-done')}
                </Button>
            </Modal>
        </>
    );
};
