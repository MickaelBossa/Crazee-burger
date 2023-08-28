import styles from './Basket.module.css';

export default function Basket() {
    return (
        <div className={styles.basket}>
            <div className={styles.basketTop}>
                <p className={styles.basketTopTxt}>
                    Total <span className={styles.basketTopPrice}>0,00 €</span>
                </p>
            </div>
            <div className={styles.basketMainContent}>
                <p className={styles.basketMainContentTxt}>
                    Votre commande est vide
                </p>
            </div>
            <div className={styles.basketBottom}>
                <p className={styles.basketBottomTxt}>
                    Codé avec ❤️ et React.js
                </p>
            </div>
        </div>
    );
}
