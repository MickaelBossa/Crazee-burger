import { useParams } from 'react-router-dom';
import { fakeMenu } from '../../fakeData/fakeMenu';
import NavBar from './NavBar/NavBar';
import { useRef, useState } from 'react';
import AdminContext from '../../context/AdminContext';
import 'react-toastify/dist/ReactToastify.css';
import { EMPTY_PRODUCT } from '../../enums/product';
import MainContent from './MainContent/MainContent';
import styles from './OrderPage.module.css';

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
                <MainContent
                    products={products}
                    isAdmin={isAdmin}
                    deleteProduct={deleteProduct}
                    onAdminClicked={onAdminClicked}
                    productToModify={productToModify}
                    setProducts={setProducts}
                    toggleActiveTab={toggleActiveTab}
                    toggleAdminPanelVisibility={toggleAdminPanelVisibility}
                    activeTab={activeTab}
                    isAdminPanelVisible={isAdminPanelVisible}
                    addProduct={addProduct}
                    hasProductAdded={hasProductAdded}
                    updateProduct={updateProduct}
                    setProductToModify={setProductToModify}
                    titleInputRef={titleInputRef}
                />
            </div>
        </AdminContext.Provider>
    );
}
