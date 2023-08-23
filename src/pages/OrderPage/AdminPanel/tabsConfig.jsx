import { AiOutlinePlus } from 'react-icons/ai';
import { MdModeEditOutline } from 'react-icons/md';
import AdminForm from './AdminForm/AdminForm';

export const tabsConfig = (addProduct, hasProductAdded) => [
    {
        index: 0,
        Icon: <AiOutlinePlus width={16} />,
        txt:'Ajouter un produit',
        Component: <AdminForm addProduct={addProduct} hasProductAdded={hasProductAdded}/>,
    },
    {
        index: 1,
        Icon: <MdModeEditOutline width={16} />,
        txt:'Modifier un produit',
        Component: 'Modifier un produit',
    },
];
