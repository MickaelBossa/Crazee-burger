import TabContainer from './TabContainer/TabContainer';
import { tabsConfig } from './tabsConfig';
import styles from './AdminPanel.module.css';

export default function AdminPanel({
    toggleActiveTab,
    toggleAdminPanelVisibility,
    activeTab,
    isAdminPanelVisible,
    addProduct,
    hasProductAdded
}) {
    const tabs = tabsConfig(addProduct, hasProductAdded);

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
            <div
                className={styles.adminPanelTxt}
                style={{
                    display: !isAdminPanelVisible && 'none',
                }}
            >
                {tabs.find((tab) => tab.index === activeTab).Component}
            </div>
        </div>
    );
}
