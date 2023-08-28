import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { EMPTY_PRODUCT } from '../../../../enums/product';
import AdminForm from '../../../../components/ui/AdminForm/AdminForm';
import PrimaryButton from '../../../../components/ui/PrimaryButton/PrimaryButton';
import SuccessMessage from './SuccessMessage/SuccessMessage.jsx';
import styles from './AdminAddForm.module.css';

export default function AdminAddForm({ addProduct, hasProductAdded }) {
    const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);

    const handleSubmit = (e) => {
        e.preventDefault();

        const newProductToAdd = {
            id: uuidv4(),
            title: newProduct.title,
            imageSource: newProduct.imageSource
                ? newProduct.imageSource
                : '/images/coming-soon.png',
            price: newProduct.price ? newProduct.price : '0,00',
        };

        addProduct(newProductToAdd);
        setNewProduct(EMPTY_PRODUCT);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewProduct({ ...newProduct, [name]: value });
    };

    return (
        <>
            <AdminForm
                onSubmit={handleSubmit}
                newProduct={newProduct}
                onChange={handleChange}
            >
                <div className={styles.btnAndMsg}>
                    <PrimaryButton
                        label={'Ajouter un nouveau produit au menu'}
                        height={'34px'}
                        width={'275px'}
                        fontSize={'var(--XS)'}
                        primary={false}
                    />
                    {hasProductAdded && (
                        <SuccessMessage />
                    )}
                </div>
            </AdminForm>
        </>
    );
}
