import { AiOutlinePlus } from 'react-icons/ai';
import { MdModeEditOutline } from 'react-icons/md';
import AdminAddForm from './AdminAddForm/AdminAddForm';
import AdminUpdateForm from './AdminUpdateForm/AdminUpdateForm';

export const tabsConfig = (
    addProduct,
    hasProductAdded,
    productToModify,
    updateProduct,
    setProductToModify,
    titleInputRef,
) => [
    {
        index: 0,
        Icon: <AiOutlinePlus width={16} />,
        txt: 'Ajouter un produit',
        Component: (
            <AdminAddForm
                addProduct={addProduct}
                hasProductAdded={hasProductAdded}
            />
        ),
    },
    {
        index: 1,
        Icon: <MdModeEditOutline width={16} />,
        txt: 'Modifier un produit',
        Component: (
            <AdminUpdateForm
                productToModify={productToModify}
                updateProduct={updateProduct}
                setProductToModify={setProductToModify}
                titleInputRef={titleInputRef}
            />
        ),
    },
];
