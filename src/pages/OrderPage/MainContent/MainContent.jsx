import AdminPanel from '../AdminPanel/AdminPanel';
import Basket from '../Basket/Basket';
import Menu from '../Menu/Menu';
import styles from './MainContent.module.css';

export default function MainContent({
    products,
    isAdmin,
    deleteProduct,
    onAdminClicked,
    productToModify,
    setProducts,
    toggleActiveTab,
    toggleAdminPanelVisibility,
    activeTab,
    isAdminPanelVisible,
    addProduct,
    hasProductAdded,
    updateProduct,
    setProductToModify,
    titleInputRef,
}) {
    return (
        <main
            className={styles.mainContent}
            style={{ gridTemplateRows: isAdmin ? '1fr 240px' : '1fr' }}
        >
            <Basket />
            <Menu
                products={products}
                isAdmin={isAdmin}
                deleteProduct={deleteProduct}
                onAdminClicked={onAdminClicked}
                productToModify={productToModify}
                setProducts={setProducts}
            />
            {isAdmin && (
                <AdminPanel
                    toggleActiveTab={toggleActiveTab}
                    toggleAdminPanelVisibility={toggleAdminPanelVisibility}
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
    );
}
