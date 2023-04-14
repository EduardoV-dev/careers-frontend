import cn from 'classnames';

import styles from './index.module.scss';

interface Props {
    children: React.ReactNode;
    color: 'reddish' | 'white-outlined';
    submit?: boolean;
}

export const Button = ({ children, color, submit }: Props): JSX.Element => {
    const classes: string = cn(styles.button, {
        [styles[`button-color--${color}`]]: color,
    });

    return (
        <button className={classes} type={submit ? 'submit' : 'button'}>
            {children}
        </button>
    );
};
