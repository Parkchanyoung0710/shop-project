import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useEffect, useState } from 'react';
import Alert from '../components/Alert';
import './Profile.css';

function Profile() {
  const [showAlert, setShowAlert] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: '',
    uId: '',
    email: '',
    phone: '',
    address: '',
  });

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem('user'));

    setUserInfo({ ...userInfo, name: currentUser.userName, uId: currentUser.uId, email: currentUser.userEmail, phone: currentUser.phone, address: currentUser.address });
  }, []);

  const validatePhoneNumber = (inputPhoneNumber) => {
    const phoneNumberRegex = /^010-\d{4}-\d{4}$/;

    return phoneNumberRegex.test(inputPhoneNumber);
  };

  const handleChangeForm = (e, type) => {
    const newUserInfo = userInfo;
    newUserInfo[type] = e.target.value;

    setUserInfo({ ...newUserInfo });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();

    if (!validatePhoneNumber(userInfo.phone)) {
      alert('올바른 전화번호 형식이 아닙니다.');
      return;
    }

    const currentUser = JSON.parse(localStorage.getItem('user'));

    localStorage.setItem('user', JSON.stringify({ ...currentUser, userName: userInfo.name, phone: userInfo.phone, address: userInfo.address }));
    setShowAlert(true);
  };

  if (!userInfo.email) return;

  return (
    <>
      <h3 className='bg-info text-white'>프로필</h3>
      <section className='profile-container'>
        <Box
          component='form'
          sx={{
            '& .MuiTextField-root': { m: 2, width: '50ch' },
            display: 'flex',
            justifyContent: 'center',
          }}
          noValidate
          autoComplete='off'
          onSubmit={(e) => handleSubmitForm(e)}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <TextField disabled id='outlined-disabled' label='닉네임' defaultValue={userInfo.name} variant='standard' onChange={(e) => handleChangeForm(e, 'name')} />
            <TextField disabled id='outlined-disabled' label='이메일' defaultValue={userInfo.email} variant='standard' onChange={(e) => handleChangeForm(e, 'email')} />
            <TextField id='outlined' label='휴대폰 번호 (010-0000-0000)' variant='standard' defaultValue={userInfo.phone} onChange={(e) => handleChangeForm(e, 'phone')} />
            <TextField id='outlined' label='주소' defaultValue={userInfo.address} variant='standard' onChange={(e) => handleChangeForm(e, 'address')} />
            <Box sx={{ padding: '0 2.5%', mt: '20px', display: 'flex', justifyContent: 'space-between' }}>
              <Button sx={{ width: '45%' }} type='submit' variant='outlined' color='primary' size='large'>
                저장하기
              </Button>
              <Button sx={{ width: '45%' }} variant='outlined' color='secondary' size='large' onClick={() => (window.location.href = '/')}>
                취소하기
              </Button>
            </Box>
          </div>
        </Box>
      </section>
      {showAlert && <Alert showAlert={showAlert} setShowAlert={setShowAlert} content={'프로필 저장이 완료되었습니다.'} />}
    </>
  );
}

export default Profile;
