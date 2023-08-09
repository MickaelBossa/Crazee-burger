import { useParams } from 'react-router-dom';
import { fakeMenu2 } from '../../fakeData/fakeMenu';
import styles from './OrderPage.module.css';
import NavBar from './NavBar/NavBar';
import ProductCard from '../../components/ui/ProductCard/ProductCard';
import { createContext } from 'react';
import { useState } from 'react';
import AdminPanel from './AdminPanel/AdminPanel';

export const AdminContext = createContext(null);

export default function OrderPage() {
    const [isAdmin, setIsAdmin] = useState(false);

    const [isAdminPanelVisible, setIsAdminPanelVisible] = useState(isAdmin);
    const [activeTab, setActiveTab] = useState(0);

    const params = useParams();

    const toggleAdminMode = () => {
        setIsAdmin(!isAdmin);
    };

    const toggleActiveTab = (nbr) => {
        if (isAdminPanelVisible) {
            setIsAdminPanelVisible(!isAdminPanelVisible);
            setActiveTab(nbr);
        } else {
            setActiveTab(nbr);
        }
    };

    const toggleAdminPanelVisibility = () => {
        setIsAdminPanelVisible(!isAdminPanelVisible);
    };

    return (
        <AdminContext.Provider value={isAdmin}>
            <div className={styles.container}>
                <NavBar params={params} toggleAdminMode={toggleAdminMode} />
                <main className={styles.mainContent}>
                    {fakeMenu2.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                    {isAdmin && (
                        <AdminPanel
                            toggleActiveTab={toggleActiveTab}
                            toggleAdminPanelVisibility={
                                toggleAdminPanelVisibility
                            }
                            activeTab={activeTab}
                            isAdminPanelVisible={isAdminPanelVisible}
                        />
                    )}
                </main>
            </div>
        </AdminContext.Provider>
    );
}
