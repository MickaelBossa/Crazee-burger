import Input from '../../../components/ui/Input/Input';
import PrimaryButton from '../../../components/ui/PrimaryButton/PrimaryButton';
import './LoginForm.css';
import { BsPersonCircle, BsChevronRight } from 'react-icons/bs';

export default function LoginForm({ onSubmit, onChange, userName }) {
    return (
        <form onSubmit={onSubmit}>
            <Input
                Icon={<BsPersonCircle className="person-icon" />}
                onChange={onChange}
                userName={userName}
            />
            <PrimaryButton Icon={<BsChevronRight className="chevron-icon" />} />
        </form>
    );
}
