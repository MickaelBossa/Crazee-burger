import Input from '../../../../../../components/ui/Input/Input';
import { PRODUCTS_CONFIG } from './productsConfig';

export default function ProductInputs({
    productTitle,
    setProductTitle,
    productImageSource,
    setProductImageSource,
    productPrice,
    setProductPrice,
}) {
    const productsConfig = PRODUCTS_CONFIG(
        productTitle,
        setProductTitle,
        productImageSource,
        setProductImageSource,
        productPrice,
        setProductPrice,
    );

    return (
        <>
            {productsConfig.map((product) => (
                <Input
                    key={product.id}
                    Icon={product.Icon}
                    placeholder={product.placeholder}
                    onChange={product.onChange}
                    value={product.value}
                    type={product.type}
                    backgroundColor={'var(--background_white)'}
                    height="35px"
                    changePlaceHolderColor={true}
                    width="645px"
                    required={false}
                />
            ))}
        </>
    );
}
