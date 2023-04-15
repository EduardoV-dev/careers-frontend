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

export const LanguageSelector = (): JSX.Element => {
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
                    <Link href={router.asPath} locale="en">
                        <button className={getLanguageItemClasses('en')} type="button">
                            <div>
                                <USAFlagIcon />
                                <span>{t('language-english')}</span>
                            </div>

                            <CheckIcon />
                        </button>
                    </Link>

                    <Link href={router.asPath} locale="es">
                        <button className={getLanguageItemClasses('es')} type="button">
                            <div>
                                <SpainFlagIcon />
                                <span>{t('language-spanish')}</span>
                            </div>

                            <CheckIcon />
                        </button>
                    </Link>
                </section>

                <Button color="reddish" onClick={closeModal}>
                    {t('language-done')}
                </Button>
            </Modal>
        </>
    );
};
