import { useParams } from 'react-router-dom';
import Logo from '../../components/ui/Logo/Logo';
import { Link } from 'react-router-dom';
import { BsPersonCircle } from 'react-icons/bs';

import styles from './OrderPage.module.css';

export default function OrderPage() {
    const params = useParams();

    return (
        <div className={styles.container}>
            <nav className={styles.navBar}>
                <Logo onClick={() => window.location.reload()} />
                <div className={styles.rightSideContainer}>
                    <div className={styles.heyUserAndBtn}>
                        <p>
                            Hey,{' '}
                            <spans className={styles.username}>
                                {params.username}
                            </spans>
                        </p>
                        <Link to={'/'} className={styles.logOutBtn}>
                            Déconnexion
                        </Link>
                    </div>
                    <BsPersonCircle className={styles.personIcon} />
                </div>
            </nav>
            <main className={styles.mainContent}></main>
        </div>
    );
}
