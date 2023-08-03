import { useParams } from 'react-router-dom';
import { fakeMenu2 } from '../../../fakeData/fakeMenu';
import styles from './OrderPage.module.css';
import NavBar from './NavBar/NavBar';
import PrimaryButton from '../../components/ui/PrimaryButton/PrimaryButton';

export default function OrderPage() {
    const params = useParams();

    return (
        <div className={styles.container}>
            <NavBar params={params} />
            <main className={styles.mainContent}>
                {fakeMenu2.map((product) => (
                    <div key={product.id} className={styles.productCard}>
                        <img src={product.imageSource} alt={`Image de ${product.title}`} />
                        <p>{product.title}</p>
                        <div>
                            <p>{product.price} €</p>
                            <PrimaryButton width={'95px'} label={'Ajouter'} height={'38px'} />
                        </div>
                    </div>
                ))}
            </main>
        </div>
    );
}
