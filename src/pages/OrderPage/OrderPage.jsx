import { useParams } from 'react-router-dom';
import { fakeMenu2 } from '../../../fakeData/fakeMenu';
import styles from './OrderPage.module.css';
import NavBar from './NavBar/NavBar';
import PrimaryButton from '../../components/ui/PrimaryButton/PrimaryButton';
import { formatPrice } from '../../utils/math';

export default function OrderPage() {
    const params = useParams();

    return (
        <div className={styles.container}>
            <NavBar params={params} />
            <main className={styles.mainContent}>
                {fakeMenu2.map((product) => (
                    <div key={product.id} className={styles.productCard}>
                        <div className={styles.imgContainer}>
                            <img
                                src={product.imageSource}
                                alt={`Image de ${product.title}`}
                                className={styles.productImg}
                            />
                        </div>
                        <p className={styles.productTitle}>{product.title}</p>
                        <div className={styles.priceAndBtnContainer}>
                            <p className={styles.productPrice}>{formatPrice(product.price)} €</p>
                            <PrimaryButton
                                width={'95px'}
                                label={'Ajouter'}
                                height={'38px'}
                            />
                        </div>
                    </div>
                ))}
            </main>
        </div>
    );
}
