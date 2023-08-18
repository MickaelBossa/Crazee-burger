import PrimaryButton from '../../../../../components/ui/PrimaryButton/PrimaryButton';
import styles from './AdminFormRightSide.module.css';
import ProductInputs from './ProductInputs/ProductInputs';

export default function AdminFormRightSide({ newProduct, setNewProduct }) {
    return (
        <div className={styles.adminPanelRightSide}>
            <ProductInputs
                newProduct={newProduct}
                setNewProduct={setNewProduct}
            />
            <PrimaryButton
                label={'Ajouter un nouveau produit au menu'}
                height={'34px'}
                width={'275px'}
                fontSize={'var(--XS)'}
                primary={false}
            />
        </div>
    );
}
