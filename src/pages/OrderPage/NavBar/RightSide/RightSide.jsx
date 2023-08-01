import { BsPersonCircle } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import styles from './RightSide.module.css';

export default function RightSide({ params }) {
    return (
        <div className={styles.rightSideContainer}>
            <div className={styles.heyUserAndBtn}>
                <p>
                    Hey,{' '}
                    <spans className={styles.username}>{params.username}</spans>
                </p>
                <Link to={'/'} className={styles.logOutBtn}>
                    Déconnexion
                </Link>
            </div>
            <BsPersonCircle className={styles.personIcon} />
        </div>
    );
}
