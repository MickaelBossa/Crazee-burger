import styles from './AdminPanelTab.module.css';

export default function AdminPanelTab({
    index,
    icon,
    txt,
    activeTab,
    toggleActiveTab,
    isAdminPanelVisible,
}) {
    return (
        <button
            className={styles.adminPanelBtn}
            style={
                txt
                    ? {
                          backgroundColor: activeTab === index && '#292729',
                          color: activeTab === index && '#FFFFFF',
                          border: activeTab === index && 'none',
                      }
                    : {
                          width: '62px',
                          backgroundColor: !isAdminPanelVisible && '#292729',
                          borderTop: !isAdminPanelVisible && 'none',
                          borderBottom: !isAdminPanelVisible && 'none',
                      }
            }
            onClick={() => toggleActiveTab(index)}
        >
            {icon}
            {txt}
        </button>
    );
}
