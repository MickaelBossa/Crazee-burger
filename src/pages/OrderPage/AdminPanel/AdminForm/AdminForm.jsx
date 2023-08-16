import AdminFormRightSide from './AdminFormRightSide/AdminFormRightSide';
import styles from './AdminForm.module.css';

export default function AdminForm() {
    return (
        <form className={styles.adminPanelForm}>
            <div className={styles.adminPanelLeftSide}>
                <p>Aucune image</p>
            </div>
            <AdminFormRightSide />
        </form>
    );
}
