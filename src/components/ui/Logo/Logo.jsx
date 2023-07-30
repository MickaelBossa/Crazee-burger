import styles from './Logo.module.css';

export default function Logo() {
    return (
        <h1 className={styles.logoTitle}>
            Crazee{' '}
            <img
                src="logo-orange.png"
                alt="Logo Crazee Burger"
                className={styles.logoImg}
            />{' '}
            Burger
        </h1>
    );
}
