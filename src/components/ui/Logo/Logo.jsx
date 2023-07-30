import './Logo.css';

export default function Logo() {
    return (
        <h1 className="logo-title">
            Crazee{' '}
            <img
                src="logo-orange.png"
                alt="Logo Crazee Burger"
                className="logo-img"
            />{' '}
            Burger
        </h1>
    );
}
