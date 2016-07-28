import React, { Component } from 'react'
import './usersList.css'
import AddingUsers from './addingUsers.js'
import AddedUsersList from './addedUsersList.js'

class UsersList extends Component {
    constructor() {
        super();
        this.state = {
            counter: 1,
            users: []
        }
        this.handleAdd = this.handleAdd.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
    }

    handleAdd() {
        if ( document.getElementById('addingInput').value ){
            const { users, counter } = this.state;
            var newUser = {
                name: document.getElementById('addingInput').value,
                id: counter
            };
            var newUsers = users; newUsers.push(newUser);
            this.setState({
                users: newUsers,
                counter: this.state.counter + 1
            });
        }
    }

    handleRemove(id) {
        const { users } = this.state;
        var newUsers = [];
        for (var i = 0; i < users.length; i++) {
            if (users[i].id != id) {
                newUsers.push(users[i]);
            }
        }
        this.setState({
            users: newUsers
        });

    }

    render() {
        return (
            <div className='app-content'>
                <AddingUsers handleAdd={this.handleAdd}/>
                <AddedUsersList users={this.state.users} handleRemove1={this.handleRemove}/>
            </div>
        )
    }
}

export default UsersList