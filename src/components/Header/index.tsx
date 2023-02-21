import ButtonCreateAccount from "../ButtonCreateAccount";
import Logo from "../Logo";
import style from "./header.module.scss";

export default function Header() {
  return (
    <header className={style.header}>
      <div className={style.container}>
        <div className={style.content}>
          <Logo />
          <nav className={style.menu}>
            <ul>
              <li><a href="#">Buscar Pet</a></li>
              <li><a href="#">Divulgar Pet</a></li>
              <li><a href="#">Sobre Nós</a></li>
              <li><a href="#">Contato ONG</a></li>
            </ul>
          </nav>

          <ButtonCreateAccount />
        </div>
      </div>

    </header>
    
  )
}