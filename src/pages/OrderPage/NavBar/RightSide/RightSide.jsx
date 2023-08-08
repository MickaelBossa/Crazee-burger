import { BsPersonCircle } from 'react-icons/bs';
import styles from './RightSide.module.css';
import HeyUserAndLogOut from './HeyUserAndLogOut/HeyUserAndLogOut';
import { toast } from 'react-toastify';
import ToggleButton from '../../../../components/ui/ToggleButton/ToggleButton';
import { useContext } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { AdminContext } from '../../OrderPage';

export default function RightSide({ params, toggleAdminMode }) {
    const isAdmin = useContext(AdminContext);

    const toggleHandler = () => {
        !isAdmin &&
            toast.info('Mode admin activé', {
                theme: 'dark',
                position: 'bottom-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

        toggleAdminMode();
    };

    return (
        <div className={styles.rightSideContainer}>
            <ToggleButton isChecked={isAdmin} onToggle={toggleHandler} />
            <HeyUserAndLogOut params={params} />
            <BsPersonCircle className={styles.personIcon} />
        </div>
    );
}
