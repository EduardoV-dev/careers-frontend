import React from 'react';

import { Button } from '@/components/button';
import { FormControl } from '@/components/form-control';
import { Modal, Props as ModalProps } from '@/components/modal';

import styles from './index.module.scss';

type Props = Pick<ModalProps, 'close' | 'isOpen'>;

export const DetailsApplicationForm = (props: Props): JSX.Element => (
    <Modal title="Application" className="hola" {...props}>
        <form>
            <FormControl label="Full name" required name="full-name">
                <input
                    type="text"
                    id="full-name"
                    name="full-name"
                    placeholder="Enter your full name"
                />
            </FormControl>

            <div className={styles['two-columns-group']}>
                <FormControl label="Email" required name="email">
                    <input type="text" id="email" name="email" placeholder="email@gmail.com" />
                </FormControl>

                <FormControl label="Phone" name="phone">
                    <input type="text" id="phone" name="phone" placeholder="+505 8888 8888" />
                </FormControl>
            </div>

            <Button color="reddish" className={styles['send-application-button']} submit>
                Send application
            </Button>
        </form>
    </Modal>
);
