/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/function-component-definition */
import React, { useState } from 'react';

import { Link } from 'react-router-dom';

// ICONS
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';

// Data Items
import { SidebarDataGuest } from './sidebar-data';

// Styles
import './sidebar.scss';

export function SideBar() {
  const [sidebar, setsidebar] = useState(false);

  const showSidebar = () => setsidebar(!sidebar);

  return (
    <>
      <div className="navbar">
        <Link to="#" className="menu-bars">
          <FaIcons.FaBars onClick={showSidebar} />
        </Link>
      </div>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <AiIcons.AiOutlineClose />
            </Link>
          </li>
          {SidebarDataGuest.map((item, index) => (
            <li key={item.cName && index} className={item.cName}>
              <Link to={item.path} className={item.cName}>
                {item.icon}
                <span>{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
