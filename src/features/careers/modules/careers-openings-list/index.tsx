import cn from 'classnames';
import Link from 'next/link';

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
    const RoleFilterLinks: JSX.Element[] = ROLE_LINKS.map((link) => (
        <Link className={styles['content__nav-link']} href={`#openings?role=${link.role}`}>
            {link.label}
        </Link>
    ));

    return (
        <section id="openings" className="section-container bg-white-darkened">
            <div data-aos="zoom-out" className="content-wrapper">
                <header className={cn('text-center', styles.header)}>
                    <h3 className="section-subtitle ">Come Join Us</h3>
                    <h2 className="section-title ">Career Openings</h2>

                    <p className="section-text">
                        We&apos;re always looking for creative, talented self-starters to join the
                        JLR family. Check out our open roles below and fill out an application.
                    </p>
                </header>

                <section className={styles.content}>
                    <h5 className={styles['content__title-separator']}>Roles</h5>

                    <nav>{RoleFilterLinks}</nav>

                    <h5 className={styles['content__title-separator']}>Careers</h5>

                    <div>
                        <Link href="/">
                            <article className={styles['content__opening-item']}>
                                <h3>Wordpress Developer</h3>

                                <div>
                                    <h5>Opened on</h5>
                                    <h4>04 / 13 / 2023</h4>
                                </div>
                            </article>
                        </Link>

                        <Link href="/">
                            <article className={styles['content__opening-item']}>
                                <h3>Wordpress Developer</h3>

                                <div>
                                    <h5>Opened on</h5>
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
