import cn from 'classnames';

import { Button } from '@/components/button';

import styles from './index.module.scss';

export const CareersHero = (): JSX.Element => (
    <section className={styles.hero}>
        <div className="content-wrapper section-container">
            <h2>Join Us</h2>

            <p>
                We are always looking for talented individuals to join our team.
                If you are passionate about customer service, committed to
                excellence, and ready to take your career to the next level, we
                want to hear from you.
            </p>

            <p>
                <strong>Explore our open positions and apply today.</strong> We
                can&apos;t wait to meet you.
            </p>

            <div className={cn('flex-group', styles['hero__button-group'])}>
                <Button color="reddish">Join the team</Button>
                <Button color="white-outlined">Culture</Button>
            </div>
        </div>
    </section>
);
