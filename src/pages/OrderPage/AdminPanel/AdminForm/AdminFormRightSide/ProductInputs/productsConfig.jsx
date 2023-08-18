import { FaHamburger } from 'react-icons/fa';
import { BsFillCameraFill } from 'react-icons/bs';
import { MdOutlineEuro } from 'react-icons/md';

export const PRODUCTS_CONFIG = (
    productTitle,
    setProductTitle,
    productImageSource,
    setProductImageSource,
    productPrice,
    setProductPrice,
) => [
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
        onChange: (e) => setProductTitle(e.target.value),
        value: productTitle,
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
        onChange: (e) => setProductImageSource(e.target.value),
        value: productImageSource,
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
        onChange: (e) => setProductPrice(e.target.value),
        value: productPrice,
        type: 'text',
    },
];
