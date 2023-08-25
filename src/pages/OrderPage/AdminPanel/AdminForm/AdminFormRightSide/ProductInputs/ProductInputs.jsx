import Input from '../../../../../../components/ui/Input/Input';
import { PRODUCTS_CONFIG } from './productsConfig';

export default function ProductInputs({ newProduct, setNewProduct }) {
    const productsConfig = PRODUCTS_CONFIG(newProduct);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewProduct({ ...newProduct, [name]: value });
    };

    return (
        <>
            {productsConfig.map((product) => (
                <Input
                    key={product.id}
                    Icon={product.Icon}
                    placeholder={product.placeholder}
                    onChange={handleChange}
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
