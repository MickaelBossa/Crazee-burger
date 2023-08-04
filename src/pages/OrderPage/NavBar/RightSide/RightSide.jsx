import { BsPersonCircle } from 'react-icons/bs';
import styles from './RightSide.module.css';
import HeyUserAndLogOut from './HeyUserAndLogOut/HeyUserAndLogOut';
import { ToastContainer } from 'react-toastify';

export default function RightSide({ params }) {
    return (
        <div className={styles.rightSideContainer}>
            <div className={styles.toasterContainer}>
            <ToastContainer className={styles.toaster} bodyClassName="body-toast" />
            </div>
            <HeyUserAndLogOut params={params} />
            <BsPersonCircle className={styles.personIcon} />
        </div>
    );
}
