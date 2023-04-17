import cn from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

import { formatDate } from '@/utils/date-format';

import { CareersPageDataResponse } from '../../types/career-responses';

import { CareersFilters } from './careers-filters';
import styles from './index.module.scss';

export const CareersOpeningsList = ({
    countries,
    careerOpenings,
    roles,
}: CareersPageDataResponse): JSX.Element => {
    const { t } = useTranslation('careers');
    const router = useRouter();

    const selectedRole: string = (router.query?.role as string) || '';
    const selectedCountry: string = (router.query?.country as string) || '';

    const careerOpeningsFilteredByCountryAndRole = careerOpenings.data.filter((career) => {
        const careerCountry = career.attributes.career_country.data.attributes.country;
        const careerRole = career.attributes.career_role.data.attributes.value;

        return careerCountry.includes(selectedCountry) && careerRole.includes(selectedRole);
    });

    const CareerOpeningItems: JSX.Element[] = careerOpeningsFilteredByCountryAndRole.map(
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
                    <h3 className="section-subtitle">{t('openings-subtitle')}</h3>
                    <h2 className="section-title ">{t('openings-title')}</h2>
                    <p className="section-text">{t('openings-text')}</p>
                </header>

                <section className={styles.content}>
                    <div>
                        <h5 className={styles['content__title-separator']}>
                            {t('openings-filters-title')}
                        </h5>

                        <CareersFilters {...{ countries, roles }} />
                    </div>

                    <h5 className={cn(styles['content__title-separator'], styles.career)}>
                        {t('openings-careers-title')}
                    </h5>

                    <div>
                        {careerOpeningsFilteredByCountryAndRole.length > 0 ? (
                            CareerOpeningItems
                        ) : (
                            <p className="section-subtitle">{t('openings-no-careers-found')}</p>
                        )}
                    </div>
                </section>
            </div>
        </section>
    );
};
