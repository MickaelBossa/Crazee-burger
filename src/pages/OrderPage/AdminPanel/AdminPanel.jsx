import AdminForm from './AdminForm/AdminForm';
import styles from './AdminPanel.module.css';
import TabContainer from './TabContainer/TabContainer';
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
            <div
                className={styles.adminPanelTxt}
                style={{
                    display: !isAdminPanelVisible && 'none',
                }}
            >
                {/* {tabs.find((tab) => tab.index === activeTab).txt} */}
                <AdminForm />
            </div>
        </div>
    );
}
