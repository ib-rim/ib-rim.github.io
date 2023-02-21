import styles from '@/styles/Ticker.module.scss';
import { useState } from 'react';

export default function Ticker(props) {

    const [items, setItems] = useState(handleItems());

    function handleItems() {
        let items = []
        props.items.forEach((item) => {
            items.push(<div key={item} className={styles.item}>{item}</div>);
        })
        return items;
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.ticker}>
                {items}
            </div>
            <div className={styles.ticker} data-delay={"true"}>
                {items}
            </div>
        </div>
    )
}