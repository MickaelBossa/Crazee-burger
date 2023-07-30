import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';
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
        <main className="container">
            <Logo />
            <h2 className="welcome-title">Bienvenue chez nous !</h2>
            <hr className="break-hr" />
            <h3 className="login-title">Connectez-vous</h3>
            <LoginForm
                onSubmit={handleSubmit}
                onChange={handleChange}
                userName={userName}
            />
        </main>
    );
}
