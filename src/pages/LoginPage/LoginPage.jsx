import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './LoginPage.module.css';
import Logo from '../../components/ui/Logo/Logo';
import LoginForm from './LoginForm/LoginForm';

export default function LoginPage() {
    const [userName, setUserName] = useState('');

    const navigate = useNavigate();

    const handleChange = (e) => {
        setUserName(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/order/${userName}`);
        setUserName('');
    };

    return (
        <main className={styles.container}>
            <Logo className={styles.logoLoginPage} />
            <h2 className={styles.welcomeTitle}>Bienvenue chez nous !</h2>
            <hr className={styles.breakHr} />
            <h3 className={styles.loginTitle}>Connectez-vous</h3>
            <LoginForm
                onSubmit={handleSubmit}
                onChange={handleChange}
                userName={userName}
            />
        </main>
    );
}
