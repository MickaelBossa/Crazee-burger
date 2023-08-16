import Input from '../../../components/ui/Input/Input';
import styles from './AdminPanel.module.css';
import TabContainer from './TabContainer/TabContainer';
import { FaHamburger } from 'react-icons/fa';
import { BsFillCameraFill } from 'react-icons/bs';
import { MdOutlineEuro } from 'react-icons/md';
import PrimaryButton from '../../../components/ui/PrimaryButton/PrimaryButton';
// import { tabsConfig } from './tabsConfig';

export default function AdminPanel({
    toggleActiveTab,
    toggleAdminPanelVisibility,
    activeTab,
    isAdminPanelVisible,
}) {
    // const tabs = tabsConfig;

    return (
        <div
            className={styles.adminPanel}
            style={{
                height: isAdminPanelVisible ? '250px' : '0px',
            }}
        >
            <TabContainer
                isAdminPanelVisible={isAdminPanelVisible}
                toggleAdminPanelVisibility={toggleAdminPanelVisibility}
                toggleActiveTab={toggleActiveTab}
                activeTab={activeTab}
            />
            <p
                className={styles.adminPanelTxt}
                style={{
                    display: !isAdminPanelVisible && 'none',
                }}
            >
                {/* {tabs.find((tab) => tab.index === activeTab).txt} */}
                <form className={styles.adminPanelForm}>
                    <div className={styles.adminPanelLeftSide}>
                        <p>Aucune image</p>
                    </div>
                    <div className={styles.adminPanelRightSide}>
                        {/* <input type="text" />
                        <input type="text" />
                        <input type="text" /> */}
                        <Input
                            Icon={
                                <FaHamburger
                                    width={15}
                                    color="#747B91"
                                    style={{ marginLeft: '24px' }}
                                />
                            }
                            placeholder="Nom du produit (ex: Super Burger)"
                            backgroundColor={'var(--background_white)'}
                            height="35px"
                            changePlaceHolderColor={true}
                            width="645px"
                        />
                        <Input
                            Icon={
                                <BsFillCameraFill
                                    width={15}
                                    color="#747B91"
                                    style={{ marginLeft: '24px' }}
                                />
                            }
                            placeholder="Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)"
                            backgroundColor={'var(--background_white)'}
                            height="35px"
                            changePlaceHolderColor={true}
                            width="645px"
                        />
                        <Input
                            Icon={
                                <MdOutlineEuro
                                    width={15}
                                    color="#747B91"
                                    style={{ marginLeft: '24px' }}
                                />
                            }
                            placeholder="Prix"
                            backgroundColor={'var(--background_white)'}
                            height="35px"
                            changePlaceHolderColor={true}
                            width="645px"
                        />
                        <PrimaryButton
                            label={'Ajouter un nouveau produit au menu'}
                            height={'34px'}
                            width={'275px'}
                            fontSize={'var(--XS)'}
                            primary={false}
                        />
                        {/* <button className={styles.addProductBtn}>
                            Ajouter un nouveau produit au menu
                        </button> */}
                    </div>
                </form>
            </p>
        </div>
    );
}
