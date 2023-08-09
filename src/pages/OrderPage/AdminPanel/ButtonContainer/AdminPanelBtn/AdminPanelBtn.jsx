import styles from './AdminPanelBtn.module.css';

export default function AdminPanelBtn({
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
                index === 0 || index === 1
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
