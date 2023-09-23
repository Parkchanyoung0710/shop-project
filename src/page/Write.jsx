import { useState } from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

import { useNavigate, useLocation } from 'react-router-dom';

import './Write.css';

export default function Write() {
  const navigate = useNavigate();
  const location = useLocation();

  const [boardInfo, setBoardInfo] = useState(
    location.state.data ?? {
      title: '',
      content: '',
      id: '',
      uId: '',
      createdAt: '',
    }
  );

  const handleChangeBoard = (e, type) => {
    if (type === 'title') {
      setBoardInfo((prev) => ({ ...prev, title: e.target.value }));
    } else if (type === 'content') {
      setBoardInfo((prev) => ({ ...prev, content: e.target.value }));
    }
  };

  const handleClickConfirm = () => {
    const currentDate = new Date();

    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');

    const formattedDate = `${year}/${month}/${day}`;
    const currentTimeInSeconds = Math.floor(currentDate.getTime() / 1000);

    const currentUser = JSON.parse(localStorage.getItem('user'));
    const newBoardInfo = { ...boardInfo, userName: currentUser.userName, id: currentTimeInSeconds, uId: currentUser.uId, createdAt: formattedDate };

    setBoardInfo(newBoardInfo);

    const prevBoard = JSON.parse(localStorage?.getItem('board'));
    const keyToDelete = boardInfo.id;
    delete prevBoard[keyToDelete];
    localStorage.setItem('board', JSON.stringify({ ...prevBoard, [currentTimeInSeconds]: newBoardInfo }));
    navigate(-1);
  };
  const handleClickCancel = () => {
    navigate(-1);
  };

  return (
    <div>
      <h2 className='bg-info text-white'>게시판 글 작성</h2>
      <Box
        component='form'
        sx={{
          '& .MuiTextField-root': { m: 1.5, width: '70%' },
          minHeight: 'calc(100vh - 208.266px)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
        noValidate
        autoComplete='off'
      >
        <div className='write-form'>
          <TextField className='write-title' required label='제목' autoFocus={true} fullWidth={true} onChange={(e) => handleChangeBoard(e, 'title')} defaultValue={boardInfo.title} />
          <TextField
            className='write-content'
            required
            label='내용'
            fullWidth={true}
            multiline={true}
            sx={{
              height: '20vh',
              '& textarea': {
                overflowY: 'auto',
                height: '20vh!important',
              },
            }}
            defaultValue={boardInfo.content}
            onChange={(e) => handleChangeBoard(e, 'content')}
          />
        </div>
        <div className='write-btn'>
          <Button variant='contained' color='primary' sx={{ mr: '15px' }} onClick={handleClickConfirm}>
            작성하기
          </Button>
          <Button variant='outlined' color='error' onClick={handleClickCancel}>
            취소
          </Button>
        </div>
      </Box>
    </div>
  );
}
