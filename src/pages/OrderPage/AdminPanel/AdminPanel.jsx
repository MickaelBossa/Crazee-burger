import styles from './AdminPanel.module.css';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { AiOutlinePlus } from 'react-icons/ai';
import { MdModeEditOutline } from 'react-icons/md';

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
            <button
                className={styles.adminPanelBtn}
                style={{
                    width: '62px',
                    backgroundColor: !isAdminPanelVisible && '#292729',
                    borderTop : !isAdminPanelVisible && 'none',
                    borderBottom : !isAdminPanelVisible && 'none',
                }}
                onClick={toggleAdminPanelVisibility}
            >
                {isAdminPanelVisible ? (
                    <FiChevronDown width={16} />
                ) : (
                    <FiChevronUp width={16} />
                )}
            </button>

            <button
                className={styles.adminPanelBtn}
                style={{
                    backgroundColor: activeTab === 0 && '#292729',
                    color: activeTab === 0 && '#FFFFFF',
                    border : activeTab === 0 && 'none',
                }}
                onClick={() => toggleActiveTab(0)}
            >
                <AiOutlinePlus width={16} />
                Ajouter un produit
            </button>

            <button
                className={styles.adminPanelBtn}
                style={{
                    backgroundColor: activeTab === 1 && '#292729',
                    color: activeTab === 1 && '#FFFFFF',
                    border: activeTab === 1 && 'none',
                }}
                onClick={() => toggleActiveTab(1)}
            >
                <MdModeEditOutline width={16} />
                Modifier un produit
            </button>
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
