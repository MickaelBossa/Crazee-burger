import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsPersonCircle, BsChevronRight } from 'react-icons/bs';
import './LoginPage.css';

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
            <h1 className="logo-title">
                Crazee{' '}
                <img
                    src="logo-orange.png"
                    alt="Logo Crazee Burger"
                    className="logo-img"
                />{' '}
                Burger
            </h1>
            <h2 className="welcome-title">Bienvenue chez nous !</h2>
            <hr className="break-hr" />
            <h3 className="login-title">Connectez-vous</h3>
            <form onSubmit={handleSubmit}>
                <div className="login-input-container">
                    <BsPersonCircle className='person-icon' />
                    <input
                        type="text"
                        required
                        placeholder="Entrez votre prénom"
                        value={userName}
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <div className='login-btn-container'>
                    <button type="submit">Accédez à mon espace</button>
                    <BsChevronRight className='chevron-icon' />
                </div>
            </form>
        </main>
    );
}
