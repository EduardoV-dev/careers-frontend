import React from 'react';

import styles from './index.module.scss';

interface Props {
    children: React.ReactNode;
    label: string;
    name: string;
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
export const FormControl = ({ children, label, name, required = false }: Props) => (
    <div className={styles.container}>
        <label htmlFor={name}>
            {label} {required && <span>*</span>}
        </label>

        {children}
    </div>
);