import styles from './PrimaryButton.module.css';

export default function PrimaryButton({ Icon, width, label, height }) {

    const primaryButtonStyle = {
        width: width || '400px',
        height: height && height,
    }

    return (
        <div className={styles.container} style={primaryButtonStyle}>
            <button type="submit">{label}</button>
            {Icon && Icon}
        </div>
    );
}
