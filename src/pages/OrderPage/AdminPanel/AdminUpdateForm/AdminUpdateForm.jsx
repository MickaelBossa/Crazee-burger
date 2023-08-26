import AdminUpdateFormMsg from './AdminUpdateFormMsg/AdminUpdateFormMsg';
import { EMPTY_PRODUCT } from '../../../../enums/product';
import AdminForm from '../../../../components/ui/AdminForm/AdminForm';
import styles from './AdminUpdateForm.module.css';

export default function AdminUpdateForm({
    productToModify,
    updateProduct,
    setProductToModify,
    titleInputRef,
}) {
    const handleChange = (e) => {
        const { name, value } = e.target;
        const newProduct = { ...productToModify, [name]: value };
        setProductToModify(newProduct);
        updateProduct(newProduct);
    };

    return (
        <>
            {productToModify === EMPTY_PRODUCT ? (
                <AdminUpdateFormMsg />
            ) : (
                <AdminForm
                    newProduct={productToModify}
                    onChange={handleChange}
                    titleInputRef={titleInputRef}
                ><p className={styles.infoMsg}>Cliquer sur un produit du menu pour le modifier <span className={styles.inRealTime}>en temps réel</span></p></AdminForm>
            )}
        </>
    );
}
