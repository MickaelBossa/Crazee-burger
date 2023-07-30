import styles from './PrimaryButton.module.css';

export default function PrimaryButton({ Icon }) {
    return (
        <div className={styles.container}>
            <button type="submit">Accédez à mon espace</button>
            {Icon && Icon}
        </div>
    );
}
