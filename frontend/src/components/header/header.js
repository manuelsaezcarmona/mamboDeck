import { Link } from 'react-router-dom';
import { MainMenu } from '../mainmenu/mainmenu';
import { SideBar } from '../sidebar/sidebar';
import { CategoryMenu } from '../categorymenu/categorymenu';

import './header.scss';

export function Header() {
  const template = (
    <header className="header-container">
      <div className="general-menu-container">
        <p className="logo-container">
          <Link className="logo-link" to="/">
            <span className="logo-link__span logo-link__span--before">Mambo</span>
            <span className="logo-link__span logo-link__span--after">Deck</span>
          </Link>
        </p>
        <SideBar />
        <MainMenu />

      </div>
      <div className="categorymenu-container">
        <CategoryMenu />
      </div>

    </header>
  );

  return template;
}
