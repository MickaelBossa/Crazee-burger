import styles from './Logo.module.css';

export default function Logo({ className }) {
    return (
        <h1 className={`${className} ${styles.logoTitle}`}>
            Crazee{' '}
            <img
                src="/logo-orange.png"
                alt="Logo Crazee Burger"
                className={styles.logoImg}
            />{' '}
            Burger
        </h1>
    );
}
