import React, { Component } from 'react'
import './addedUsersList.css'
import User from './user.js'

class AddedUsersList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: this.props.users
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            users: nextProps.users
        });
    }

    handleRemove2(id) {
        this.props.handleRemove1(id);
    }

    render() {
        const { users } = this.state;
        return (
            <div className="added-users-list">
                {(users.length == 0) ? 'No users' :
                    users.map(
                        (elem,index) => {
                            if (elem.visibility)
                                return <User key={elem.id} user={elem} handleRemove3={this.handleRemove2.bind(this,elem.id)}/>
                        }
                    )
                }
            </div>
        )
    }
}

export default AddedUsersList