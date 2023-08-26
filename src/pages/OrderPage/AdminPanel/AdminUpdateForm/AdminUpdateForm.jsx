import AdminUpdateFormMsg from './AdminUpdateFormMsg/AdminUpdateFormMsg';
import Input from '../../../../components/ui/Input/Input';
import { FaHamburger } from 'react-icons/fa';
import { BsFillCameraFill } from 'react-icons/bs';
import { MdOutlineEuro } from 'react-icons/md';
import { EMPTY_PRODUCT } from '../../../../enums/product';
import styles from './AdminUpdateForm.module.css';

export default function AdminUpdateForm({
    productToModify,
    updateProduct,
    setProductToModify,
    titleInputRef,
}) {
    const handleChange = (e) => {
        const { name, value } = e.target;
        const newProduct = { ...productToModify, [name]: value };
        setProductToModify(newProduct);
        updateProduct(newProduct);
    };

    return (
        <>
            {productToModify === EMPTY_PRODUCT ? (
                <AdminUpdateFormMsg />
            ) : (
                <form className={styles.adminPanelForm} onSubmit={() => {}}>
                    <div className={styles.adminPanelLeftSide}>
                        <img
                            src={productToModify.imageSource}
                            alt={productToModify.title}
                            className={styles.previewProduct}
                        />
                    </div>
                    <div className={styles.adminPanelRightSide}>
                        <Input
                            key={0}
                            Icon={
                                <FaHamburger
                                    width={15}
                                    color="#747B91"
                                    style={{ marginLeft: '24px' }}
                                />
                            }
                            placeholder={'Nom du produit (ex: Super Burger)'}
                            onChange={(e) => handleChange(e)}
                            value={productToModify.title}
                            type="text"
                            backgroundColor={'var(--background_white)'}
                            height="35px"
                            changePlaceHolderColor={true}
                            width="645px"
                            required={false}
                            name="title"
                            ref={titleInputRef}
                        />

                        <Input
                            key={1}
                            Icon={
                                <BsFillCameraFill
                                    width={15}
                                    color="#747B91"
                                    style={{ marginLeft: '24px' }}
                                />
                            }
                            placeholder={
                                "Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)"
                            }
                            onChange={(e) => handleChange(e)}
                            value={
                                productToModify.imageSource !==
                                '/images/coming-soon.png'
                                    ? productToModify.imageSource
                                    : ''
                            }
                            type="text"
                            backgroundColor={'var(--background_white)'}
                            height="35px"
                            changePlaceHolderColor={true}
                            width="645px"
                            required={false}
                            name="imageSource"
                        />
                        <Input
                            key={2}
                            Icon={
                                <MdOutlineEuro
                                    width={15}
                                    color="#747B91"
                                    style={{ marginLeft: '24px' }}
                                />
                            }
                            placeholder={'Prix'}
                            onChange={(e) => handleChange(e)}
                            value={productToModify.price !== '0,00' ? productToModify.price : ''}
                            type="text"
                            backgroundColor={'var(--background_white)'}
                            height="35px"
                            changePlaceHolderColor={true}
                            width="645px"
                            required={false}
                            name="price"
                        />
                    </div>
                </form>
            )}
        </>
    );
}
