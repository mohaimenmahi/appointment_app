import React, { Component } from "react"
import DatePicker from './DatePicker'

class Home extends Component {
    render() {
        return (
            <div>
                <h3>Fix your appointment Here!</h3>
                <DatePicker />            
            </div>
        )
    }
}

export default Home