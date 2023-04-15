import cn from 'classnames';
import React from 'react';
import ReactDOM from 'react-dom';

import { ClientOnly } from '../client-only';

import styles from './index.module.scss';

interface Props {
    children: React.ReactNode;
    className: string;
}

const ModalComponent = ({ children, className }: Props): JSX.Element | null => {
    const portalContainer: HTMLElement | null = document.getElementById('portal') || null;

    return portalContainer
        ? ReactDOM.createPortal(
              <section className={cn(styles.modal, className)}>{children}</section>,
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
