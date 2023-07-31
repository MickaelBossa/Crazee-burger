import { useParams, useNavigate } from 'react-router-dom';
import Logo from '../../components/ui/Logo/Logo'
import styles from './OrderPage.module.css';

export default function OrderPage() {
    const params = useParams();
    const navigate = useNavigate();

    return (
        <div className={styles.container}>
            <nav>
                <Logo />
                <h1>Hey, {params.username}</h1>
                <button onClick={() => navigate('/')}>Déconnexion</button>
            </nav>
        </div>
    );
}
