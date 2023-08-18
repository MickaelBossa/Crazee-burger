import Input from '../../../../../../components/ui/Input/Input';
import { PRODUCTS_CONFIG } from './productsConfig';

export default function ProductInputs({ newProduct, setNewProduct }) {
    const productsConfig = PRODUCTS_CONFIG(newProduct, setNewProduct);

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
                    name={product.name}
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
