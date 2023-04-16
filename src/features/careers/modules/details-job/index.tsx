import cn from 'classnames';
import { useTranslation } from 'next-i18next';
import React from 'react';
import ReactMarkdown from 'react-markdown';

import { Button } from '@/components/button';
import { ElementNotFound404 } from '@/features/misc';
import { formatDate } from '@/utils/date-format';

import LocationIcon from '../../assets/svg/location.svg';
import OpenedOnIcon from '../../assets/svg/opened-on.svg';
import RoleIcon from '../../assets/svg/role.svg';
import { CareerDetailsPageResponse } from '../../types/career-responses';
import { DetailsApplicationForm } from '../details-application-form';

import styles from './index.module.scss';

interface Props {
    career: CareerDetailsPageResponse;
}

export const DetailsJob = ({ career }: Props): JSX.Element | null => {
    const { t } = useTranslation('career-details');
    const [isModalVisible, setIsModalVisible] = React.useState<boolean>(false);

    const openModal = (): void => setIsModalVisible(true);
    const closeModal = (): void => setIsModalVisible(false);

    /* React Render */

    if (!career)
        return (
            <ElementNotFound404 subtitle={t('not-found.subtitle')} title={t('not-found.title')} />
        );

    const job = career.data.attributes;

    const jobLocation: string = job.career_country.data.attributes.label;
    const jobRole: string = job.career_role.data.attributes.label;

    const ApplyNowButton: JSX.Element = (
        <Button color="reddish" onClick={openModal}>
            {t('apply-now-button')}
        </Button>
    );

    return (
        <>
            <section className={cn('content-wrapper', styles.container)}>
                <article className={styles['job-container']}>
                    <h1>{job.position_name}</h1>

                    <ReactMarkdown className={styles['job-container__description']}>
                        {job.description}
                    </ReactMarkdown>

                    {ApplyNowButton}
                </article>

                <aside data-aos-delay="400" className={styles['job-info-aside']}>
                    {ApplyNowButton}

                    <h2>{t('apply-container.summary')}</h2>

                    <section className={styles['job-info-aside__list']}>
                        <div className={styles['job-info-aside__detail']}>
                            <LocationIcon />

                            <div>
                                <h4>{t('apply-container.location')}</h4>
                                <h3>{jobLocation}</h3>
                            </div>
                        </div>

                        <div className={styles['job-info-aside__detail']}>
                            <RoleIcon />

                            <div>
                                <h4>{t('apply-container.role')}</h4>
                                <h3>{jobRole}</h3>
                            </div>
                        </div>

                        <div className={styles['job-info-aside__detail']}>
                            <OpenedOnIcon />

                            <div>
                                <h4>{t('apply-container.opened-on')}</h4>

                                <h3>{formatDate(job.publishedAt, job.locale)}</h3>
                            </div>
                        </div>
                    </section>
                </aside>
            </section>

            <DetailsApplicationForm close={closeModal} isOpen={isModalVisible} />
        </>
    );
};
