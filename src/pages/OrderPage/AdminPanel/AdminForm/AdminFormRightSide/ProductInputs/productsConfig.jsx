import { FaHamburger } from 'react-icons/fa';
import { BsFillCameraFill } from 'react-icons/bs';
import { MdOutlineEuro } from 'react-icons/md';

export const PRODUCTS_CONFIG = (newProduct, setNewProduct) => [
    {
        id: 0,
        Icon: (
            <FaHamburger
                width={15}
                color="#747B91"
                style={{ marginLeft: '24px' }}
            />
        ),
        placeholder: 'Nom du produit (ex: Super Burger)',
        onChange: (e) =>
            setNewProduct({ ...newProduct, title: e.target.value }),
        value: newProduct.title,
        type: 'text',
    },
    {
        id: 1,
        Icon: (
            <BsFillCameraFill
                width={15}
                color="#747B91"
                style={{ marginLeft: '24px' }}
            />
        ),
        placeholder:
            "Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)",
        onChange: (e) =>
            setNewProduct({ ...newProduct, imageSource: e.target.value }),
        value: newProduct.imageSource,
        type: 'url',
    },
    {
        id: 2,
        Icon: (
            <MdOutlineEuro
                width={15}
                color="#747B91"
                style={{ marginLeft: '24px' }}
            />
        ),
        placeholder: 'Prix',
        onChange: (e) =>
            setNewProduct({ ...newProduct, price: e.target.value }),
        value: newProduct.price,
        type: 'text',
    },
];
