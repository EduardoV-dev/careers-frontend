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

import styles from './index.module.scss';

import type { Language } from '../../types/language';

export interface LanguageSelectorProps {
    languages: Language[];
}

/**
 * Language selector module for handling internationalization inside the application.
 * list of supported languages must be passed as a prop (`languages`).
 */
export const LanguageSelector = ({ languages }: LanguageSelectorProps): JSX.Element => {
    const { t } = useTranslation('common');
    const router = useRouter();

    const [isModalVisible, setIsModalVisible] = React.useState<boolean>(false);

    const openModal = (): void => setIsModalVisible(true);
    const closeModal = (): void => setIsModalVisible(false);

    /* React Render */

    const getLanguageItemClasses = (locale: string): string =>
        cn(styles['choose-language-modal__item'], {
            [styles.active]: router.locale === locale,
        });

    const LanguageItems: JSX.Element[] = languages.map((language) => (
        <Link href={router.asPath} locale={language.code} key={language.code + language.id}>
            <button className={getLanguageItemClasses(language.code)} type="button">
                <div>
                    <span className={cn('fi', `fi-${language.code}`)} />
                    <span>{language.name}</span>
                </div>

                <CheckIcon />
            </button>
        </Link>
    ));

    const currentLanguageName: string =
        languages.find((lang) => lang.code === router.locale)?.name || 'None';

    return (
        <>
            <Button color="reddish" className={styles.selector} onClick={openModal}>
                <GlobeIcon />
                <span>{currentLanguageName}</span>
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
