import { useParams } from 'react-router-dom';

import styles from './OrderPage.module.css';
import NavBar from './NavBar/NavBar';

export default function OrderPage() {
    const params = useParams();

    return (
        <div className={styles.container}>
            <NavBar params={params} />
            <main className={styles.mainContent}></main>
        </div>
    );
}
