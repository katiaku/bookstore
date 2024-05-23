import styles from './bookItem.module.css';

export default function BookItem() {
    return (
        <div className={styles.container}>
            <div className={styles.imgWrapper}>
                <img src="../../public/img/portada-el-perfume.jpg" alt="Portada del libro El Perfume" width="170" />
            </div>

            <div className={styles.contentWrapper}>
                <div>
                    <p className={styles.title}>El Perfume</p>
                    <p className={styles.author}>Patrick Suskind</p>
                    <p className={styles.genre}>Novela</p>
                </div>

                <div className={styles.price}>
                    <span>19.9€</span>
                </div>

                <div className={styles.icons}>
                    Icons
                </div>
            </div>
        </div>
    )
}
