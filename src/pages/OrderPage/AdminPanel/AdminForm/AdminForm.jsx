import AdminFormRightSide from './AdminFormRightSide/AdminFormRightSide';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './AdminForm.module.css';

export default function AdminForm({ addProduct }) {
    const [productTitle, setProductTitle] = useState('');
    const [productImageSource, setProductImageSource] = useState('');
    const [productPrice, setProductPrice] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const newProduct = {
            id: uuidv4(),
            title: productTitle,
            imageSource: productImageSource
                ? productImageSource
                : '/images/coming-soon.png',
            price: productPrice ? productPrice : '0,00',
            quantity: 0,
            isAvailable: true,
            isAdvertised: false,
        };

        addProduct(newProduct);
        setProductTitle('');
        setProductImageSource('');
        setProductPrice('');
    };

    return (
        <form className={styles.adminPanelForm} onSubmit={handleSubmit}>
            <div className={styles.adminPanelLeftSide}>
                <p>Aucune image</p>
            </div>
            <AdminFormRightSide
                productTitle={productTitle}
                setProductTitle={setProductTitle}
                productImageSource={productImageSource}
                setProductImageSource={setProductImageSource}
                productPrice={productPrice}
                setProductPrice={setProductPrice}
            />
        </form>
    );
}
