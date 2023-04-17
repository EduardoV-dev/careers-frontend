import cn from 'classnames';
import { useTranslation } from 'next-i18next';

import LearningOpportunityIcon from '../../assets/svg/learning-opportunities.svg';
import SecuredFutureIcon from '../../assets/svg/secured-future.svg';
import TeamWorkIcon from '../../assets/svg/team-work.svg';
import UpgradeSkillsIcon from '../../assets/svg/upgrade-skills.svg';

import styles from './index.module.scss';

interface BenefitItem {
    label: string;
    icon: React.ReactNode;
}

export const CareersBenefits = (): JSX.Element => {
    const { t } = useTranslation('careers');

    const BENEFITS_ITEMS: BenefitItem[] = [
        {
            icon: <TeamWorkIcon />,
            label: t('benefits-team-work'),
        },
        {
            icon: <SecuredFutureIcon />,
            label: t('benefits-secured-future'),
        },
        {
            icon: <LearningOpportunityIcon />,
            label: t('benefits-learning-opportunity'),
        },
        {
            icon: <UpgradeSkillsIcon />,
            label: t('benefits-upgrade-skills'),
        },
    ];

    const BenefitsElements: JSX.Element[] = BENEFITS_ITEMS.map((benefit) => (
        <article key={benefit.label}>
            <figure>{benefit.icon}</figure>
            <span>{benefit.label}</span>
        </article>
    ));

    return (
        <section className="section-container">
            <div data-aos="fade-down-left" className={cn('content-wrapper', styles.content)}>
                <section>
                    <h3 className="section-subtitle">{t('benefits-subtitle')}</h3>
                    <h2 className="section-title">{t('benefits-title')}</h2>
                    <p className="section-text">{t('benefits-text')}</p>
                </section>

                <section className={styles['content__benefits-list']}>{BenefitsElements}</section>
            </div>
        </section>
    );
};
