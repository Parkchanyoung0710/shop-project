import React, { useEffect } from 'react';

import { Alert as AlertMUI } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

export default function Alert({ showAlert, setShowAlert, content }) {
  useEffect(() => {
    setShowAlert(true);

    const timer = setTimeout(() => {
      setShowAlert(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        open={showAlert}
        autoHideDuration={2000}
        onClose={() => setShowAlert(false)}
        action={
          <IconButton size='small' aria-label='close' color='inherit' onClick={() => setShowAlert(false)}>
            <CloseIcon fontSize='small' />
          </IconButton>
        }
      >
        <AlertMUI onClose={() => setShowAlert(false)} severity='success'>
          {content}
        </AlertMUI>
      </Snackbar>
    </div>
  );
}
