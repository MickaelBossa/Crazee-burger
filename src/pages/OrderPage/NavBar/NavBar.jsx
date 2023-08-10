import Logo from '../../../components/ui/Logo/Logo';
import RightSide from './RightSide/RightSide';
import styles from './NavBar.module.css';

export default function NavBar({ params, toggleAdminMode }) {
    return (
        <nav className={styles.navBar}>
            <Logo onClick={() => window.location.reload()} />
            <RightSide params={params} toggleAdminMode={toggleAdminMode} />
        </nav>
    );
}
