import { useNavigate } from 'react-router-dom';

export default function ErrorPage() {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Oops !</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <button onClick={() => navigate('/')}>
                Retourner vers la page d'accueil
            </button>
        </div>
    );
}
