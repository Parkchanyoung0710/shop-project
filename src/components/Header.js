import React from 'react';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import { Link } from 'react-router-dom';

const Header = ({ setShow, size }) => {
  return (
    <>
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
    </>
  );
};

export default Header;
