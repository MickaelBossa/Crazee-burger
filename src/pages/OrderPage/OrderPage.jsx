import { useParams } from 'react-router-dom';
import { fakeMenu } from '../../fakeData/fakeMenu';
import styles from './OrderPage.module.css';
import NavBar from './NavBar/NavBar';
import ProductCard from '../../components/ui/ProductCard/ProductCard';
import { useState } from 'react';
import AdminPanel from './AdminPanel/AdminPanel';
import AdminContext from '../../context/AdminContext';

export default function OrderPage() {
    const [products, setProducts] = useState(fakeMenu.LARGE);

    const [isAdmin, setIsAdmin] = useState(false);

    const [isAdminPanelVisible, setIsAdminPanelVisible] = useState(true);
    const [activeTab, setActiveTab] = useState(0);

    const params = useParams();

    const toggleAdminMode = () => {
        setIsAdmin(!isAdmin);
    };

    const toggleActiveTab = (nbr) => {
        if (isAdminPanelVisible) {
            setActiveTab(nbr);
        } else {
            setIsAdminPanelVisible(!isAdminPanelVisible);
            setActiveTab(nbr);
        }
    };

    const toggleAdminPanelVisibility = () => {
        setIsAdminPanelVisible(!isAdminPanelVisible);
    };

    const deleteProduct = (id) => {
        const newProducts = products.filter((product) => product.id !== id);
        setProducts(newProducts);
    };

    return (
        <AdminContext.Provider value={isAdmin}>
            <div className={styles.container}>
                <NavBar params={params} toggleAdminMode={toggleAdminMode} />
                <main className={styles.mainContent}>
                    {products.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            isAdmin={isAdmin}
                            deleteProduct={() => deleteProduct(product.id)}
                        />
                    ))}
                    {products.length === 0 ? (
                        isAdmin ? (
                            <div>
                                <p>
                                    Le menu est vide ? Cliquez ci dessous pour
                                    le réinitialiser
                                </p>
                                <button
                                    onClick={() => setProducts(fakeMenu.LARGE)}
                                >
                                    Générer de nouveaux produits
                                </button>
                            </div>
                        ) : (
                            <div>
                                <p>
                                    Victime de notre succès ! :D De nouvelles
                                    recettes sont en cours de préparation.. A
                                    très vite !
                                </p>
                            </div>
                        )
                    ) : null}
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
