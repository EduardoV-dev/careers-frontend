import { useTranslation } from 'next-i18next';
import React from 'react';

import { Button } from '@/components/button';
import { FormControl } from '@/components/form-control';
import { Modal, Props as ModalProps } from '@/components/modal';

import styles from './index.module.scss';

type Props = Pick<ModalProps, 'close' | 'isOpen'>;

export const DetailsApplicationForm = (props: Props): JSX.Element => {
    const { t } = useTranslation('career-details');

    return (
        <Modal title={t('form.title')} className="hola" {...props}>
            <form>
                <FormControl label={t('form.full-name.label')} required name="full-name">
                    <input
                        type="text"
                        id="full-name"
                        name="full-name"
                        placeholder={t('form.full-name.placeholder') as string}
                    />
                </FormControl>

                <div className={styles['two-columns-group']}>
                    <FormControl label={t('form.email.label')} required name="email">
                        <input
                            type="text"
                            id="email"
                            name="email"
                            placeholder={t('form.email.placeholder') as string}
                        />
                    </FormControl>

                    <FormControl label={t('form.phone.label')} name="phone">
                        <input
                            type="text"
                            id="phone"
                            name="phone"
                            placeholder={t('form.phone.label') as string}
                        />
                    </FormControl>
                </div>

                <Button color="reddish" className={styles['send-application-button']} submit>
                    {t('form.send-button')}
                </Button>
            </form>
        </Modal>
    );
};
