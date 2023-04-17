import cn from 'classnames';

import styles from './index.module.scss';

interface Props {
    isOpen: boolean;
    close: () => void;
}

export const Backdrop = ({ isOpen, close }: Props): JSX.Element => {
    const backdropClasses: string = cn(styles.backdrop, {
        [styles.active]: isOpen,
    });

    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    return <div className={backdropClasses} onClick={close} />;
};
