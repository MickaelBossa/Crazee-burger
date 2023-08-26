import { FaHamburger } from 'react-icons/fa';
import { BsFillCameraFill } from 'react-icons/bs';
import { MdOutlineEuro } from 'react-icons/md';

export const PRODUCTS_CONFIG = (newProduct) => [
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
        value: newProduct.title,
        type: 'text',
        name: 'title',
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
        value: newProduct.imageSource,
        type: 'text',
        name: 'imageSource',
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
        value: newProduct.price,
        type: 'text',
        name: 'price',
    },
];
