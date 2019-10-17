import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

let ConfirmTime = (props) => {

  let { open, confirmValue, onClose,  onSubmit } = props

  return (
    <div>
      <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Are you sure you want to book time {confirmValue.time}?</DialogTitle>
        <DialogActions>
          <Button onClick={() => onSubmit()} color="primary">
            Disagree
          </Button>
          <Button onClick={() => onSubmit(confirmValue)} color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default ConfirmTime