import AdminUpdateFormMsg from './AdminUpdateFormMsg/AdminUpdateFormMsg';
import styles from './AdminUpdateForm.module.css';

export default function AdminUpdateForm() {
    const test = true;

    return (
        <>
            {test ? (
                <AdminUpdateFormMsg />
            ) : (
                <p className={styles.test}>Hello world</p>
            )}
        </>
    );
}
