import { useParams } from 'react-router-dom';
import { fakeMenu2 } from '../../../fakeData/fakeMenu';
import styles from './OrderPage.module.css';
import NavBar from './NavBar/NavBar';
import ProductCard from '../../components/ui/ProductCard/ProductCard';

export default function OrderPage() {
    const params = useParams();

    return (
        <div className={styles.container}>
            <NavBar params={params} />
            <main className={styles.mainContent}>
                {fakeMenu2.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </main>
        </div>
    );
}
