import styles from './OutOfStockMsg.module.css';
import PrimaryButton from '../../../components/ui/PrimaryButton/PrimaryButton';
import { fakeMenu } from '../../../fakeData/fakeMenu';

export default function OutOfStockMsg({ isAdmin, setProducts }) {
    return (
        <>
            {isAdmin ? (
                <div className={styles.adminMessage}>
                    <p className={styles.adminMessageTitle}>
                        Le menu est vide ?{' '}
                        <span className={styles.adminMessageSubtitle}>
                            Cliquez ci dessous pour le réinitialiser
                        </span>
                    </p>

                    <PrimaryButton
                        height="50px"
                        label="Générer de nouveaux produits"
                        width="224px"
                        primary={true}
                        fontSize="12px"
                        onClick={() => setProducts(fakeMenu.LARGE)}
                    />
                </div>
            ) : (
                <div className={styles.adminMessage}>
                    <p className={styles.adminMessageTitle}>
                        Victime de notre succès ! :D
                        <span className={styles.adminMessageSubtitle}>
                            De nouvelles recettes sont en cours de préparation..
                        </span>
                        <span className={styles.adminMessageSubtitle}>
                            À très vite !
                        </span>
                    </p>
                </div>
            )}
        </>
    );
}
