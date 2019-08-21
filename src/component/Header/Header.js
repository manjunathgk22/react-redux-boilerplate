import React from 'react';
import { Link } from 'react-router-dom';

// const { Header } = Layout;

const LEFT_NAV_ITEMS = [
  {
    id: 'home',
    label: 'Home Work',
    path: '/'
  },
  {
    id: 'about',
    label: 'About',
    path: '/about'
  },
  {
    id: 'contact',
    label: 'Contact',
    path: '/contact'
  }
];

const AppHeader = () => (
  // <Link to={navItem.path}>{navItem.label}</Link>
  <header className='header'>
    <div className='logo' />
    <div theme='dark' mode='horizontal' defaultSelectedKeys={['home']} style={{ lineHeight: '64px' }}>
      {LEFT_NAV_ITEMS.map((navItem) => (
        <div key={navItem.id}>
          <Link to={navItem.path}>{navItem.label}</Link>
        </div>
      ))}
    </div>
  </header>
);

export default AppHeader;
