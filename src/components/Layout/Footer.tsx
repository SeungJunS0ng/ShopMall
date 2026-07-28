import styles from './Footer.module.css';

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <p>© 2024 ShopMall. All rights reserved.</p>
                <div className={styles.links}>
                    <a href="#" className={styles.link}>이용약관</a>
                    <a href="#" className={styles.link}>개인정보처리방침</a>
                    <a href="#" className={styles.link}>고객센터</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;