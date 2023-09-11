import React from 'react';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import { Link } from 'react-router-dom';

import './Header.css';

const Header = ({ setShow, size }) => {
  return (
    <div className='navbar'>
      <Link to='./'>ONEPICK</Link>
      <Link to='/Best'>BEST</Link>
      <Link to='/top'>TOP</Link>
      <Link to='/pants'>PANTS</Link>
      <Link to='/shirt'>SHIRT</Link>
      <Link to='/Weather'>오늘의 코디</Link>

      <Link to='/Board'>게시판</Link>
      <Link to='/Basket'>
        <ShoppingCartOutlinedIcon sx={{ height: '20px' }} />
      </Link>
      <Link to='/'>로그아웃</Link>
    </div>
  );
};

export default Header;
