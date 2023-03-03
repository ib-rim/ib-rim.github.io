import styles from '@/styles/ReadingList.module.scss';
import { useState } from 'react';

export default function ReadingList(props) {

    const [books] = useState(props.books);

    return (
        <table className={styles.table}>
            <caption className={styles.caption}>{new Date().getFullYear()} Reading List Highlights</caption>
            <thead>
                <tr>
                    <th scope="col" className={styles.title}>Title</th>
                    <th scope="col" className={styles.author}>Author</th>
                    <th scope="col" className={styles.status}>Status</th>
                </tr>
            </thead>
            <tbody>
                {books.map(book => {
                    return (
                        <tr key={book.title}>
                            <th scope="row" className={styles.title}>{book.title}</th>
                            <td className={styles.author}>{book.author}</td>
                            <td data-status={book.status} className={styles.status}>{book.status}</td>
                        </tr>)
                })}
            </tbody >
        </table>
    )
}