import { FiCheck } from 'react-icons/fi';
import styles from './SuccessMessage.module.css';

export default function SuccessMessage() {
    return (
        <span className={styles.successMsg}>
            <FiCheck
                width={18}
                style={{
                    border: '1px solid #60BD4F',
                    borderRadius: '50%',
                    color: '#60BD4F',
                }}
            />
            Ajouté avec succès !
        </span>
    );
}
