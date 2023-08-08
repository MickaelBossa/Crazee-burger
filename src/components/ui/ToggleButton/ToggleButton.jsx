import styles from './ToggleButton.module.css';

export default function ToggleButton({
    isChecked,
    onToggle,
    labelIfChecked = 'Désactiver le mode admin',
    labelIfUnchecked = 'Activer le mode admin',
}) {
    const toggleStyle = {
        opacity: 0,
    };

    return (
        <div className={styles.toggleBtnContainer}>
            <input
                type="checkbox"
                className={styles.toggleBtnInput}
                style={toggleStyle}
                id="rounded"
                checked={isChecked}
                onChange={onToggle}
            />
            <label
                htmlFor="rounded"
                className="rounded"
                data-checked={labelIfChecked}
                data-unchecked={labelIfUnchecked}
            ></label>
        </div>
    );
}
