import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
export default function SimpleSnackbar({ open, handleClose }) {
  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        open={open}
        onClose={handleClose}
        action={
            <Alert severity="success">You got a match</Alert>
        }
      />
    </div>
  );
}
