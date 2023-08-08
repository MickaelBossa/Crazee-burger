import { useParams } from 'react-router-dom';
import { fakeMenu2 } from '../../fakeData/fakeMenu';
import styles from './OrderPage.module.css';
import NavBar from './NavBar/NavBar';
import ProductCard from '../../components/ui/ProductCard/ProductCard';
import { createContext } from 'react';
import { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { AiOutlinePlus } from 'react-icons/ai';
import { MdModeEditOutline } from 'react-icons/md';

export const AdminContext = createContext(null);

export default function OrderPage() {
    const [isAdmin, setIsAdmin] = useState(false);
    const [isAdminPanelVisible, setIsAdminPanelVisible] = useState(isAdmin);

    const params = useParams();

    const toggleAdminMode = () => {
        setIsAdmin(!isAdmin);
    };

    const conditionalStyles = {
        adminPanelHeight: {
            height: isAdminPanelVisible && '0px',
        },
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
                        <div
                            className={styles.adminPanel}
                            style={conditionalStyles.adminPanelHeight}
                        >
                            <button
                                className={styles.adminPanelBtn}
                                onClick={() =>
                                    setIsAdminPanelVisible(!isAdminPanelVisible)
                                }
                            >
                                {isAdminPanelVisible ? (
                                    <FiChevronUp />
                                ) : (
                                    <FiChevronDown />
                                )}
                            </button>
                            <button className={styles.adminPanelBtn}>
                                <AiOutlinePlus />
                                Ajouter un produit
                            </button>
                            <button className={styles.adminPanelBtn}>
                                <MdModeEditOutline />
                                Modifier un produit
                            </button>
                        </div>
                    )}
                </main>
            </div>
        </AdminContext.Provider>
    );
}
