import cn from 'classnames';

import styles from './index.module.scss';

interface Props {
    children: React.ReactNode;
    className?: string;
    color: 'reddish' | 'white-outlined';
    disabled?: boolean;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    submit?: boolean;
}

export const Button = ({
    children,
    className = '',
    color,
    disabled = false,
    onClick,
    submit,
}: Props): JSX.Element => {
    const classes: string = cn(styles.button, className, {
        [styles[`button-color--${color}`]]: color,
    });

    return (
        <button className={classes} type={submit ? 'submit' : 'button'} {...{ onClick, disabled }}>
            {children}
        </button>
    );
};
