import { useParams } from 'react-router-dom';
import { fakeMenu2 } from '../../fakeData/fakeMenu';
import styles from './OrderPage.module.css';
import NavBar from './NavBar/NavBar';
import ProductCard from '../../components/ui/ProductCard/ProductCard';
import { createContext } from 'react';
import { useState } from 'react';

export const AdminContext = createContext(null);

export default function OrderPage() {
    const [isAdmin, setIsAdmin] = useState(false);

    const params = useParams();

    const toggleAdminMode = () => {
        setIsAdmin(!isAdmin)
    }

    return (
        <AdminContext.Provider value={isAdmin}>
            <div className={styles.container}>
                <NavBar params={params} toggleAdminMode={toggleAdminMode} />
                <main className={styles.mainContent}>
                    {fakeMenu2.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </main>
            </div>
        </AdminContext.Provider>
    );
}
