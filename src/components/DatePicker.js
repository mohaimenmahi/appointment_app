import React, { Component } from 'react'
import * as startOfDay from "date-fns";
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers';
import { TimeArray } from '../data/timings'

import ListPop from './ListPop'

class DatePicker extends Component {
  state = {
    selected: new Date(),
    open: false,
    selectedTime: TimeArray[0].slot,
    timeList: TimeArray,
    confirmPop: false
  }

  // componentDidMount() {
  //   console.log('array size', this.state.timeList.length)
  // }

  handleDateChange = date => {
    this.setState({ selected: date }, () => {
      console.log(this.state.selected)
      if(this.state.selected != 'Invalid Date' && this.state.selected != null) {
        this.setState({ open: true})
      }
    })
  }

  handleClose = value => {
    this.setState({ open: false }, () => {
      if(value && value.slot > 0) {
        this.state.timeList[value.slot].open = false 
      }
    })
  }

  render() {
    return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="dd/MM/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Pick a day"
          value={this.state.selected}
          onChange={this.handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
          className='check'
        />
        <ListPop 
          timeList={this.state.timeList} 
          open={this.state.open} 
          selectedValue={this.state.selectedTime} 
          onClose={this.handleClose} 
        />
      </MuiPickersUtilsProvider>
    )
  }
}

export default DatePicker
