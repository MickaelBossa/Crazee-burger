import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { AiOutlinePlus } from 'react-icons/ai';
import { MdModeEditOutline } from 'react-icons/md';
import AdminPanelBtn from './AdminPanelBtn/AdminPanelBtn';

export default function ButtonContainer({
    isAdminPanelVisible,
    toggleAdminPanelVisibility,
    toggleActiveTab,
    activeTab,
}) {
    return (
        <>
            <AdminPanelBtn
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
            <AdminPanelBtn
                index={0}
                icon={<AiOutlinePlus width={16} />}
                txt={'Ajouter un produit'}
                activeTab={activeTab}
                toggleActiveTab={() => toggleActiveTab(0)}
            />
            <AdminPanelBtn
                index={1}
                icon={<MdModeEditOutline width={16} />}
                txt={'Modifier un produit'}
                activeTab={activeTab}
                toggleActiveTab={() => toggleActiveTab(1)}
            />
        </>
    );
}
