import cn from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

import styles from './index.module.scss';

interface RoleLink {
    role: 'none' | 'doctor' | 'call-center-agent' | 'support-role';
    label: string;
}

const ROLE_LINKS: RoleLink[] = [
    { label: 'All', role: 'none' },
    { label: 'Doctor', role: 'doctor' },
    { label: 'Call Center Agent', role: 'call-center-agent' },
    { label: 'Support role', role: 'support-role' },
];

export const CareersOpeningsList = (): JSX.Element => {
    const router = useRouter();
    const { t } = useTranslation('careers');

    const RoleFilterLinks: JSX.Element[] = ROLE_LINKS.map((link) => (
        <Link
            className={styles['content__nav-link']}
            href={`#openings?role=${link.role}`}
            key={link.role + link.label}
        >
            {link.label}
        </Link>
    ));

    return (
        <section id="openings" className="section-container bg-white-darkened">
            <div data-aos="zoom-out" className="content-wrapper">
                <header className={cn('text-center', styles.header)}>
                    <h3 className="section-subtitle ">{t('openings-subtitle')}</h3>
                    <h2 className="section-title ">{t('openings-title')}</h2>
                    <p className="section-text">{t('openings-text')}</p>
                </header>

                <section className={styles.content}>
                    <h5 className={styles['content__title-separator']}>Roles</h5>

                    <nav>{RoleFilterLinks}</nav>

                    <h5 className={styles['content__title-separator']}>Careers</h5>

                    <div>
                        <Link href="/careers/1" locale={router.locale}>
                            <article className={styles['content__opening-item']}>
                                <h3>Wordpress Developer</h3>

                                <div>
                                    <h5>{t('openings-item-opened-on')}</h5>
                                    <h4>04 / 13 / 2023</h4>
                                </div>
                            </article>
                        </Link>

                        <Link href="/careers/1" locale={router.locale}>
                            <article className={styles['content__opening-item']}>
                                <h3>Wordpress Developer</h3>

                                <div>
                                    <h5>{t('openings-item-opened-on')}</h5>
                                    <h4>04 / 13 / 2023</h4>
                                </div>
                            </article>
                        </Link>
                    </div>
                </section>
            </div>
        </section>
    );
};
