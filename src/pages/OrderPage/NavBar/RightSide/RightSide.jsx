import { BsPersonCircle } from 'react-icons/bs';
import styles from './RightSide.module.css';
import HeyUserAndLogOut from './HeyUserAndLogOut/HeyUserAndLogOut';

export default function RightSide({ params }) {
    return (
        <div className={styles.rightSideContainer}>
            <HeyUserAndLogOut params={params} />
            <BsPersonCircle className={styles.personIcon} />
        </div>
    );
}
