import { useState } from 'react';

export default function App() {
    const [userName, setUserName] = useState('');

    const handleChange = (e) => {
        setUserName(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        alert(`Bonjour ${userName}`);
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
                    placeholder="Entrez votre prénom..."
                    value={userName}
                    onChange={(e) => handleChange(e)}
                />
                <button type="submit">Accédez à votre espace</button>
            </form>
        </div>
    );
}
