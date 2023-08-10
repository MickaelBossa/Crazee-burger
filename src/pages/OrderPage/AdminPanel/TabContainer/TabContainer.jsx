import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import AdminPanelTab from './AdminPanelTab/AdminPanelTab';
import { tabsConfig } from '../tabsConfig';

export default function TabContainer({
    isAdminPanelVisible,
    toggleAdminPanelVisibility,
    toggleActiveTab,
    activeTab,
}) {
    const tabs = tabsConfig;

    return (
        <>
            <AdminPanelTab
                icon={
                    isAdminPanelVisible ? (
                        <FiChevronDown width={16} />
                    ) : (
                        <FiChevronUp width={16} />
                    )
                }
                activeTab={activeTab}
                toggleActiveTab={toggleAdminPanelVisibility}
                isAdminPanelVisible={isAdminPanelVisible}
            />
            {tabs.map((tab) => (
                <AdminPanelTab
                    key={tab.index}
                    index={tab.index}
                    icon={tab.icon}
                    txt={tab.txt}
                    activeTab={activeTab}
                    toggleActiveTab={() => toggleActiveTab(tab.index)}
                />
            ))}
        </>
    );
}
