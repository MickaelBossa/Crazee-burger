import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
        <div>
            <h1>Bienvenue chez nous !</h1>
            <h2>Connectez-vous</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    required
                    placeholder="Entrez votre prénom"
                    value={userName}
                    onChange={(e) => handleChange(e)}
                />
                <button type="submit">Accédez à mon espace</button>
            </form>
        </div>
    );
}
