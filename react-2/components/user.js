import React, { Component } from 'react'
import './user.css'

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: this.props.user
        }
    }

    render() {
        return (
            <div className="users">
                <span>{this.props.user.name} </span>
                <button id="RemovingButton" onClick={this.props.handleRemove3}>Remove</button>
            </div>
        )
    }
}

export default User