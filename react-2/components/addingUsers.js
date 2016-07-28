import React, { Component } from 'react'
import './addingUsers.css'

class AddingUsers extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="adding-users">
                <input type="text" placeholder="User's name" id="addingInput"/>
                <button id="addingButton" onClick={this.props.handleAdd}>Add</button>
            </div>
        )
    }
}

export default AddingUsers