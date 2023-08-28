import ProductInputs from './ProductInputs/ProductInputs';
import styles from './AdminForm.module.css';

export default function AdminForm({
    onSubmit,
    newProduct,
    onChange,
    children,
    titleInputRef
}) {
    return (
        <form onSubmit={onSubmit} className={styles.adminFormContainer}>
            <div className={styles.leftSide}>
                {newProduct.imageSource ? (
                    <img
                        src={newProduct.imageSource}
                        alt={newProduct.title}
                        className={styles.previewProductImg}
                    />
                ) : (
                    <p>Aucune Image</p>
                )}
            </div>
            <div className={styles.rightSide}>
                <ProductInputs
                    newProduct={newProduct}
                    onChange={onChange}
                    titleInputRef={titleInputRef}
                />
                {children}
            </div>
        </form>
    );
}
