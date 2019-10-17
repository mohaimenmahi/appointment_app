import React, { Component } from "react"
import DatePicker from './DatePicker'
import TextField from '@material-ui/core/TextField';

import './Home.css'

class Home extends Component {
    state = {
        name: '',
        number: '',
        selectedTime: ''
    }
    handleChange = name => event => {
        this.setState({ [name]: event.target.value })
    }
    render() {
        
        return (
            <div>
                <h3>Fix your appointment Here!</h3>
                <form className='container' noValidate autoComplete="off">
                    <TextField
                        id="standard-name"
                        label="Name"
                        value={this.state.name}
                        className='text_field'
                        onChange={this.handleChange('name')}
                        margin="normal"
                    />
                    <TextField
                        id="standard-name"
                        label="Number"
                        value={this.state.number}
                        type="number"
                        className='text_field'
                        onChange={this.handleChange('number')}
                        margin="normal"
                    />
                </form>
                <DatePicker />            
            </div>
        )
    }
}

export default Home