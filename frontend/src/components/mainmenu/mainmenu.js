import { Link } from 'react-router-dom';
import './mainmenu.scss';

export function MainMenu() {
  const template = (
    <nav className="mainmenu-nav">
      <ul className="mainmenu-nav__list">
        <li className="mainmenu-nav__item">
          <Link className="mainmenu-nav__link" to="/register">Registro</Link>
        </li>
        <li className="mainmenu-nav__item">
          <Link className="mainmenu-nav__link" to="/login">Login</Link>
        </li>
        <li className="mainmenu-nav__item">
          <Link className="mainmenu-nav__link" to="/user">Tu cuenta</Link>
        </li>
      </ul>
    </nav>
  );

  return template;
}
