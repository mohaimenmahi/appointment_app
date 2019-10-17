import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import ConfirmTime from './ConfirmTime';

class ListPop extends Component {
  state = {
    confirmPop: false, 
    confirmValue: {}
  }

  render() {
    let { onClose, selectedValue, open, timeList } = this.props;
  
    let handleClose = () => {
      onClose(selectedValue);
    };
  
    let handleListItemClick = value => {
      confirmHandle(value)
    };

    let onSubmit = value => {
      this.setState({ confirmPop: false})
      onClose(value)
    }
  
    let confirmHandle = value => {
      this.setState({ confirmPop: true, confirmValue: value})
    }
  
    return (
      <div>
        <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
          <DialogTitle id="simple-dialog-title">Set time</DialogTitle>
          <List>
            {timeList.map((time, key) => (
              <ListItem button onClick={() => handleListItemClick(time)} key={key} disabled={!time.open}>
                <ListItemText primary={time.time} />
              </ListItem>
            ))}
          </List>
        </Dialog>
        <ConfirmTime
          open={this.state.confirmPop}
          confirmValue={this.state.confirmValue}
          onClose={handleClose}
          onSubmit={onSubmit}
        />
      </div>
    );
  }
}

ListPop.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default ListPop