import styles from './index.module.scss';

export const Footer = (): JSX.Element => (
    <footer className={styles.footer}>
        <div className="content-wrapper">
            <h3>@ {new Date().getFullYear()} JLR. All Rights Reserved.</h3>
        </div>
    </footer>
);
