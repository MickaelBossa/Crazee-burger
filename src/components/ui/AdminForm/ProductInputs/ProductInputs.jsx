import Input from '../../Input/Input';
import { PRODUCTS_CONFIG } from './productsConfig';

export default function ProductInputs({ newProduct, onChange, titleInputRef }) {
    const productsConfig = PRODUCTS_CONFIG(newProduct);

    return (
        <>
            {productsConfig.map((product) => (
                <Input
                    key={product.id}
                    Icon={product.Icon}
                    placeholder={product.placeholder}
                    onChange={onChange}
                    value={product.value}
                    type={product.type}
                    name={product.name}
                    backgroundColor={'var(--background_white)'}
                    height="35px"
                    changePlaceHolderColor={true}
                    width="645px"
                    required={false}
                    ref={titleInputRef}
                />
            ))}
        </>
    );
}
