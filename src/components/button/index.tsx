import cn from 'classnames';

import styles from './index.module.scss';

interface Props {
    children: React.ReactNode;
    className?: string;
    color: 'reddish' | 'white-outlined';
    submit?: boolean;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const Button = ({
    children,
    className = '',
    color,
    submit,
    onClick,
}: Props): JSX.Element => {
    const classes: string = cn(styles.button, className, {
        [styles[`button-color--${color}`]]: color,
    });

    return (
        <button className={classes} type={submit ? 'submit' : 'button'} {...{ onClick }}>
            {children}
        </button>
    );
};
