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
    const [activeTab, setActiveTab] = useState(0);

    const params = useParams();

    const toggleAdminMode = () => {
        setIsAdmin(!isAdmin);
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
                            style={{
                                height: isAdminPanelVisible ? '0px' : '250px',
                            }}
                        >
                            <button
                                className={styles.adminPanelBtn}
                                style={{
                                    width: '62px',
                                    backgroundColor:
                                        isAdminPanelVisible && '#292729',
                                }}
                                onClick={() =>
                                    setIsAdminPanelVisible(!isAdminPanelVisible)
                                }
                            >
                                {isAdminPanelVisible ? (
                                    <FiChevronUp width={16} />
                                ) : (
                                    <FiChevronDown width={16} />
                                )}
                            </button>

                            <button
                                className={styles.adminPanelBtn}
                                style={{
                                    backgroundColor:
                                        activeTab === 0 && '#292729',
                                    color: activeTab === 0 && '#FFFFFF',
                                    border: activeTab === 0 && 'none',
                                }}
                                onClick={() => setActiveTab(0)}
                            >
                                <AiOutlinePlus width={16} />
                                Ajouter un produit
                            </button>

                            <button
                                className={styles.adminPanelBtn}
                                style={{
                                    backgroundColor:
                                        activeTab === 1 && '#292729',
                                    color: activeTab === 1 && '#FFFFFF',
                                    border: activeTab === 1 && 'none',
                                }}
                                onClick={() => setActiveTab(1)}
                            >
                                <MdModeEditOutline width={16} />
                                Modifier un produit
                            </button>
                            <p
                                className={styles.adminPanelTxt}
                                style={{
                                    display: isAdminPanelVisible && 'none',
                                }}
                            >
                                {activeTab === 0
                                    ? 'Ajouter un produit'
                                    : 'Modifier un produit'}
                            </p>
                        </div>
                    )}
                </main>
            </div>
        </AdminContext.Provider>
    );
}
