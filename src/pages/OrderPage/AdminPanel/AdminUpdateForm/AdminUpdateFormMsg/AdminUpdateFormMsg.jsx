import { HiCursorClick } from 'react-icons/hi';
import styles from './AdminUpdateFormMsg.module.css';

export default function AdminUpdateFormMsg() {
    return (
        <div className={styles.updateContainer}>
            <p className={styles.updateTxt}>
                Cliquez sur un produit pour le modifier
            </p>
            <HiCursorClick className={styles.updateIcon} />
        </div>
    );
}
