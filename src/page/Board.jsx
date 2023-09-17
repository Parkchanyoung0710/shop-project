import { useEffect, useState } from 'react';

import { json, useNavigate } from 'react-router-dom';

import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import Fab from '@mui/material/Fab';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import './board.css';

const Board = () => {
  const navigate = useNavigate();
  const [defaultBoard, setDefaultBoard] = useState({
    1: {
      title: '게시판 1',
      userName: '테스트2',
      createdAt: '2023/09/01',
      content: 'Test',
      uId: 'xcVs06iAtcMHqob5Nfr8CouzfgY2',
      id: 1,
    },
    2: {
      title: '게시판 2',
      userName: '테스트',
      createdAt: '2023/09/03',
      content: 'Test2',
      uId: 'WmRGnSPs4efpqwxycUl9WrHYYkB3',
      id: 2,
    },
    3: {
      title: '게시판 3',
      userName: '테스트',
      createdAt: '2023/09/04',
      content: 'Test3',
      uId: 'WmRGnSPs4efpqwxycUl9WrHYYkB3',
      id: 3,
    },
  });

  useEffect(() => {
    const boardData = JSON.parse(localStorage?.getItem('board'));
    const newBoardData = { ...defaultBoard, ...boardData };

    setDefaultBoard(newBoardData);
    localStorage.setItem('board', JSON.stringify(newBoardData));
  }, []);

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  const handleAddBoardClick = () => {
    navigate('/write', { state: { data: {} } });
  };

  const handleEditBoardClick = (key, data) => {
    if (verifyUser(data)) navigate('/write', { state: { key, data } });
    else alert('작성자가 아닙니다.');
  };

  const handleDeleteBoardClick = (key, data) => {
    if (verifyUser(data)) {
      const newBoards = Object.values(defaultBoard).filter((board) => board.id !== data.id);
      setDefaultBoard(newBoards);
    } else alert('작성자가 아닙니다.');
  };

  const verifyUser = (data) => {
    const currentUserId = JSON.parse(localStorage.getItem('user'))?.uId;
    if (currentUserId === data.uId) return true;

    return false;
  };

  const handleClickTable = () => {};

  return (
    <>
      <h2 className='bg-info text-white'>게시판</h2>
      <section className='board-container'>
        <Box sx={{ width: '60%', m: '50px auto 50px auto' }}>
          <TableContainer>
            <Table sx={{ minWidth: 650 }} aria-label='simple table'>
              <TableHead>
                <TableRow>
                  <StyledTableCell>제목</StyledTableCell>
                  <StyledTableCell align='center'>작성자</StyledTableCell>
                  <StyledTableCell align='center'>작성 날짜</StyledTableCell>
                  <StyledTableCell align='center'>옵션</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {Object.entries(defaultBoard).map(([key, row]) => (
                  <StyledTableRow key={row.title} className='board-item' onClick={handleClickTable} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <StyledTableCell component='th' scope='row'>
                      {row.title}
                    </StyledTableCell>
                    <StyledTableCell align='center'>{row.userName}</StyledTableCell>
                    <StyledTableCell align='center'>{row.createdAt}</StyledTableCell>
                    <StyledTableCell align='center'>
                      <IconButton aria-label='edit' onClick={() => handleEditBoardClick(key, row)}>
                        <EditIcon />
                      </IconButton>
                      <IconButton aria-label='delete' onClick={() => handleDeleteBoardClick(key, row)}>
                        <DeleteIcon />
                      </IconButton>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        <div className='create-board'>
          <Fab color='primary' aria-label='add' onClick={handleAddBoardClick}>
            <AddIcon />
          </Fab>
        </div>
      </section>
    </>
  );
};

export default Board;
