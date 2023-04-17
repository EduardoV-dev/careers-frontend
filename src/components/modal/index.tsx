import cn from 'classnames';
import React from 'react';
import ReactDOM from 'react-dom';

import CloseRedIcon from '@/assets/svg/close-red.svg';

import { Backdrop } from '../backdrop';
import { ClientOnly } from '../client-only';

import styles from './index.module.scss';

export interface Props {
    children: React.ReactNode;
    className: string;
    isOpen: boolean;
    title: string;

    close: () => void;
}

const ModalComponent = ({
    children,
    className,
    close,
    isOpen,
    title,
}: Props): JSX.Element | null => {
    const portalContainer: HTMLElement | null = document.getElementById('portal') || null;
    const modalClasses: string = cn('modal-transition', styles.modal, className, {
        displayed: isOpen,
    });

    return portalContainer
        ? ReactDOM.createPortal(
              <>
                  <section className={modalClasses}>
                      <header className={styles.modal__header}>
                          <p>{title}</p>

                          <button type="button" onClick={close}>
                              <CloseRedIcon />
                          </button>
                      </header>

                      {children}
                  </section>

                  <Backdrop {...{ isOpen, close }} />
              </>,
              portalContainer,
          )
        : null;
};

/**
 * Modal component that will render a modal in the middle of the page, will be rendered inside a portal container, ssr is skipped with this component since Modals are Client Side Rendered Components.
 */
export const Modal = (props: Props): JSX.Element => (
    <ClientOnly>
        <ModalComponent {...props} />
    </ClientOnly>
);
