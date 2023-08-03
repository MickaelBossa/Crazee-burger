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
                userName={userName}
            />
            <PrimaryButton
                Icon={<BsChevronRight className={styles.chevronIcon} />}
                label={'Accédez à mon espace'}
            />
        </form>
    );
}
