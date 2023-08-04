import styles from './ToggleButton.module.css';

export default function ToggleButton({
  isChecked,
  onToggle,
  labelIfChecked = "Fermer",
  labelIfUnchecked = "Ouvrir",
}) {

  const toggleStyle = {
    display: 'none',
  }

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
  )
}
