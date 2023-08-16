import Input from '../../../components/ui/Input/Input';
import PrimaryButton from '../../../components/ui/PrimaryButton/PrimaryButton';
import { BsPersonCircle, BsChevronRight } from 'react-icons/bs';
import styles from './LoginForm.module.css';

export default function LoginForm({ onSubmit, onChange, userName }) {
    return (
        <form onSubmit={onSubmit}>
            <Input
                Icon={<BsPersonCircle className={styles.personIcon} />}
                onChange={onChange}
                value={userName}
                backgroundColor={'var(--white)'}
                placeholder="Entrez votre prénom"
            />
            <div className={styles.primaryBtnContainer}>
                <PrimaryButton
                    Icon={<BsChevronRight className={styles.chevronIcon} />}
                    label={'Accédez à mon espace'}
                    primary={true}
                />
            </div>
        </form>
    );
}
