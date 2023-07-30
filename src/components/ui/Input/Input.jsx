import styles from './Input.module.css';

export default function Input({Icon, onChange, userName}) {
  return (
    <div className={styles.container}>
        {Icon && Icon}
        <input
            type="text"
            required
            placeholder="Entrez votre prénom"
            value={userName}
            onChange={(e) => onChange(e)}
        />
    </div>
  )
}
