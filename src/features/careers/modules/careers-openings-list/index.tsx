import cn from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

import { formatDate } from '@/utils/date-format';

import { CareersPageDataResponse } from '../../types/career-responses';

import styles from './index.module.scss';

interface RoleFilterItem {
    label: string;
    value: string;
}

export const CareersOpeningsList = ({
    careerOpenings,
    roles,
}: CareersPageDataResponse): JSX.Element => {
    const { t } = useTranslation('careers');
    const router = useRouter();
    const selectedRole: string = (router.query.role as string) || '';

    const filterOptionsFromRoles: RoleFilterItem[] = roles.data.map((role) => ({
        label: role.attributes.label,
        value: role.attributes.value,
    }));

    const filterOptions: RoleFilterItem[] = [
        { label: t('openings-filter-all'), value: '' },
        ...filterOptionsFromRoles,
    ];

    const getFilterByRoleItemClasses = (filterRole: string): string =>
        cn(styles['content__nav-link'], {
            [styles.active]: selectedRole === filterRole,
        });

    const FilterByRoleItems: JSX.Element[] = filterOptions.map((link) => (
        <Link
            className={getFilterByRoleItemClasses(link.value)}
            href={`?role=${link.value}#openings`}
            key={link.value + link.label}
        >
            {link.label}
        </Link>
    ));

    const careerOpeningsFilteredByRole = careerOpenings.data.filter((career) =>
        selectedRole
            ? career.attributes.career_role.data.attributes.value === selectedRole
            : career,
    );

    const CareerOpeningItems: JSX.Element[] = careerOpeningsFilteredByRole.map(
        ({ attributes, id }) => (
            <Link
                href={`/careers/${id}`}
                key={id + attributes.position_name}
                locale={attributes.locale}
            >
                <article className={styles['content__opening-item']}>
                    <h3>{attributes.position_name}</h3>

                    <div>
                        <h5>{t('openings-item-opened-on')}</h5>
                        <h4>{formatDate(attributes.publishedAt, attributes.locale)}</h4>
                    </div>
                </article>
            </Link>
        ),
    );

    return (
        <section id="openings" className="section-container bg-white-darkened">
            <div data-aos="zoom-out" className="content-wrapper">
                <header className={cn('text-center', styles.header)}>
                    <h3 className="section-subtitle ">{t('openings-subtitle')}</h3>
                    <h2 className="section-title ">{t('openings-title')}</h2>
                    <p className="section-text">{t('openings-text')}</p>
                </header>

                <section className={styles.content}>
                    <h5 className={styles['content__title-separator']}>
                        {t('openings-roles-title')}
                    </h5>
                    <nav>{FilterByRoleItems}</nav>

                    <h5 className={styles['content__title-separator']}>
                        {t('openings-careers-title')}
                    </h5>
                    <div>{CareerOpeningItems}</div>
                </section>
            </div>
        </section>
    );
};
