import styles from './Loading.module.css';
function Loading() {
    return (
        <div className={styles.loading}>
            <div className={styles.spinner}></div>
            <p>로딩 중...</p>
        </div>
    );
}
export default Loading;