import { useTranslation } from 'next-i18next';

import styles from './index.module.scss';

export const Footer = (): JSX.Element => {
    const { t } = useTranslation('common');

    return (
        <footer className={styles.footer}>
            <div className="content-wrapper">
                <h3>
                    @ {new Date().getFullYear()} JLR. {t('footer-all-rights-reserved')}.
                </h3>
            </div>
        </footer>
    );
};
