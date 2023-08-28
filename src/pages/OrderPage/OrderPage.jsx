import { useParams } from 'react-router-dom';
import { fakeMenu } from '../../fakeData/fakeMenu';
import NavBar from './NavBar/NavBar';
import ProductCard from '../../components/ui/ProductCard/ProductCard';
import { useRef, useState } from 'react';
import AdminPanel from './AdminPanel/AdminPanel';
import AdminContext from '../../context/AdminContext';
import 'react-toastify/dist/ReactToastify.css';
import OutOfStockMsg from './OutOfStockMsg/OutOfStockMsg';
import { EMPTY_PRODUCT } from '../../enums/product';
import styles from './OrderPage.module.css';
import Basket from './Basket/Basket';

export default function OrderPage() {
    const [products, setProducts] = useState(fakeMenu.LARGE);
    const [isAdmin, setIsAdmin] = useState(false);
    const [isAdminPanelVisible, setIsAdminPanelVisible] = useState(true);
    const [activeTab, setActiveTab] = useState(0);
    const [hasProductAdded, setHasProductAdded] = useState(false);
    const [productToModify, setProductToModify] = useState(EMPTY_PRODUCT);

    const titleInputRef = useRef();

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

    const deleteProduct = (id, e) => {
        e.stopPropagation();
        const newProducts = products.filter((product) => product.id !== id);
        setProducts(newProducts);
    };

    const addProduct = (newProduct) => {
        const newProducts = [newProduct, ...products];
        setProducts(newProducts);
        setHasProductAdded(true);
        setTimeout(() => {
            setHasProductAdded(false);
        }, '2000');
    };

    const onAdminClicked = async (product) => {
        await toggleActiveTab(1);
        await setProductToModify(product);
        titleInputRef.current.focus();
    };

    const updateProduct = (productBeingModified) => {
        const indexOfProductBeingModified = products.findIndex(
            (product) => product.id === productBeingModified.id,
        );
        const productsCopy = [...products];
        productsCopy[indexOfProductBeingModified] = productBeingModified;
        setProducts(productsCopy);
    };

    return (
        <AdminContext.Provider value={isAdmin}>
            <div className={styles.container}>
                <NavBar params={params} toggleAdminMode={toggleAdminMode} />
                <main className={styles.mainContent}>
                    <div className={styles.basketAndProducts}>
                        <Basket />
                        <div className={styles.products}>
                            {products.map((product) => (
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                    isAdmin={isAdmin}
                                    deleteProduct={(e) =>
                                        deleteProduct(product.id, e)
                                    }
                                    activeEditMode={onAdminClicked}
                                    isActive={
                                        product.id === productToModify.id
                                            ? true
                                            : false
                                    }
                                />
                            ))}
                            {products.length === 0 ? (
                                <OutOfStockMsg
                                    isAdmin={isAdmin}
                                    setProducts={setProducts}
                                />
                            ) : null}
                        </div>
                    </div>
                    {isAdmin && (
                        <AdminPanel
                            toggleActiveTab={toggleActiveTab}
                            toggleAdminPanelVisibility={
                                toggleAdminPanelVisibility
                            }
                            activeTab={activeTab}
                            isAdminPanelVisible={isAdminPanelVisible}
                            addProduct={addProduct}
                            hasProductAdded={hasProductAdded}
                            productToModify={productToModify}
                            updateProduct={updateProduct}
                            setProductToModify={setProductToModify}
                            titleInputRef={titleInputRef}
                        />
                    )}
                </main>
            </div>
        </AdminContext.Provider>
    );
}
