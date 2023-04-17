import React from 'react';

import styles from './index.module.scss';

interface Props {
    children: React.ReactNode;
    errorMessage?: string;
    label: string;
    id: string;
    required?: boolean;
}

/**
 * It's a container that wraps a form control and it's label, with custom spacing and styles.
 *
 * @example
 * <FormControl label="Email" required name="last-name">
 *   <input type="text" />
 * </FormControl>
 */
export const FormControl = ({ children, errorMessage, label, id, required = false }: Props) => (
    <div className={styles.container}>
        <label htmlFor={id}>
            {label} {required && <span>*</span>}
        </label>

        {children}

        {errorMessage && <p className={styles.container__error}>{errorMessage}</p>}
    </div>
);
