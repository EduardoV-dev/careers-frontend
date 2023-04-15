import cn from 'classnames';

import LearningOpportunityIcon from '../../assets/svg/learning-opportunities.svg';
import SecuredFutureIcon from '../../assets/svg/secured-future.svg';
import TeamWorkIcon from '../../assets/svg/team-work.svg';
import UpgradeSkillsIcon from '../../assets/svg/upgrade-skills.svg';

import styles from './index.module.scss';

interface BenefitItem {
    label: string;
    icon: React.ReactNode;
}

const BENEFITS_ITEMS: BenefitItem[] = [
    {
        icon: <TeamWorkIcon />,
        label: 'Team work',
    },
    {
        icon: <SecuredFutureIcon />,
        label: 'Secured future',
    },
    {
        icon: <LearningOpportunityIcon />,
        label: 'Learning Opportunity',
    },
    {
        icon: <UpgradeSkillsIcon />,
        label: 'Upgrade Skills',
    },
];

export const CareersBenefits = (): JSX.Element => {
    const BenefitsElements: JSX.Element[] = BENEFITS_ITEMS.map((benefit) => (
        <article key={benefit.label}>
            <figure>{benefit.icon}</figure>
            <span>{benefit.label}</span>
        </article>
    ));

    return (
        <section className="section-container">
            <div className={cn('content-wrapper', styles.content)}>
                <section>
                    <h3 className="section-subtitle">Benefits</h3>

                    <h2 className="section-title">
                        Why you Should Join Our Awesome Team
                    </h2>

                    <p className="section-text">
                        At JLR, we&apos;re committed to creating a workplace
                        that values diversity, inclusivity, and collaboration.
                        We believe that when people from different backgrounds
                        and perspectives come together, great things can happen.
                        We also know that our employees are our most valuable
                        asset, which is why we invest in their growth and
                        development.
                    </p>
                </section>

                <section className={styles['content__benefits-list']}>
                    {BenefitsElements}
                </section>
            </div>
        </section>
    );
};
