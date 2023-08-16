import AdminFormRightSide from './AdminFormRightSide/AdminFormRightSide';
import styles from './AdminForm.module.css';

export default function AdminForm({addProduct}) {

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const product = {
            title: 'test',
            imageSource: 'https://test.png',
            price: '14,57'
        }

        addProduct(product);
    }

    return (
        <form className={styles.adminPanelForm} onSubmit={handleSubmit}>
            <div className={styles.adminPanelLeftSide}>
                <p>Aucune image</p>
            </div>
            <AdminFormRightSide />
        </form>
    );
}
