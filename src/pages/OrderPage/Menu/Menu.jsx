import ProductCard from '../../../components/ui/ProductCard/ProductCard';
import OutOfStockMsg from '../OutOfStockMsg/OutOfStockMsg';
import styles from './Menu.module.css';

export default function Menu({
    products,
    isAdmin,
    deleteProduct,
    onAdminClicked,
    productToModify,
    setProducts,
}) {
    return (
        <div className={styles.products}>
            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    product={product}
                    isAdmin={isAdmin}
                    deleteProduct={(e) => deleteProduct(product.id, e)}
                    activeEditMode={onAdminClicked}
                    isActive={product.id === productToModify.id ? true : false}
                />
            ))}
            {products.length === 0 ? (
                <OutOfStockMsg isAdmin={isAdmin} setProducts={setProducts} />
            ) : null}
        </div>
    );
}
