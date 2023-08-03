import styles from './PrimaryButton.module.css';

export default function PrimaryButton({ Icon, width }) {

    const primaryButtonStyle = {
        width: width || '400px'
    }

    return (
        <div className={styles.container} style={primaryButtonStyle}>
            <button type="submit">Accédez à mon espace</button>
            {Icon && Icon}
        </div>
    );
}
