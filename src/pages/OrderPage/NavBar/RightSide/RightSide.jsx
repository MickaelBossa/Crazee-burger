import { BsPersonCircle } from 'react-icons/bs';
import styles from './RightSide.module.css';
import HeyUserAndLogOut from './HeyUserAndLogOut/HeyUserAndLogOut';
import { toast } from 'react-toastify';
import ToggleButton from '../../../../components/ui/ToggleButton/ToggleButton';
import { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';

export default function RightSide({ params }) {
    const [toggleBtnIsChecked, setToggleBtnIsChecked] = useState(false);

    const toggleHandler = () => {
        setToggleBtnIsChecked(!toggleBtnIsChecked);

        !toggleBtnIsChecked &&
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
    };

    return (
        <div className={styles.rightSideContainer}>
            <ToggleButton
                isChecked={toggleBtnIsChecked}
                onToggle={toggleHandler}
            />
            <HeyUserAndLogOut params={params} />
            <BsPersonCircle className={styles.personIcon} />
        </div>
    );
}
