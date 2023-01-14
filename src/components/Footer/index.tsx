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
        <div className={styles.footerSection}>
          <p>COMPANY</p>
          <ul>
            <li>About Us</li>
            <li>Legal Information</li>
            <li>Contact Us</li>
            <li>Blogs</li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <p>HELP CENTER</p>
          <ul>
            <li>About Us</li>
            <li>Legal Information</li>
            <li>Contact Us</li>
            <li>Blogs</li>
          </ul></div>
        <div className={styles.footerSection}>
        <p>CONTACT INFO</p>
          <ul>
            <li>About Us</li>
            <li>Legal Information</li>
            <li>Contact Us</li>
            <li>Blogs</li>
          </ul>
          <div className="iconsFooter">
          <a href="https://github.com/Romario-gomes" target="_blank" className="me-4 link-secondary" rel="noreferrer">
            <i className="fab fa-github fa-2x" ></i>
          </a>
          <a href="https://wa.me/16981552188" target="_blank" className="me-4 link-secondary" rel="noreferrer">
            <i className="fab fa-whatsapp fa-2x" ></i>
          </a>
          <a href="https://www.linkedin.com/in/romario-alves-4a15ba19b/" target="_blank" className="me-4 link-secondary" rel="noreferrer">
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
          <a href="mailto:romario.desenvolvedor@gmail.com" target="_blank" className="me-4 link-secondary " rel="noreferrer">
            <i className="fab fa-google fa-2x"></i>
          </a>
          <a href="https://www.instagram.com/romario.dev/" target="_blank" className="me-4 link-secondary" rel="noreferrer">
            <i className="fab fa-instagram fa-2x"></i>
          </a>
          </div>
        </div>
      </div>
    </Container>
    <div className={styles.footerBottom}>
      <Container>
        <div className={styles.textFooterBottom}>
          <span>© 2022 Busca Pets | All rights raserved</span>
          </div>
        <div className={styles.textFooterBottom}>
          <span>Created with love by <b>Romario Alves</b> </span>
        </div>
      </Container>
      </div>
    </footer>
  )
}