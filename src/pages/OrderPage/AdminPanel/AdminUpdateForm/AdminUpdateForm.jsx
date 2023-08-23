import { LuMousePointerClick } from 'react-icons/lu';
import styles from './AdminUpdateForm.module.css';

export default function AdminUpdateForm() {
    return (
        <div className={styles.updateContainer}>
            <p className={styles.updateTxt}>Cliquez sur un produit pour le modifier</p>
            <LuMousePointerClick className={styles.updateIcon} />
        </div>
    );
}
