import cn from 'classnames';
import { useTranslation } from 'next-i18next';
import React from 'react';
import ReactMarkdown from 'react-markdown';

import { Button } from '@/components/button';

import LocationIcon from '../../assets/svg/location.svg';
import OpenedOnIcon from '../../assets/svg/opened-on.svg';
import RoleIcon from '../../assets/svg/role.svg';
import { DetailsApplicationForm } from '../details-application-form';

import styles from './index.module.scss';

const JobRequirements =
    "### Job Title: Doctor\n\n#### Job Description:\n\nWe are seeking a skilled and compassionate doctor to join our team. The ideal candidate will be responsible for providing high-quality medical care to patients, diagnosing illnesses, and developing treatment plans. The candidate should be able to work independently and as part of a team, as well as demonstrate excellent communication and interpersonal skills.\n\n#### Responsibilities:\n\n- Develop custom WordPress themes and plugins\n- Modify existing WordPress themes and plugins\n- Collaborate with team members to develop new features and functionality\n- Troubleshoot and debug any issues that arise\n- Optimize website performance and security\n- Keep up-to-date with industry trends and best practices\n\n#### Requirements:\n\n- Bachelor's degree in Computer Science or related field\n- At least 3 years of experience in WordPress development\n- Strong knowledge of PHP, HTML, CSS, JavaScript, and MySQL\n- Experience with WordPress themes and plugins development\n- Understanding of WordPress core and its architecture\n- Knowledge of web design principles and best practices\n- Excellent communication and collaboration skills\n- Ability to work independently and as part of a team\n- Strong attention to detail and problem-solving skills\n- Familiarity with version control systems, such as Git\n\n#### Nice to Have:\n\n- Experience with other CMS platforms such as Drupal, Joomla, or Magento\n- Familiarity with React or other front-end frameworks\n- Experience with server administration and deployment\n- Understanding of SEO principles and best practices\n\nIf you feel that you meet the above requirements and are passionate about WordPress development, we would love to hear from you! Please submit your resume and portfolio of your WordPress projects for consideration.";

export const DetailsJob = (): JSX.Element => {
    const { t } = useTranslation('career-details');
    const [isModalVisible, setIsModalVisible] = React.useState<boolean>(false);

    const openModal = (): void => setIsModalVisible(true);
    const closeModal = (): void => setIsModalVisible(false);

    /* React Render */

    const ApplyNowButton: JSX.Element = (
        <Button color="reddish" onClick={openModal}>
            {t('apply-now-button')}
        </Button>
    );

    return (
        <>
            <section className={cn('content-wrapper', styles.container)}>
                <article className={styles['job-container']}>
                    <h1>Product Designer</h1>

                    <ReactMarkdown className={styles['job-container__description']}>
                        {JobRequirements}
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
                                <h3>Shouth Breeze Center,Banani 11</h3>
                            </div>
                        </div>

                        <div className={styles['job-info-aside__detail']}>
                            <RoleIcon />

                            <div>
                                <h4>{t('apply-container.role')}</h4>
                                <h3>Doctor</h3>
                            </div>
                        </div>

                        <div className={styles['job-info-aside__detail']}>
                            <OpenedOnIcon />

                            <div>
                                <h4>{t('apply-container.opened-on')}</h4>
                                <h3>1 Month ago</h3>
                            </div>
                        </div>
                    </section>
                </aside>
            </section>

            <DetailsApplicationForm close={closeModal} isOpen={isModalVisible} />
        </>
    );
};
