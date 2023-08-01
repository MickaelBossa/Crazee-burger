import { Link } from 'react-router-dom';
import styles from './HeyUserAndLogOut.module.css';

export default function HeyUserAndLogOut({ params }) {
    return (
        <div className={styles.heyUserAndBtn}>
            <p>
                Hey,{' '}
                <spans className={styles.username}>{params.username}</spans>
            </p>
            <Link to={'/'} className={styles.logOutBtn}>
                Déconnexion
            </Link>
        </div>
    );
}
