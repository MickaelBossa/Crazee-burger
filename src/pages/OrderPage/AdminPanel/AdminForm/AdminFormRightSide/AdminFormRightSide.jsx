import PrimaryButton from '../../../../../components/ui/PrimaryButton/PrimaryButton';
import styles from './AdminFormRightSide.module.css';
import ProductInputs from './ProductInputs/ProductInputs';
import { FiCheck } from 'react-icons/fi';

export default function AdminFormRightSide({
    newProduct,
    setNewProduct,
    hasProductAdded,
}) {
    return (
        <div className={styles.adminPanelRightSide}>
            <ProductInputs
                newProduct={newProduct}
                setNewProduct={setNewProduct}
            />
            <div className={styles.btnAndMsg}>
                <PrimaryButton
                    label={'Ajouter un nouveau produit au menu'}
                    height={'34px'}
                    width={'275px'}
                    fontSize={'var(--XS)'}
                    primary={false}
                />
                {hasProductAdded && (
                    <span className={styles.successMsg}>
                        <FiCheck
                            width={18}
                            style={{
                                border: '1px solid #60BD4F',
                                borderRadius: '50%',
                                color: '#60BD4F',
                            }}
                        />
                        Ajouté avec succès !
                    </span>
                )}
            </div>
        </div>
    );
}
