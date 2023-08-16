import PrimaryButton from '../../../../../components/ui/PrimaryButton/PrimaryButton';
import styles from './AdminFormRightSide.module.css';
import ProductInputs from './ProductInputs/ProductInputs';

export default function AdminFormRightSide({productTitle, setProductTitle, productImageSource, setProductImageSource, productPrice, setProductPrice}) {
    return (
        <div className={styles.adminPanelRightSide}>
            <ProductInputs                 productTitle={productTitle}
                setProductTitle={setProductTitle}
                productImageSource={productImageSource}
                setProductImageSource={setProductImageSource}
                productPrice={productPrice}
                setProductPrice={setProductPrice} />
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
