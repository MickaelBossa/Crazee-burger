import { useParams, useNavigate } from 'react-router-dom';

export default function OrderPage() {
    const params = useParams();
    const navigate = useNavigate();

    return (
        <div>
            <h1>Bonjour {params.username}</h1>
            <button onClick={() => navigate('/')}>Déconnexion</button>
        </div>
    );
}
