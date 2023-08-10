import styles from './AdminPanel.module.css';
import TabContainer from './TabContainer/TabContainer';

export default function AdminPanel({
    toggleActiveTab,
    toggleAdminPanelVisibility,
    activeTab,
    isAdminPanelVisible,
}) {
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
                {activeTab === 0 ? 'Ajouter un produit' : 'Modifier un produit'}
            </p>
        </div>
    );
}
