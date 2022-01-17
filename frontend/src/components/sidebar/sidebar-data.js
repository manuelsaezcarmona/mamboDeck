import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
// import * as IoIcons from 'react-icons/io';

export const SidebarDataGuest = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Register',
    path: '/register',
    icon: <FaIcons.FaUserPlus />,
    cName: 'nav-text'
  },

  {
    title: 'Login',
    path: '/login',
    icon: <FaIcons.FaUserCheck />,
    cName: 'nav-text'
  }

];
