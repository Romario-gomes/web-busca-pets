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
              <li><a href="#">Find a property</a></li>
              <li><a href="#">Share Stories</a></li>
              <li><a href="#">Rental Guides</a></li>
              <li><a href="#">Contact ONG</a></li>
            </ul>
          </nav>

          <ButtonCreateAccount />
        </div>
      </div>

    </header>
    
  )
}