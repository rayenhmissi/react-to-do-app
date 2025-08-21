import styles from '../styles/footer.module.css';
export default function Footer({ complete, alltask }) {
    return(
        <div className={styles.footer}>
            <b className={styles.ct}> number of completed tasks:{complete}</b>
            <b className={styles.tt}> number of all tasks:{alltask}</b>
        </div>
    );
}