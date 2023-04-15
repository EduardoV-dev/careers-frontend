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
    const [isModalVisible, setIsModalVisible] = React.useState<boolean>(false);

    const openModal = (): void => setIsModalVisible(true);
    const closeModal = (): void => setIsModalVisible(false);

    const changeLanguage = (): void => {
        // Function
        closeModal();
    };

    return (
        <>
            <Button color="reddish" onClick={openModal} className={styles.selector}>
                <GlobeIcon />
                <span>English</span>
                <ChevronDownIcon />
            </Button>

            <Modal
                className={styles['choose-language-modal']}
                close={closeModal}
                isOpen={isModalVisible}
                title="Choose a language"
            >
                <section className={styles['choose-language-modal__group']}>
                    <button className={styles['choose-language-modal__item']} type="button">
                        <div>
                            <USAFlagIcon />
                            <span>English</span>
                        </div>

                        <CheckIcon />
                    </button>

                    <button className={styles['choose-language-modal__item']} type="button">
                        <div>
                            <SpainFlagIcon />
                            <span>Spanish</span>
                        </div>

                        <CheckIcon />
                    </button>
                </section>

                <Button color="reddish" onClick={changeLanguage}>
                    Done
                </Button>
            </Modal>
        </>
    );
};
