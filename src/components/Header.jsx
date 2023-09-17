import React, { useEffect, useState } from 'react';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import DefaultModal from './DefaultModal';
import { Link } from 'react-router-dom';

import './Header.css';

const Header = () => {
  const [openModal, setOpenModal] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user?.userName) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, []);

  const handleClickLogout = () => {
    setOpenModal(true);
  };

  const afterConfirmModal = () => {
    setIsLogin(false);
    localStorage.removeItem('user');
  };

  return (
    <>
      <div className='navbar'>
        <Link to='./'>ONEPICK</Link>
        <Link to='/Best'>BEST</Link>
        <Link to='/Top'>TOP</Link>
        <Link to='/Pants'>PANTS</Link>
        <Link to='/Shirt'>SHIRT</Link>
        <Link to='/Weather'>오늘의 코디</Link>

        <Link to='/Board'>게시판</Link>
        <Link to='/Basket'>
          <ShoppingCartOutlinedIcon sx={{ height: '28px' }} />
        </Link>
        {isLogin ? (
          <button
            style={{
              backgroundColor: 'inherit',
              color: 'white',
              border: 0,
            }}
            onClick={handleClickLogout}
          >
            로그아웃
          </button>
        ) : (
          <Link to='/Login'>로그인</Link>
        )}
      </div>
      {openModal && <DefaultModal isOpen={openModal} setIsOpen={setOpenModal} content={'로그아웃 하시겠습니까?'} afterConfirm={afterConfirmModal} />}
    </>
  );
};

export default Header;
