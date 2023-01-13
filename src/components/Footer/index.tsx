import Container from "../Container";
import Logo from "../Logo";
import styles from './footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.main}>
    <Container>
      <div className={styles.content}>
        <div className={styles.footerResume}>
          <Logo />
          <div className={styles.textResume}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  </div>

          <div className={styles.buttons}>
            <button className={styles.buttonFooter}>Button 1</button>
            <button className={styles.buttonFooter}>Button 2</button>
          </div>
        </div>
        <div className={styles.footerSection}>2</div>
        <div className={styles.footerSection}>3</div>
        <div className={styles.footerSection}>4</div>
      </div>
    </Container>

    </footer>
  )
}