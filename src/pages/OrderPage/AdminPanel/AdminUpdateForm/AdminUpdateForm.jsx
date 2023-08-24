import { HiCursorClick } from 'react-icons/hi';
import styles from './AdminUpdateForm.module.css';

export default function AdminUpdateForm() {
    return (
        <div className={styles.updateContainer}>
            <p className={styles.updateTxt}>
                Cliquez sur un produit pour le modifier
            </p>
            <HiCursorClick className={styles.updateIcon} />
        </div>
    );
}
