import cn from 'classnames';
import ReactLottie from 'react-lottie';

import careerLottie from '../../assets/lotties/career-guiadance.json';

import styles from './index.module.scss';

export const CareersAbout = (): JSX.Element => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: careerLottie,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    return (
        <section className="section-container bg-white-darkened">
            <div data-aos="fade-down-right" className={cn('content-wrapper', styles.content)}>
                <section>
                    <h3 className="section-subtitle">About JLR</h3>

                    <h2 className="section-title">Welcome to JLR&apos;s Career Page</h2>

                    <p className="section-text">
                        JLR is a growing company that is dedicated to providing excellent service to
                        our customers. We know that our success is built on the talent and hard work
                        of our employees. That&apos;s why we&apos;re always on the lookout for the
                        best and brightest to join our team.
                    </p>

                    <p className="section-text">
                        We offer a wide range of career opportunities across the USA, Nicaragua, and
                        Colombia. Whether you&pos;re a doctor, a call center agent, or looking for a
                        support role, we have positions available that will challenge and reward
                        you.
                    </p>
                </section>

                <section className={styles['lottie-container']}>
                    <ReactLottie options={defaultOptions} />
                </section>
            </div>
        </section>
    );
};
