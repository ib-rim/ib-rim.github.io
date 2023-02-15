import styles from '@/styles/Ticker.module.scss';

export default function Ticker() {

    return (
        <div className={styles.wrapper}>
            <div className={styles.ticker}>
                <div className={styles.item}>React</div>
                <div className={styles.item}>Next.js</div>
                <div className={styles.item}>Sass</div>
                <div className={styles.item}>Vue</div>
                <div className={styles.item}>Django</div>
                <div className={styles.item}>WordPress</div>
                <div className={styles.item}>Google Analytics</div>
                <div className={styles.item}>Unity2D</div>
                <div className={styles.item}>C#</div>
                <div className={styles.item}>Git</div>
            </div>
            <div className={styles.ticker} data-delay={"true"}>
                <div className={styles.item}>React</div>
                <div className={styles.item}>Next.js</div>
                <div className={styles.item}>Sass</div>
                <div className={styles.item}>Vue</div>
                <div className={styles.item}>Django</div>
                <div className={styles.item}>WordPress</div>
                <div className={styles.item}>Google Analytics</div>
                <div className={styles.item}>Unity2D</div>
                <div className={styles.item}>C#</div>
                <div className={styles.item}>Git</div>
            </div>
        </div>
    )
}