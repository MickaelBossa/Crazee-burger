import styles from './Logo.module.css';

export default function Logo({ className, onClick }) {
    return (
        <h1 className={`${className} ${styles.logoTitle}`}>
            Crazee{' '}
            <img
                src="/logo-orange.png"
                alt="Logo Crazee Burger"
                className={styles.logoImg}
                onClick={onClick}
                style={onClick && {cursor: 'pointer'}}
            />{' '}
            Burger
        </h1>
    );
}
